import { store, storeSlice } from './store';

export const setSketchIndex = (index: number) => {
    store.dispatch(storeSlice.actions.setSketchIndex(index));
};

export const setCurvatureIndex = (index: number) => {
    store.dispatch(storeSlice.actions.setCurvatureIndex(index));
};

export const [
    curvatureMinus,
    curvaturePlus,
    transitionCurvature,
    moveLeft,
    moveRight,
    moveUp,
    moveDown,
] = (
    [
        'curvatureMinus',
        'curvaturePlus',
        'transitionCurvature',
        'moveLeft',
        'moveRight',
        'moveUp',
        'moveDown',
    ] as const
).map((key) => () => store.dispatch(storeSlice.actions[key]()));

export const keyDown = (key: string) => {
    store.dispatch(storeSlice.actions.keyDown(key));
};

export const keyUp = (key: string) => {
    store.dispatch(storeSlice.actions.keyUp(key));
};
