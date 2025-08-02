import React from 'react';
import { curvatures, State } from '../store/store';
import { useSelector } from 'react-redux';
import { curvatureMinus, curvaturePlus } from '../store/actions';

export const Controls = () => {
    const curvatureIndex = useSelector((state: State) => state.curvatureIndex);

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
