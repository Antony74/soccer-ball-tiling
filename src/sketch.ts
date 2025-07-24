import p5 from 'p5';
import { sketches, store } from './store';
import { drawTiling } from './drawTiling';

export const sketch = (p: p5) => {
    p.setup = () => {
        p.createCanvas(500, 500);
        p.colorMode(p.HSB);
    };

    p.draw = () => {
        p.background(0, 0, 95);

        switch (store.getState().sketchIndex) {
            case sketches.Lines:
            default:
                drawTiling(p);
        }

        p.noLoop();
    };
};
