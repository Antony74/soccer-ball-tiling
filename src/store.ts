import { configureStore, createSlice } from '@reduxjs/toolkit';

export type State = { value: number };

const slice = createSlice({
    name: 'slice',
    initialState: { value: 0 } satisfies State,
    reducers: {
        increment: (state: State): State => {
            return { ...state, value: state.value + 1 };
        },
    },
});

export const { increment } = slice.actions;

export const store = configureStore({
    reducer: slice.reducer,
});
