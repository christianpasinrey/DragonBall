import type { Character } from "./character"

export interface Planet {
    id: number
    name: string
    isDestroyed: boolean
    description: string
    image: string,
    deletedAt: null
    characters?: Character[],
}