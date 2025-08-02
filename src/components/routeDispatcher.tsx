import React from "react";
import { useSearchParams } from "react-router";
import { setCurvatureIndex } from "../store/actions";

export const RouteDispatcher = () => {
    const [params] = useSearchParams();

    const curvatureIndex = parseInt(params.get('curvatureIndex') ?? '2');

    setCurvatureIndex(curvatureIndex);

    return <></>;
};
