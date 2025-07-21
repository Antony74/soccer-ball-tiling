import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SketchWrapper } from './sketchWrapper';
import { Provider, useDispatch } from 'react-redux';
import { increment, store } from './store';

const App = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <SketchWrapper />
            <button
                onClick={() => {
                    dispatch(increment());
                }}
            >
                Increment
            </button>
        </div>
    );
};

const root = document.getElementById('root');

if (root === null) {
    throw new Error(`root element not found`);
}

createRoot(root).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
);
