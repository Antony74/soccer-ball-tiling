import React from 'react';
import { ControlSketch } from './controlSketch';
import { ControlCurvature } from './controlCurvature';
import { ControlMove } from './controlMove';

export const Controls = () => {
    return (
        <div className="grid">
            <ControlSketch />
            <ControlCurvature />
            <ControlMove />
        </div>
    );
};
