import { useSearchParams, useNavigate } from 'react-router';
import { setCurvatureIndex, setSketchIndex } from '../store/actions';
import { curvaturesArray } from '../store/store';

export const useSketchParams = () => {
    const [params] = useSearchParams();
    const curvatureIndex = parseInt(params.get('curvatureIndex') ?? '2');
    const sketchIndex = parseInt(params.get('sketchIndex') ?? '1');
    const navigate = useNavigate();
    setCurvatureIndex(curvatureIndex);
    setSketchIndex(sketchIndex);

    const navigateCurvatureIndex = (newCurvatureIndex: number) => {
        navigate(
            `/?sketchIndex=${sketchIndex}&curvatureIndex=${newCurvatureIndex}`,
        );
    };

    return {
        curvatureIndex,
        curvaturePlus: () => navigateCurvatureIndex(curvatureIndex + 1),
        curvatureMinus: () => navigateCurvatureIndex(curvatureIndex - 1),
        maxCurvatureIndex: curvaturesArray.length - 1,
        sketchIndex,
        setSketchIndex: (newSketchIndex: number) =>
            navigate(
                `/?sketchIndex=${newSketchIndex}&curvatureIndex=${curvatureIndex}`,
            ),
    };
};
