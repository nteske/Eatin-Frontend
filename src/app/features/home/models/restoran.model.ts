import { Lokacija } from './lokacija.model';
import { TipRestorana } from './tip_restorana.model';
import { Vreme } from '../../restaurants/models/vreme.model';

export class Restoran {
    idRestorana: number;
	nazivRestorana: string;
	pibRestorana: string;
	telefonRestorana: string;
	opisRestorana: string;
	slikaRestorana: string;
	lokacije?: Lokacija[];
	tipRestorana?: TipRestorana[];
	radnoVreme?: Vreme[];
}