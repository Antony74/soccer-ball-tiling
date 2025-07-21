import { configureStore, createSlice } from '@reduxjs/toolkit';

export enum Sketch {
    Tiling,
    Lines,
}

export enum Curvature {
    Hyperbolic,
    Euclidean,
    Spherical,
}

export const maxCurvature = 2;

export type State = { curvatureIndex: number; sketchIndex: number };

const slice = createSlice({
    name: 'slice',
    initialState: {
        curvatureIndex: Curvature.Spherical,
        sketchIndex: Sketch.Tiling,
    } satisfies State,
    reducers: {
        curvaturePlus: (state: State): State => {
            return {
                ...state,
                curvatureIndex: Math.min(
                    state.curvatureIndex + 1,
                    maxCurvature,
                ),
            };
        },
        curvatureMinus: (state: State): State => {
            return {
                ...state,
                curvatureIndex: Math.max(state.curvatureIndex - 1, 0),
            };
        },
    },
});

export const { curvaturePlus, curvatureMinus } = slice.actions;

export const store = configureStore({
    reducer: slice.reducer,
});
