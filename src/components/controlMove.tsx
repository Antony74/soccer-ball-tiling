import React from 'react';
import { keyDown, keyUp } from '../store/actions';

const Key = ({ value }: { value: string }) => {
    return (
        <button
            onMouseDown={() => keyDown(value)}
            onMouseUp={() => keyUp(value)}
            onMouseLeave={() => keyUp(value)}
        >
            {value}
        </button>
    );
};

export const ControlMove = () => {
    return (
        <div className="gridSmall">
            <div>
                <strong>Move:</strong>
            </div>
            <div>
                <div className="center">
                    <Key value="W" />
                </div>
                <div className="center">
                    <Key value="A" />
                    <Key value="S" />
                    <Key value="D" />
                </div>
            </div>
        </div>
    );
};
