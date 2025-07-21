import * as React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
    return <div>Hello world</div>;
};

const root = document.getElementById('root');

if (root === null) {
    throw new Error(`root element not found`);
}

createRoot(root).render(<App />);
