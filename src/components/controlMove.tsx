import React from 'react';
import { keyDown, keyUp } from '../store/actions';

const Key = ({ value, className }: { value: string; className: string }) => {
    return (
        <button
            className={className}
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
        <div className="grid">
            <div className="col1 padding5">
                <strong>Move:</strong>
            </div>
            <div className="col2 grid padding5">
                <Key value="W" className="row1 col2" />
                <Key value="A" className="row2 col1" />
                <Key value="S" className="row2 col2" />
                <Key value="D" className="row2 col3" />
            </div>
        </div>
    );
};
