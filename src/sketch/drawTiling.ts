import p5 from 'p5';
import { store } from '../store/store';
import { Polygon } from './common/polygon';
import { spaces } from './common/spaces';

export const drawTiling = (p: p5) => {
    p.background(0, 0, 95);

    p.translate(0.5 * p.width, 0.5 * p.height);
    p.noFill();
    p.strokeWeight(10);
    p.stroke(0, 255, 255);

    const size = 80;

    const space = spaces[store.getState().curvatureIndex];

    const u = space.createVector(size, 0);

    const sides = 5;
    const turn = (2 * Math.PI) / sides;

    const poly = new Polygon(p, sides, u, turn);
    poly.draw(u.mult(0));

    p.noLoop();
};
