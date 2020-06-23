import { Artikl } from '../models/artikl.model';

export class artiklDTO {
    constructor(
        public content:Artikl[],
        public totalPages:number
    ) {}
}