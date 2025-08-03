import p5 from 'p5';
import { sketches, store } from '../store/store';
import { drawTiling } from './drawTiling';
import { drawParallelLines } from './drawParallelLines';
import { GyrovectorSpaceFactory } from 'gyrovector';
import { moveDown, moveLeft, moveRight, moveUp } from '../store/actions';

export const curvatures = [
    -1 / 100000, // Hyperbolic
    0, // Euclidean
    1 / 100000, // Spherical
];

export const sketch = (p: p5) => {
    p.setup = () => {
        p.createCanvas(500, 500);
        p.colorMode(p.HSB);
    };

    p.draw = () => {
        p.push();

        if (p.keyIsDown(p.LEFT_ARROW)) {
            moveLeft();
        }

        if (p.keyIsDown(p.RIGHT_ARROW)) {
            moveRight();
        }

        if (p.keyIsDown(p.UP_ARROW)) {
            moveUp();
        }

        if (p.keyIsDown(p.DOWN_ARROW)) {
            moveDown();
        }

        const state = store.getState();

        const space = GyrovectorSpaceFactory.create(
            2,
            curvatures[state.curvatureIndex],
        );

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
};
