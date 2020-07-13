import { Component, OnInit, Input, Output,EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { RestoranDTO } from '../../dto/RestoranDTO';
import { ApiUrls } from 'src/app/core/constants/api-urls';
import { RestoranService } from '../../services/restoran.service';
import { TipRestorana } from '../../models/tip_restorana.model';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit,OnChanges {

  @Input() public restorani:RestoranDTO;
  @Output() changes = new EventEmitter();
  @Output() restoran = new EventEmitter();
  @Input() public selektovan=-1;
  @Input() public hover=-1;
  page:number=1;


  public sort=[
  {value:"IDr",name:"Po datumu - rastuće."},
  {value:"IDo",name:"Po datumu - opadajuće."},
  {value:"NAZIVr",name:"Po nazivu - rastuće."},
  {value:"NAZIVo",name:"Po nazivu - opadajuće."},
];
  public odabraoSort:string=this.sort[0].value;
  public tipovi:TipRestorana[]=[{idTipaRestorana:-1,opisTipaRestorana:"Svi restorani"}];
  public odabraoTip;
  constructor(private restoranService:RestoranService) { }
//
  ngOnInit(): void {
    this.ucitajTipove();
  }

  ngOnChanges(){
  }

  novaStrana(broj){
    this.page=broj;
    this.promena();
  }

  getMyImage(text):string{
    return ApiUrls.getImageUrl(text);
  }

  pozoviRestoran(res){
    if(this.selektovan==res.idRestorana)
      this.selektovan=-1;
    else this.selektovan=res.idRestorana;
    this.restoran.emit(this.selektovan);
  }
  promena():void{
    var send={desceding:'false',sort:'ID',odabraoTip:"",page:this.page};
    if(this.odabraoSort=="IDr"){send.desceding="false";send.sort="ID";}
    else if(this.odabraoSort=="IDo"){send.desceding="true";send.sort="ID";}
    else if(this.odabraoSort=="NAZIVr"){send.desceding="false";send.sort="NAZIV";}
    else if(this.odabraoSort=="NAZIVo"){send.desceding="true";send.sort="NAZIV";}
    send.odabraoTip=this.odabraoTip;
    this.pozoviRestoran(-1);
    this.changes.emit(send);
  }

  ucitajTipove(){
    this.restoranService.getTipoveRestorana().subscribe(data=>{
      this.tipovi=[this.tipovi[0] ,...data];
      this.odabraoTip=this.tipovi[0].idTipaRestorana;
    });
  }
  
}
