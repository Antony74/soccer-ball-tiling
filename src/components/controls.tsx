import React from 'react';
import { useSketchParams } from '../hooks/useSketchParams';

export const Controls = () => {
    const { curvatureIndex, curvatureMinus, curvaturePlus, maxCurvatureIndex } =
        useSketchParams();

    return (
        <div>
            <button onClick={curvatureMinus} disabled={curvatureIndex <= 0}>
                -
            </button>
            <button
                onClick={curvaturePlus}
                disabled={curvatureIndex >= maxCurvatureIndex}
            >
                +
            </button>
        </div>
    );
};
