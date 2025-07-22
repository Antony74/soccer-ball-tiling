import React from 'react';
import { curvatureMinus, curvaturePlus } from './store';
import { useDispatch } from 'react-redux';

export const Controls = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button
                onClick={() => {
                    dispatch(curvatureMinus());
                }}
            >
                -
            </button>
            <button
                onClick={() => {
                    dispatch(curvaturePlus());
                }}
            >
                +
            </button>
        </div>
    );
};
