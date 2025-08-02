import React from 'react';
import { curvatures } from '../store/store';
import { useNavigate, useSearchParams } from 'react-router';
import { setCurvatureIndex } from '../store/actions';

export const Controls = () => {
    const [params] = useSearchParams();
    const curvatureIndex = parseInt(params.get('curvatureIndex') ?? '2');
    const navigate = useNavigate();
    setCurvatureIndex(curvatureIndex);

    return (
        <div>
            <button
                onClick={() => {
                    navigate(`/?curvatureIndex=${curvatureIndex - 1}`);
                }}
                disabled={curvatureIndex <= 0}
            >
                -
            </button>
            <button
                onClick={() => {
                    navigate(`/?curvatureIndex=${curvatureIndex + 1}`);
                }}
                disabled={curvatureIndex >= Object.keys(curvatures).length - 1}
            >
                +
            </button>
        </div>
    );
};
