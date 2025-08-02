import { GyrovectorSpaceFactory } from 'gyrovector';

export const spaces = [
    GyrovectorSpaceFactory.create(2, -1 / 100000), // Hyperbolic
    GyrovectorSpaceFactory.create(2, 0), // Euclidean
    GyrovectorSpaceFactory.create(2, 1 / 100000), // Spherical
];
