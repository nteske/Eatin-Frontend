import { Prilog } from './prilog.model';
import { Mera } from './mera.model';
import { TipArtikla } from './tip_artikla';

export class Artikl { 
    idArtikla: number;
	restoranId: number;
	tipArtiklaId?: number;
	nazivArtikla: string;
	slikaArtikla: string;
	cenaArtikla: number;
	prilozi?:Prilog[];
	mere?:Mera[];
	tipArtikla?:TipArtikla;
}