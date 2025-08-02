import { store, storeSlice } from './store';

export const setSketchIndex = (index: number) => {
    store.dispatch(storeSlice.actions.setSketchIndex(index));
};

export const setCurvatureIndex = (index: number) => {
    store.dispatch(storeSlice.actions.setCurvatureIndex(index));
};
