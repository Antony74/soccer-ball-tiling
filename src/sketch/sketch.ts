import p5 from 'p5';
import { sketches, store } from '../store/store';
import { drawTiling } from './drawTiling';
import { drawParallelLines } from './drawParallelLines';

export const sketch = (p: p5) => {
    p.setup = () => {
        p.createCanvas(500, 500);
        p.colorMode(p.HSB);
    };

    p.draw = () => {
        p.push();

        switch (store.getState().sketchIndex) {
            case sketches.Lines:
                drawParallelLines(p);
                break;
            default:
                drawTiling(p);
        }

        p.pop();
        p.noLoop();
    };
};
