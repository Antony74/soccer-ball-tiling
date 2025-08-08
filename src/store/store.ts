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
const curvatureTransitionStep = 0.02;

export type MainState = {
    sketchIndex: number;
    curvatureIndex: number;
    prevCurvatureIndex: number;
    curvatureTransition: number;
    offset: { x: 0; y: 0 };
    keysDown: Record<string, true>;
};

const setCurvatureIndex = (
    state: MainState,
    { payload }: { payload: number },
) => {
    payload = curvaturesArray[payload] ? payload : curvatures.Spherical;

    switch (state.sketchIndex) {
        case sketches.Lines:
            state.curvatureTransition = 0;
            break;
        default:
            state.curvatureTransition = 1;
    }

    if (payload !== state.curvatureIndex) {
        state.prevCurvatureIndex = state.curvatureIndex;
    }

    state.curvatureIndex = payload;
};

export const storeSlice = createSlice({
    name: 'slice',
    initialState: {
        sketchIndex: sketches.Lines,
        curvatureIndex: curvatures.Spherical,
        prevCurvatureIndex: curvatures.Spherical,
        curvatureTransition: 1,
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
        setCurvatureIndex,
        curvaturePlus: (state: MainState) => {
            setCurvatureIndex(state, { payload: state.curvatureIndex + 1 });
        },
        curvatureMinus: (state: MainState) => {
            setCurvatureIndex(state, {
                payload: Math.max(state.curvatureIndex - 1, 0),
            });
        },
        transitionCurvature: (state: MainState) => {
            state.curvatureTransition = Math.min(
                state.curvatureTransition + curvatureTransitionStep,
                1,
            );
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
