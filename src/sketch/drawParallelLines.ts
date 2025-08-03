import p5 from 'p5';
import { drawLine, VectorLikeXY } from './common/drawLine';
import { VectorSpaceLike } from 'gyrovector';

export const drawParallelLines = <
    GyrovectorType extends VectorLikeXY<GyrovectorType>,
>(
    p: p5,
    space: VectorSpaceLike<2, GyrovectorType>,
    offset: GyrovectorType,
) => {
    p.background(0, 0, 95);
    p.translate(0.5 * p.width, 0.5 * p.height);
    p.noFill();

    const u = space.createVector(40, 0);
    const v = u.rotate(p.HALF_PI);

    const count = 5;

    for (let x = -count; x <= count; x++) {
        drawLine(p, offset.add(u.mult(x)), v.mult(-count));
        drawLine(p, offset.add(u.mult(x)), v.mult(count));
        drawLine(p, offset.add(v.mult(x)), u.mult(-count));
        drawLine(p, offset.add(v.mult(x)), u.mult(count));
    }
};
