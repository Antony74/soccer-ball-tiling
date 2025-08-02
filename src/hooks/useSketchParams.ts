import { useSearchParams, useNavigate } from 'react-router';
import { setCurvatureIndex, setSketchIndex } from '../store/actions';

import {
    Curvature,
    curvatureFromIndex,
    curvatures,
    curvaturesArray,
    Sketch,
    sketches,
    sketchFromIndex,
} from '../store/store';

export const useSketchParams = () => {
    const navigate = useNavigate();
    const [params] = useSearchParams();
    const sketch = params.get('sketch') ?? 'Lines';
    const curvature = params.get('curvature') ?? 'Spherical';

    const sketchIndex = sketches[sketch as Sketch] ?? sketches.Lines;

    const curvatureIndex =
        curvatures[curvature as Curvature] ?? curvatures.Spherical;

    setSketchIndex(sketchIndex);
    setCurvatureIndex(curvatureIndex);

    const navigateCurvatureIndex = (newCurvatureIndex: number) => {
        navigate(
            `/?sketch=${sketch}&curvature=${curvatureFromIndex[newCurvatureIndex]}`,
        );
    };

    return {
        curvature,
        curvatureIndex,
        curvaturePlus: () => navigateCurvatureIndex(curvatureIndex + 1),
        curvatureMinus: () => navigateCurvatureIndex(curvatureIndex - 1),
        maxCurvatureIndex: curvaturesArray.length - 1,
        sketch,
        sketchIndex,
        setSketchIndex: (newSketchIndex: number) =>
            navigate(
                `/?sketch=${sketchFromIndex[newSketchIndex]}&curvature=${curvature}`,
            ),
    };
};
