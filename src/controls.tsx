import React from 'react';
import { SketchWrapper } from './sketchWrapper';
import { increment } from './store';
import { useDispatch } from 'react-redux';

export const controls = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <SketchWrapper />
            <button
                onClick={() => {
                    dispatch(increment());
                }}
            >
                Increment
            </button>
        </div>
    );
};
