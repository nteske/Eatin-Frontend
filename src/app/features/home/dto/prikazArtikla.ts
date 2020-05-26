import { Artikl } from '../models/artikl.model';
import { Prilog } from '../models/prilog.model';
import { Mera } from '../models/mera.model';

export class PrikazArtikla {
    constructor(
        public artikl:Artikl,
        public prilozi:Prilog[],
        public mere:Mera[]
    ) {}
}