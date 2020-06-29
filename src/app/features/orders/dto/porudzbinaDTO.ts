import { SadrzajDTO } from './sadrzajDTO';

export class PorudzbinaDTO {
    constructor(
        public content:SadrzajDTO[],
        public totalPages:number
    ) {}
}