import { Artikl } from '../models/artikl.model';

export class Search {
    constructor(
        public content:Artikl[],
        public totalPages:number
    ) {}
}