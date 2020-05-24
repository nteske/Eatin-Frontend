import { Artikl } from '../models/artikl.model';

export class Tipizirano {
    constructor(
        public id_tipa_artikla:number,
        public opis_tipa_artikla:string,
        public artikli:Artikl[]
    ) {}
}