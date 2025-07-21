import p5 from 'p5';
import { GyrovectorSpaceFactory } from 'gyrovector/src/gyrovectorSpaceFactory';
import { store } from './store';
import { drawLine } from './drawLine';

const space = GyrovectorSpaceFactory.create(2, -1 / 100000); // Hyperbolic
//const space = GyrovectorSpaceFactory.create(2, 0); // Euclidean
//const space = GyrovectorSpaceFactory.create(2, 1 / 100000); // Spherical

type GyrovectorType = ReturnType<typeof space.createVector>;

export const sketch = (p: p5) => {
    const getPolygonPoints = (
        u: GyrovectorType,
        sides: number,
    ): GyrovectorType[] => {
        const result: GyrovectorType[] = [];
        const turn = (2 * Math.PI) / sides;
        let currentPoint = u.mult(0);
        let nextPoint = currentPoint.add(u);
        for (let side = 1; side <= sides; ++side) {
            result.push(currentPoint);
            currentPoint = nextPoint;

            p.strokeWeight(10);
            p.stroke(0);
            drawLine(p, currentPoint, u);

            nextPoint = currentPoint.add(u);

            p.strokeWeight(5);
            p.stroke(0, 255, 255);
            drawLine(p, nextPoint, u.mult(-1));

            u = u.rotate(turn);
        }
        return result;
    };

    const drawPolygon = (points: GyrovectorType[]) => {
        for (let index = 0; index < points.length; ++index) {
            // const currentPoint = points[index];
            // const nextPoint = points[(index + 1) % points.length];
            // const line = nextPoint.sub(currentPoint);
            // drawLine(currentPoint, line);
        }
    };

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

        const size = 80;

        const u = space.createVector(size, 0);

        const points = getPolygonPoints(u, 5);
        drawPolygon(points);
        p.noLoop();
    };
};
