import { ArtiklPorudzbinaDTO } from '../../home/dto/artiklPorudzbinaDTO';
import { Mera } from '../../home/models/mera.model';
import { ImaPrilogeDTO } from './imaPrilogeDTO';

export class StavkaDTO { 
    artikl:ArtiklPorudzbinaDTO;
    idStavkePorudzbine:number;
    imaPriloge:ImaPrilogeDTO[];
    mera:Mera;
}