import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

export const sketches = { Tiling: 0, Lines: 1 };

export const curvatures = { Hyperbolic: 0, Euclidean: 1, Spherical: 2 };
export const curvaturesArray = Object.keys(curvatures);

export type MainState = { curvatureIndex: number; sketchIndex: number };

export const storeSlice = createSlice({
    name: 'slice',
    initialState: {
        curvatureIndex: curvatures.Spherical,
        sketchIndex: 0,
    } satisfies MainState,
    reducers: {
        setCurvatureIndex: (
            state: MainState,
            { payload }: PayloadAction<number>,
        ): MainState => {
            payload = curvaturesArray[payload] ? payload : curvatures.Spherical;
            return { ...state, curvatureIndex: payload };
        },
    },
});

export const store = configureStore({
    reducer: storeSlice.reducer,
});

export type State = ReturnType<typeof store.getState>;
