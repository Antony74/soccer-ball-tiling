import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

const toIndex = (arr: string[]) =>
    Object.fromEntries(
        arr.map((key, index) => {
            return [key, index];
        }),
    );

const fromIndex = (arr: string[]) =>
    Object.fromEntries(
        arr.map((key, index) => {
            return [index, key];
        }),
    );

export const sketchesArray = ['Tiling', 'Lines'];
export const sketches = toIndex(sketchesArray);
export const sketchFromIndex = fromIndex(sketchesArray);

export const curvaturesArray = ['Hyperbolic', 'Euclidean', 'Spherical'];
export const curvatures = toIndex(curvaturesArray);
export const curvatureFromIndex = fromIndex(curvaturesArray);

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
