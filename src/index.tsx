import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SketchWrapper } from './sketchWrapper';
import { Provider } from 'react-redux';
import { store } from './store';
import { Controls } from './controls';

const root = document.getElementById('root');

if (root === null) {
    throw new Error(`root element not found`);
}

createRoot(root).render(
    <React.StrictMode>
        <Provider store={store}>
            <div>
                <SketchWrapper />
                <Controls />
            </div>
        </Provider>
    </React.StrictMode>,
);
