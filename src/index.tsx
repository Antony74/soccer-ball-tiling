import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Sketch } from './sketch';

const App = () => {
    return <div><Sketch></Sketch></div>;
};

const root = document.getElementById('root');

if (root === null) {
    throw new Error(`root element not found`);
}

createRoot(root).render(<App />);
