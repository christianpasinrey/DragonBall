import type { Transformation } from './character_transformation';
import type { Planet } from './planet';

export interface Character {
    id: number
    name: string,
    ki: string,
    maxKi: string,
    race: string,
    gender: string,
    description: string,
    image: string,
    affiliation: string,
    deletedAt: null
    originPlanet?: Planet,
    transformations?: Transformation[],
}