import { Artikl } from '../dto/artikl';
import { Prilog } from '../../home/models/prilog.model';
import { Mera } from '../../home/models/mera.model';

export class PorudzbinaArtikl {
    constructor(
        public artikl:Artikl,
        public prilozi:Prilog[],
        public mera:Mera
    ) {}
}