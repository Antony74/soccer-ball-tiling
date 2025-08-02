import p5 from 'p5';
import React from 'react';
import { sketch } from '../sketch/sketch';
import { store } from '../store/store';

export const SketchWrapper = () => {
    const p5ContainerRef = React.useRef(null);

    React.useEffect(() => {
        const p5Instance = new p5(sketch, p5ContainerRef.current ?? undefined);

        const storeUnsubscribe = store.subscribe(() => {
            p5Instance.loop();
        });

        return () => {
            storeUnsubscribe();
            p5Instance.remove();
        };
    }, []);

    return <div className="App" ref={p5ContainerRef} />;
};
