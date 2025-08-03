import React from 'react';
import { sketchesArray } from '../store/store';
import { useSketchParams } from '../hooks/useSketchParams';

export const ControlSketch = () => {
    const { sketch, setSketch } = useSketchParams();

    return (
        <div className="grid">
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
    );
};
