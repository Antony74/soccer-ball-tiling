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
        start: GyrovectorType,
        firstSide: GyrovectorType,
        sideCount: number,
        angle: number,
    ) {
        let point = start;
        let line = firstSide;

        for (let n = 0; n < sideCount; ++n) {
            this.sides.push({ point, line });

            point = point.add(line);
            line = line.rotate(angle);
        }
    }

    draw() {
        for (let index = 0; index < this.sides.length; ++index) {
            const { point, line } = this.sides[index];
            drawLine(this.p, point, line);
        }
    }
}
