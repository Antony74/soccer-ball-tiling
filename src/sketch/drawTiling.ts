import p5 from 'p5';
import { Polygon } from './common/polygon';
import { VectorSpaceLike } from 'gyrovector';
import { VectorLikeXY } from './common/drawLine';

export const drawTiling = <GyrovectorType extends VectorLikeXY<GyrovectorType>>(
    p: p5,
    space: VectorSpaceLike<2, GyrovectorType>,
    offset: GyrovectorType,
) => {
    p.background(0, 0, 95);

    p.translate(0.5 * p.width, 0.5 * p.height);
    p.noFill();
    p.strokeWeight(10);
    p.stroke(0, 255, 255);

    const size = 80;

    const u = space.createVector(size, 0);

    const sides = 5;
    const turn = (2 * Math.PI) / sides;

    const poly = new Polygon(p, sides, u, turn);
    poly.draw(offset);
};
