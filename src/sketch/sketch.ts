import p5 from 'p5';
import { sketches, store } from '../store/store';
import { drawTiling } from './drawTiling';
import { drawParallelLines } from './drawParallelLines';
import { GyrovectorSpaceFactory } from 'gyrovector';

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

    const offsetAmount = 1;
    let xOffset = 0;
    let yOffset = 0;

    p.draw = () => {
        p.push();

        if (p.keyIsDown(p.LEFT_ARROW)) {
            xOffset -= offsetAmount;
        }

        if (p.keyIsDown(p.RIGHT_ARROW)) {
            xOffset += offsetAmount;
        }

        if (p.keyIsDown(p.UP_ARROW)) {
            yOffset -= offsetAmount;
        }

        if (p.keyIsDown(p.DOWN_ARROW)) {
            yOffset += offsetAmount;
        }

        const space = GyrovectorSpaceFactory.create(
            2,
            curvatures[store.getState().curvatureIndex],
        );

        const offset = space.createVector(xOffset, yOffset);

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
