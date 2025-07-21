import p5 from 'p5';
import { GyrovectorSpaceFactory } from 'gyrovector/src/gyrovectorSpaceFactory';
import { store } from './store';
import { Polygon } from './polygon';

const space = GyrovectorSpaceFactory.create(2, -1 / 100000); // Hyperbolic
//const space = GyrovectorSpaceFactory.create(2, 0); // Euclidean
//const space = GyrovectorSpaceFactory.create(2, 1 / 100000); // Spherical

export const sketch = (p: p5) => {
    p.setup = () => {
        p.createCanvas(500, 500);
        p.colorMode(p.HSB);
    };

    p.draw = () => {
        p.background(0, 0, 95);

        p.noStroke();
        p.fill(0);
        p.text(store.getState().value, 100, 100);

        p.translate(0.5 * p.width, 0.5 * p.height);
        p.noFill();
        p.strokeWeight(10);
        p.stroke(0, 255, 255);

        const size = 80;

        const u = space.createVector(size, 0);

        const sides = 5;
        const turn = (2 * Math.PI) / sides;

        const poly = new Polygon(p, sides, u, turn);
        poly.draw(u.mult(0));

        p.noLoop();
    };
};
