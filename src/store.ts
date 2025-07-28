import { configureStore, createSlice } from '@reduxjs/toolkit';
import { routerReducer } from 'react-router-redux';

export const sketches = { Tiling: 0, Lines: 1 };

export const curvatures = { Hyperbolic: 0, Euclidean: 1, Spherical: 2 };

export type MainState = { curvatureIndex: number; sketchIndex: number };

const slice = createSlice({
    name: 'slice',
    initialState: {
        curvatureIndex: curvatures.Spherical,
        sketchIndex: 0,
    } satisfies MainState,
    reducers: {
        curvaturePlus: (state: MainState): MainState => {
            return {
                ...state,
                curvatureIndex: Math.min(
                    state.curvatureIndex + 1,
                    Object.keys(curvatures).length - 1,
                ),
            };
        },
        curvatureMinus: (state: MainState): MainState => {
            return {
                ...state,
                curvatureIndex: Math.max(state.curvatureIndex - 1, 0),
            };
        },
    },
});

export const store = configureStore({
    reducer: { main: slice.reducer, routing: routerReducer },
});

const actionKeys = Object.keys(
    slice.actions,
).sort() as (keyof typeof slice.actions)[];

export const [curvatureMinus, curvaturePlus] = actionKeys.map(
    (key) => () => store.dispatch(slice.actions[key]()),
);

export type State = ReturnType<typeof store.getState>;
