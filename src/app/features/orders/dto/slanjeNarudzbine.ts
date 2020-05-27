import { Lokacija } from '../../home/models/lokacija.model';
import { Porudzbina } from './porudzbina';

export class SlanjeNarudzbine {
    constructor(
        public location:Lokacija,
        public porudzbina:Porudzbina[]
    ) {}
}