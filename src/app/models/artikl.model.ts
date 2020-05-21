import { Restoran } from './restoran.model';
import { Tip_artikla } from './tip_artikla.model';

export class Artikl { 
    id_artikla: number;
	restoran: Restoran;
	tip_artikla: Tip_artikla;
	naziv_artikla: string;
	slika_artikla: string;
}