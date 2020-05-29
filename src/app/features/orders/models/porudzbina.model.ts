import { Lokacija } from '../../../features/home/models/lokacija.model'
import { Dostavljac } from './dostavljac.model'
import { PorudzbinaArtikl } from '../dto/PorudzbinaArtikl';

export class Porudzbina { 
	idPorudzbine: number;
	klijentId: number;
	dostavljac: Dostavljac;
	lokacija: Lokacija;
	vremePrijemaPorudzbine: Date;
    vremeIsporukePorudzbine: Date;
	statusPorudzbine: string;
	artikli: PorudzbinaArtikl;
	ukupna_cena:number;
}