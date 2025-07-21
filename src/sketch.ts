import p5 from 'p5';
import { GyrovectorSpaceFactory } from 'gyrovector/src/gyrovectorSpaceFactory';
import { store } from './store';

const space = GyrovectorSpaceFactory.create(2, -1 / 100000); // Hyperbolic
//const space = GyrovectorSpaceFactory.create(2, 0); // Euclidean
//const space = GyrovectorSpaceFactory.create(2, 1 / 100000); // Spherical

type GyrovectorType = ReturnType<typeof space.createVector>;

export const sketch = (p: p5) => {
    const lineMap = (
        value: number,
        start1: number,
        end1: number,
        start2: GyrovectorType,
        end2: GyrovectorType,
    ): GyrovectorType => {
        return start2.add(end2.mult(p.map(value, start1, end1, 0, 1)));
    };

    const drawLine = (start: GyrovectorType, line: GyrovectorType) => {
        const segments = 100;
        p.beginShape();
        for (let n = 0; n <= segments; ++n) {
            const v = lineMap(n, 0, segments, start, line);
            p.vertex(v.x, v.y);
        }
        p.endShape();
    };

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
            drawLine(currentPoint, u);

            nextPoint = currentPoint.add(u);

            p.strokeWeight(5);
            p.stroke(0, 255, 255);
            drawLine(nextPoint, u.mult(-1));

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

