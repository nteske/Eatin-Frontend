import { Artikl } from '../models/artikl.model';

export class Tipizirano {
    constructor(
        public idTipaArtikla:number,
        public opisTipaArtikla:string,
        public artikli:Artikl[]
    ) {}
}