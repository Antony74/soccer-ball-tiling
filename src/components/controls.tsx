import React from 'react';
import { useSketchParams } from '../hooks/useSketchParams';

export const Controls = () => {
    const {
        curvature,
        curvatureIndex,
        curvatureMinus,
        curvaturePlus,
        maxCurvatureIndex,
    } = useSketchParams();

    return (
        <div>
            <div id="grid">
                <div>
                    <strong>Sketch:</strong>
                </div>
                <div>
                    <select aria-label="Sketch"></select>
                </div>
            </div>
            <div id="grid">
                <div>
                    <strong>Curvature:</strong>
                </div>
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
