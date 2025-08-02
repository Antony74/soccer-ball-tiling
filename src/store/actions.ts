import { store, storeSlice } from './store';

export const setCurvatureIndex = (index: number) => {
    store.dispatch(storeSlice.actions.setCurvatureIndex(index));
};
