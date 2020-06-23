import { Lokacija } from './lokacija.model';

export class Restoran {
    idRestorana: number;
	nazivRestorana: string;
	pibRestorana: number;
	telefonRestorana: string;
	opisRestorana: string;
	slikaRestorana: string;
	restoranSeNalazi?: Lokacija;
}