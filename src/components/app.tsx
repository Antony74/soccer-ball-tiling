import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { Controls } from './controls';
import { SketchWrapper } from './sketchWrapper';
import { BrowserRouter, Route, Routes } from 'react-router';
import { RouteDispatcher } from './routeDispatcher';

export const App = () => {
    return (
        <Provider store={store}>
            <SketchWrapper />
            <Controls />
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<RouteDispatcher />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};
