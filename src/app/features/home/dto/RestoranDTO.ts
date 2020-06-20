import { Artikl } from '../models/artikl.model';
import { Restoran } from '../models/restoran.model';

export class RestoranDTO {
    constructor(
        public content:Restoran[],
        public totalPages:number
    ) {}
}