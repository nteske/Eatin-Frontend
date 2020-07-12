import { TipRestorana } from '../../home/models/tip_restorana.model';

export class PostRestoran {
  lokacije: [
    {
      broj: string;
      grad: string;
      latitude: number;
      longitude: number;
      postanskiBroj: string;
      ulica: string;
    }
  ];
  nazivRestorana: string;
  opisRestorana: string;
  pibRestorana: string;
  radnoVreme: [
    {
      tipDatuma: {
        idTipaDatuma: number;
        opisTipaDatuma: string;
      },
      vremeDo: string;
      vremeOd: string;
    }
  ];
  slikaRestorana: string;
  telefonRestorana: string;
  tipRestorana: TipRestorana[]
}
