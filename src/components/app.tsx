import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { Controls } from './controls';
import { SketchWrapper } from './sketchWrapper';

// const router = createBrowserRouter([
//     { path: '/:curvatureIndex', element: <Controls></Controls> },
//     { path: '*', element: <Controls></Controls> },
// ]);

export const App = () => {
    return (
        <Provider store={store}>
            <SketchWrapper />
            <Controls />
            {/* <RouterProvider router={router}></RouterProvider> */}
        </Provider>
    );
};
