import p5 from 'p5';
import { sketches, store } from '../store/store';
import { drawTiling } from './drawTiling';
import { drawParallelLines } from './drawParallelLines';
import { GyrovectorSpaceFactory } from 'gyrovector';

import {
    curvatureMinus,
    curvaturePlus,
    moveDown,
    moveLeft,
    moveRight,
    moveUp,
    transitionCurvature,
} from '../store/actions';

const curvatures = [
    -1 / 100000, // Hyperbolic
    0, // Euclidean
    1 / 100000, // Spherical
];

export const sketch = (p: p5) => {
    const keys: [number, () => void][] = [
        [p.LEFT_ARROW, moveLeft],
        [p.RIGHT_ARROW, moveRight],
        [p.UP_ARROW, moveUp],
        [p.DOWN_ARROW, moveDown],
        ['W'.charCodeAt(0), moveUp],
        ['A'.charCodeAt(0), moveLeft],
        ['S'.charCodeAt(0), moveDown],
        ['D'.charCodeAt(0), moveRight],
    ];

    p.setup = () => {
        p.createCanvas(500, 500);
        p.colorMode(p.HSB);
    };

    p.draw = () => {
        p.push();

        const state = store.getState();

        keys.forEach(([key, fn]) => {
            if (p.keyIsDown(key)) {
                fn();
            }

            if (state.keysDown[String.fromCharCode(key)]) {
                fn();
            }
        });

        const curvature = p.map(
            state.curvatureTransition,
            0,
            1,
            curvatures[state.prevCurvatureIndex],
            curvatures[state.curvatureIndex],
        );

        if (state.curvatureTransition < 1) {
            transitionCurvature();
        }

        const space = GyrovectorSpaceFactory.create(2, curvature);

        const offset = space.createVector(state.offset.x, state.offset.y);

        switch (store.getState().sketchIndex) {
            case sketches.Lines:
                drawParallelLines(p, space, offset);
                break;
            default:
                drawTiling(p, space, offset);
        }

        p.pop();
    };

    p.keyPressed = () => {
        switch (p.key) {
            case '+':
                curvaturePlus();
                break;
            case '-':
                curvatureMinus();
                break;
        }
    };
};
