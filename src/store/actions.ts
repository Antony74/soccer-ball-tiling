import { store, storeSlice } from './store';

export const curvatureMinus = () => {
    store.dispatch(storeSlice.actions.curvatureMinus());
};

export const curvaturePlus = () => {
    store.dispatch(storeSlice.actions.curvaturePlus());
};

export const setCurvatureIndex = (index: number) => {
    store.dispatch(storeSlice.actions.setCurvatureIndex(index));
};
