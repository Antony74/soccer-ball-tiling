import React from 'react';
import { useSketchParams } from '../hooks/useSketchParams';
import { sketchesArray } from '../store/store';

export const Controls = () => {
    const {
        sketch,
        setSketch,
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
                    <select
                        aria-label="Sketch"
                        defaultValue={sketch}
                        onChange={(event) => {
                            setSketch(event.target.value);
                        }}
                    >
                        {sketchesArray.map((option) => {
                            return <option key={option}>{option}</option>;
                        })}
                    </select>
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
