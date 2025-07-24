import React from 'react';
import { curvatureMinus, curvaturePlus } from './store';

export const Controls = () => {
    return (
        <div>
            <button
                onClick={() => {
                    curvatureMinus();
                }}
            >
                -
            </button>
            <button
                onClick={() => {
                    curvaturePlus();
                }}
            >
                +
            </button>
        </div>
    );
};
