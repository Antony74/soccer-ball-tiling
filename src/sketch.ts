import p5 from 'p5';
import { GyrovectorSpaceFactory } from 'gyrovector/src/gyrovectorSpaceFactory';

const space = GyrovectorSpaceFactory.create(2, 1 / 200000);

type GyrovectorType = ReturnType<typeof space.createVector>;

new p5((p) => {
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

    const drawPolygon = (u: GyrovectorType, sides: number) => {
        const turn = (2 * Math.PI) / sides;
        const interiorAngle = ((sides - 2) * Math.PI) / sides;
        const firstTurn = Math.PI - (0.5 * interiorAngle);
        let currentPoint = u.div(2);
        u = u.rotate(firstTurn);
        let nextPoint = currentPoint.add(u);
        for (let side = 1; side <= sides; ++side) {
            drawLine(currentPoint, u);
            currentPoint = nextPoint;
            u = u.rotate(turn);
            nextPoint = currentPoint.add(u);
        }
    };

    p.setup = () => {
        p.createCanvas(500, 500);
        p.colorMode(p.HSB);
    };

    p.draw = () => {
        p.translate(0.5 * p.width, 0.5 * p.height);
        p.background(0, 0, 95);
        p.noFill();
        p.strokeWeight(10);

        const size = 100;

        const u = space.createVector(size, 0);

        drawPolygon(u, 5);
        p.noLoop();
    };
});
