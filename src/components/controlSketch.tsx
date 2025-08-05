import React from 'react';
import { sketchesArray } from '../store/store';
import { useSketchParams } from '../hooks/useSketchParams';

export const ControlSketch = () => {
    const { sketch, setSketch } = useSketchParams();

    return (
        <div className="grid">
            <div className="col1 padding5">
                <strong>Sketch:</strong>
            </div>
            <div className="col2 padding5">
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
    );
};
