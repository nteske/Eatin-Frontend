import { TipRestorana } from '../../home/models/tip_restorana.model';
import { LokacijaAdmin } from './lokacijaAdmin.model';
import { TipDatuma } from '../../restaurants/models/tipDatuma.model';
import { TipDatumaPost } from './tipDatumaPost.model';

export class PostRestoran {
  lokacije: LokacijaAdmin[];
  nazivRestorana: string;
  opisRestorana: string;
  pibRestorana: string;
  radnoVreme: TipDatumaPost[];
  slikaRestorana: string;
  telefonRestorana: string;
  tipRestorana: TipRestorana[]
}
