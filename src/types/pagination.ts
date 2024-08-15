import type { Character } from './character';
import type { Planet } from './planet';

export interface Pagination {
    items: Character[] | Planet[],
    meta: {
        totalItems: number,
        itemCount: number,
        itemsPerPage: number,
        totalPages: number,
        currentPage: number
    }
    links: {
        first: string,
        previous: string,
        next: string,
        last: string
    }
}