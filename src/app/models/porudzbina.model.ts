import { Lokacija } from './lokacija.model'
import { Dostavljac } from './dostavljac.model'
import { Klijent } from './klijent.model'

export class Porudzbina { 
	id_porudzbine: number;
	klijent: Klijent;
	dostavljac: Dostavljac;
	lokacija: Lokacija;
	vreme_prijema_porudzbine: Date;
    vreme_isporuke_porudzbine: Date;
	status_porudzbine: string;
}