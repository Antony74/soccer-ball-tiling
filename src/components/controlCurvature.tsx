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
            <div className="col1 padding5">
                <strong>Curvature:</strong>
            </div>
            <div className="col2 padding5">
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
            <div className="col3 padding5">
                <i>{curvature}</i>
            </div>
        </div>
    );
};
