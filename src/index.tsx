import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/app';

const root = document.getElementById('root');

if (root === null) {
    throw new Error(`root element not found`);
}

createRoot(root).render(
    <React.StrictMode>
        <App></App>
    </React.StrictMode>,
);
