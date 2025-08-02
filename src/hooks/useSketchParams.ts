import { useSearchParams, useNavigate } from 'react-router';
import { setCurvatureIndex } from '../store/actions';
import { curvaturesArray } from '../store/store';

export const useSketchParams = () => {
    const [params] = useSearchParams();
    const curvatureIndex = parseInt(params.get('curvatureIndex') ?? '2');
    const navigate = useNavigate();
    setCurvatureIndex(curvatureIndex);

    const navigateCurvatureIndex = (newCurvatureIndex: number) => {
        navigate(`/?curvatureIndex=${newCurvatureIndex}`);
    };

    return {
        curvatureIndex,
        curvaturePlus: () => navigateCurvatureIndex(curvatureIndex + 1),
        curvatureMinus: () => navigateCurvatureIndex(curvatureIndex - 1),
        maxCurvatureIndex: curvaturesArray.length - 1,
    };
};
