import { Artikl } from '../../home/models/artikl.model';
import { Prilog } from '../../home/models/prilog.model';
import { Mera } from '../../home/models/mera.model';

export class Porudzbina {
    constructor(
        public artikl:Artikl,
        public prilozi:Prilog[],
        public mera:Mera[]
    ) {}
}