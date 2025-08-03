import React from 'react';
import { ControlSketch } from './controlSketch';
import { ControlCurvature } from './controlCurvature';
import { ControlMove } from './controlMove';

export const Controls = () => {
    return (
        <div>
            <ControlSketch />
            <ControlCurvature />
            <ControlMove />
        </div>
    );
};
