import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SketchWrapper } from './sketchWrapper';
import { Provider } from 'react-redux';
import { store } from './store';
import { Controls } from './controls';
import { createBrowserRouter, RouterProvider } from 'react-router';

const root = document.getElementById('root');

if (root === null) {
    throw new Error(`root element not found`);
}

const router = createBrowserRouter([
    { path: '/:curvatureIndex', element: <Controls></Controls> },
    { path: '*', element: <Controls></Controls> },
]);

const App = () => {
    return (
        <div>
            <SketchWrapper />
            <Controls />
            {/* <RouterProvider router={router}></RouterProvider> */}
        </div>
    );
};

createRoot(root).render(
    <React.StrictMode>
        <Provider store={store}>
            <App></App>
        </Provider>
    </React.StrictMode>,
);
