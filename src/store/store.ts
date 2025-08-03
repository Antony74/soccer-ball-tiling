import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

const toIndex = <T extends string>(arr: readonly T[]) => {
    const result = Object.fromEntries(arr.map((key, index) => [key, index]));
    return result as Record<T, number>;
};

const fromIndex = <T extends string>(arr: readonly T[]) => {
    const result = Object.fromEntries(arr.map((key, index) => [index, key]));
    return result as Record<number, T>;
};

export const sketchesArray = ['Tiling', 'Lines'] as const;

export const sketches = toIndex(sketchesArray);
export const sketchFromIndex = fromIndex(sketchesArray);
export type Sketch = keyof typeof sketches;

export const curvaturesArray = [
    'Hyperbolic',
    'Euclidean',
    'Spherical',
] as const;

export const curvatures = toIndex(curvaturesArray);
export const curvatureFromIndex = fromIndex(curvaturesArray);
export type Curvature = keyof typeof curvatures;

const offsetAmount = 1;

export type MainState = {
    curvatureIndex: number;
    sketchIndex: number;
    offset: { x: 0; y: 0 };
    keysDown: Record<string, true>;
};

export const storeSlice = createSlice({
    name: 'slice',
    initialState: {
        curvatureIndex: curvatures.Spherical,
        sketchIndex: sketches.Lines,
        offset: { x: 0, y: 0 },
        keysDown: {} as Record<string, true>,
    } satisfies MainState,
    reducers: {
        setSketchIndex: (
            state: MainState,
            { payload }: PayloadAction<number>,
        ) => {
            payload = sketchesArray[payload] ? payload : sketches.Lines;
            state.sketchIndex = payload;
        },
        setCurvatureIndex: (
            state: MainState,
            { payload }: PayloadAction<number>,
        ) => {
            payload = curvaturesArray[payload] ? payload : curvatures.Spherical;
            state.curvatureIndex = payload;
        },
        moveLeft: (state: MainState) => {
            state.offset.x -= offsetAmount;
        },
        moveRight: (state: MainState) => {
            state.offset.x += offsetAmount;
        },
        moveUp: (state: MainState) => {
            state.offset.y -= offsetAmount;
        },
        moveDown: (state: MainState) => {
            state.offset.y += offsetAmount;
        },
        keyDown: (state: MainState, { payload }: PayloadAction<string>) => {
            state.keysDown[payload] = true;
        },
        keyUp: (state: MainState, { payload }: PayloadAction<string>) => {
            delete state.keysDown[payload];
        },
    },
});

export const store = configureStore({
    reducer: storeSlice.reducer,
});

export type State = ReturnType<typeof store.getState>;
