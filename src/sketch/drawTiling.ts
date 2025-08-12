import p5 from 'p5';
import { Polygon } from './common/polygon';
import { VectorSpaceLike } from 'gyrovector';
import { VectorLikeXY } from './common/drawLine';

export const drawTiling = <GyrovectorType extends VectorLikeXY<GyrovectorType>>(
    p: p5,
    space: VectorSpaceLike<2, GyrovectorType>,
    offset: GyrovectorType,
    curvature: number,
) => {
    p.background(0, 0, 95);

    p.translate(0.5 * p.width, 0.5 * p.height);
    p.noFill();
    p.strokeWeight(5);
    p.stroke(0, 255, 255, 0.5);

    const size = 80;

    let specialSides = 6;

    if (curvature > 0) {
        specialSides = 5;
    } else if (curvature < 0) {
        specialSides = 7;
    }

    const drawRecursive = (
        depth: number,
        point: GyrovectorType,
        line: GyrovectorType,
        sign: number,
    ) => {
        if (depth < 1) {
            return;
        }

        const sides = depth === 2 ? specialSides : 6;
        const angle = sign * (2 * Math.PI) / sides;

        const poly = new Polygon(
            p,
            point,
            line,
            sides,
            angle,
        );

        poly.draw();

        for (let index = 0; index < sides; ++index) {
            drawRecursive(
                depth - 1,
                poly.sides[index].point,
                poly.sides[index].line,
                -sign,
            );
        }
    };

    drawRecursive(2, offset, space.createVector(size, 0), 1);
};
