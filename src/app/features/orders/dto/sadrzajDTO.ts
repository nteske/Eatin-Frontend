import { Dostavljac } from '../models/dostavljac.model';
import { Klijent } from '../models/klijent.model';
import { Lokacija } from '../../home/models/lokacija.model';
import { StavkaDTO } from './stavkaDTO';

export class SadrzajDTO { 
    dostavjac:Dostavljac;
    idPorudzbine:number;
    klijent:Klijent;
    lokacija:Lokacija;
    restoranId: number;
    statusPorudzbine:string;
    stavkePorudzbine:StavkaDTO[];
    ukupnaCena: number;
    vremeIsporukePorudzbine: string;
    vremePrijemaPorudzbine: string;
}