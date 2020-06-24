import { TipArtikla } from '../models/tip_artikla';

export class ArtiklPorudzbinaDTO { 
    idArtikla: number;
	restoranId: number;
	tipArtikla: TipArtikla;
	nazivArtikla: string;
	slikaArtikla: string;
	cenaArtikla: number;
}