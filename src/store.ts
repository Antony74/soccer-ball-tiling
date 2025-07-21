import { configureStore, createSlice } from '@reduxjs/toolkit';

export type State = { value: number };

const initialState: State = { value: 0 };

const slice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        increment: (state: State) => {
            return { value: state.value + 1 };
        },
    },
});

export const { increment } = slice.actions;

export const store = configureStore({
    reducer: slice.reducer,
});
