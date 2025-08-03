import { store, storeSlice } from './store';

export const setSketchIndex = (index: number) => {
    store.dispatch(storeSlice.actions.setSketchIndex(index));
};

export const setCurvatureIndex = (index: number) => {
    store.dispatch(storeSlice.actions.setCurvatureIndex(index));
};

export const moveLeft = () => {
    store.dispatch(storeSlice.actions.moveLeft());
};

export const moveRight = () => {
    store.dispatch(storeSlice.actions.moveRight());
};

export const moveUp = () => {
    store.dispatch(storeSlice.actions.moveUp());
};

export const moveDown = () => {
    store.dispatch(storeSlice.actions.moveDown());
};

export const keyDown = (key: string) => {
    store.dispatch(storeSlice.actions.keyDown(key));
};

export const keyUp = (key: string) => {
    store.dispatch(storeSlice.actions.keyUp(key));
};
