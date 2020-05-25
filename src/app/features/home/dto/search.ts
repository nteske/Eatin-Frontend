import { Artikl } from '../models/artikl.model';

export class Search {
    constructor(
        public pages:number,
        public artikli:Artikl[]
    ) {}
}