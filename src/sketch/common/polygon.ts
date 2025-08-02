import p5 from 'p5';
import { drawLine, VectorLikeXY } from './drawLine';

export type PolygonSide<GyrovectorType> = {
    point: GyrovectorType;
    line: GyrovectorType;
};

export class Polygon<GyrovectorType extends VectorLikeXY<GyrovectorType>> {
    sides: PolygonSide<GyrovectorType>[] = [];

    constructor(
        private p: p5,
        sideCount: number,
        firstSide: GyrovectorType,
        angle: number,
    ) {
        let point = firstSide.mult(0);
        let line = firstSide;

        for (let n = 0; n < sideCount; ++n) {
            this.sides.push({ point, line });

            point = point.add(line);
            line = line.rotate(angle);
        }
    }

    draw(start: GyrovectorType) {
        for (let index = 0; index < this.sides.length; ++index) {
            const { point, line } = this.sides[index];
            drawLine(this.p, start.add(point), line);
        }
    }
}
