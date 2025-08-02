import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { Controls } from './controls';
import { SketchWrapper } from './sketchWrapper';
import { BrowserRouter, Route, Routes } from 'react-router';

export const App = () => {
    return (
        <Provider store={store}>
            <SketchWrapper />
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Controls />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};
