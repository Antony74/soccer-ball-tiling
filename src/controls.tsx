import React from 'react';
import { curvatureMinus, curvaturePlus, curvatures, State } from './store';
import { useSelector } from 'react-redux';

export const Controls = () => {
    const curvatureIndex = useSelector(
        (state: State) => state.curvatureIndex,
    );

    return (
        <div>
            <button
                onClick={() => {
                    curvatureMinus();
                }}
                disabled={curvatureIndex <= 0}
            >
                -
            </button>
            <button
                onClick={() => {
                    curvaturePlus();
                }}
                disabled={curvatureIndex >= Object.keys(curvatures).length - 1}
            >
                +
            </button>
        </div>
    );
};
