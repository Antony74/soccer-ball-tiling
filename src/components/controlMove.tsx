import React from 'react';
import { moveDown, moveLeft, moveRight, moveUp } from '../store/actions';

export const ControlMove = () => {
    return (
        <div className="gridSmall">
            <div>
                <strong>Move:</strong>
            </div>
            <div>
                <div className="center">
                    <button onClick={moveUp}>W</button>
                </div>
                <div className="center">
                    <button onClick={moveLeft}>A</button>
                    <button onClick={moveDown}>S</button>
                    <button onClick={moveRight}>D</button>
                </div>
            </div>
        </div>
    );
};
