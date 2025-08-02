// const u = space.createVector(40, 0);

import p5 from 'p5';
import { drawLine } from './drawLine';
import { spaces } from './spaces';
import { store } from '../store/store';

export const drawParallelLines = (p: p5) => {
    p.background(0, 0, 95);
    p.translate(0.5 * p.width, 0.5 * p.height);
    p.noFill();

    const space = spaces[store.getState().curvatureIndex];

    const u = space.createVector(40, 0);
    const v = u.rotate(p.HALF_PI);

    const count = 5;

    for (let x = -count; x <= count; x++) {
        drawLine(p, u.mult(x), v.mult(-count));
        drawLine(p, u.mult(x), v.mult(count));
        drawLine(p, v.mult(x), u.mult(-count));
        drawLine(p, v.mult(x), u.mult(count));
    }
};
