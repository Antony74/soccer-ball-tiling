import React from 'react';
import { useSketchParams } from '../hooks/useSketchParams';

export const ControlCurvature = () => {
    const {
        curvature,
        curvatureIndex,
        curvatureMinus,
        curvaturePlus,
        maxCurvatureIndex,
    } = useSketchParams();

    return (
        <div className="grid">
            <div>
                <strong>Curvature:</strong>
            </div>
            <div className="gridInner">
                <div>
                    <button
                        onClick={curvatureMinus}
                        disabled={curvatureIndex <= 0}
                    >
                        -
                    </button>
                    <button
                        onClick={curvaturePlus}
                        disabled={curvatureIndex >= maxCurvatureIndex}
                    >
                        +
                    </button>
                </div>
                <div>
                    <i>{curvature}</i>
                </div>
            </div>
        </div>
    );
};
