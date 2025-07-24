import { configureStore, createSlice } from '@reduxjs/toolkit';

export const sketches = { Tiling: 0, Lines: 1 };

export const curvatures = { Hyperbolic: 0, Euclidean: 1, Spherical: 2 };

export type State = { curvatureIndex: number; sketchIndex: number };

const slice = createSlice({
    name: 'slice',
    initialState: {
        curvatureIndex: curvatures.Spherical,
        sketchIndex: 0,
    } satisfies State,
    reducers: {
        curvaturePlus: (state: State): State => {
            return {
                ...state,
                curvatureIndex: Math.min(
                    state.curvatureIndex + 1,
                    Object.keys(curvatures).length - 1,
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

export const store = configureStore({
    reducer: slice.reducer,
});

const actionKeys = Object.keys(
    slice.actions,
).sort() as (keyof typeof slice.actions)[];

export const [curvatureMinus, curvaturePlus] = actionKeys.map((key) =>
    () => store.dispatch(slice.actions[key]()),
);
