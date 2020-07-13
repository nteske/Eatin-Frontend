import { TipRestorana } from '../../home/models/tip_restorana.model';
import { LokacijaAdmin } from './lokacijaAdmin.model';

export class PostRestoran {
  lokacije: LokacijaAdmin[];
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
