import { Results } from './results';

export interface People {
    count: number;
    next: string;
    previous: string;
    results: Results;
}