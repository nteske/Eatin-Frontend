import { Component, OnInit, Input } from '@angular/core';
import { ArticlesDisplayService } from 'src/app/features/home/services/articles-display.service';
import { Artikl } from 'src/app/features/home/models/artikl.model';
import { Restoran } from 'src/app/features/home/models/restoran.model';
import { ApiUrls } from 'src/app/core/constants/api-urls';
import { ZaposleniArtikliService } from '../../services/zaposleni-artikli.service';
import { RestoranService } from 'src/app/features/home/services/restoran.service';
import { TipArtikla } from 'src/app/features/home/models/tip_artikla';
import { MatDialog } from '@angular/material/dialog';
import { PriloziIMereComponent } from '../../dialogs/prilozi-i-mere/prilozi-i-mere.component';
import { Mera } from 'src/app/features/home/models/mera.model';
import { Prilog } from 'src/app/features/home/models/prilog.model';

@Component({
  selector: 'app-articles-edit',
  templateUrl: './articles-edit.component.html',
  styleUrls: ['./articles-edit.component.css']
})
export class ArticlesEditComponent implements OnInit {
  restoran:Restoran;
  public tipovi:TipArtikla[];
  public odabranTip;
   public sort=[{value:"dateNew",name:"Datum - poslednji dodat"},
  {value:"dateOld",name:"Datum - prvi dodat"},
  {value:"nameHigh",name:"Naziv - opadajuce"},
  {value:"nameLow",name:"Naziv - rastuce"},
  {value:"priceHigh",name:"Cena - opadajuce"},
  {value:"priceLow",name:"Cena - rastuce"}];
  odabraoSort:string=this.sort[0].value;

  nazivZaSve={name:"Svi tipovi hrane",value:-1};

  listTipove;
  menja=-1;
  secondList:Artikl[];
  paginator:number=1;
  page:number=1;
  search:string='';
  odabranTip2;

  novi:Artikl=new Artikl();

  constructor(private articleDisplayService:ArticlesDisplayService
    ,private restoranService:RestoranService,
    public dialog:MatDialog
    ,private zaposleniArtikliService:ZaposleniArtikliService) { }

  ngOnInit(): void {
    this.zaposleniArtikliService.getRestoran().subscribe(data=>{
      this.restoran=data;
      this.pripremaStanja();
    });
    this.uzmiTipove();
 
  }
  ngOnChanges(){
      this.odabraoSort=this.sort[0].value;
      this.pripremaStanja();
  }



  novaStrana(broj){
    this.page=broj;
    this.pripremaStanja();
  }

  priloziIMere(num){
    const dialogRef = this.dialog.open(PriloziIMereComponent,
      { data: { id: num } });

  }

  pripremaStanja(){
    this.menja=-1;
    var call={desc:"true",sort:"ID"};
    if(this.odabraoSort=="dateNew"){call.desc="false";call.sort="ID"};
    if(this.odabraoSort=="dateOld"){call.desc="true";call.sort="ID"};

    if(this.odabraoSort=="nameHigh"){call.desc="false";call.sort="NAZIV"};
    if(this.odabraoSort=="nameLow"){call.desc="true";call.sort="NAZIV"};

    if(this.odabraoSort=="priceHigh"){call.desc="false";call.sort="CENA"};
    if(this.odabraoSort=="priceLow"){call.desc="true";call.sort="CENA"};
    this.callForRequest(call.desc,this.page,this.restoran.idRestorana,this.search,call.sort,-1);
  }
//
  callForRequest(desc,page,restoran,search,sort,tip):void{
      this.articleDisplayService.getArtikle(desc,page,restoran,search,sort,tip).subscribe(data=>{
        this.secondList=data.content;
        this.paginator=data.totalPages;
        this.resetNovi();
      });
  }

  promena():void{
    this.paginator=1;
    this.pripremaStanja();
  }

  getMyImage(text):string{
    if(text==undefined)text="";
    return ApiUrls.getImageUrl(text);
  }

  izmeni(num){
    if(this.menja==num){
      this.menja=-1;
      let artikl=this.secondList.find(el=>el.idArtikla==num);
      if(artikl.slikaArtikla.length>0
        &&artikl.slikaArtikla.length<200
        &&artikl.nazivArtikla.length>0
        &&artikl.nazivArtikla.length<50
        &&artikl.cenaArtikla>0){
      let tip=this.tipovi.find(el=>el.idTipaArtikla==this.odabranTip);
      artikl.tipArtikla=tip;
      let s=artikl.idArtikla;
      delete artikl.idArtikla;
      delete artikl.restoranId;
      this.zaposleniArtikliService.putArtikl(artikl,s).subscribe();
      console.log(artikl);
    }else{
      this.pripremaStanja();
    }
    }
    else {
      this.odabranTip=this.secondList.find(el=>el.idArtikla==num).tipArtikla.idTipaArtikla;
      this.menja=Number(num);}
  }

  dodaj(){
    if(this.novi.slikaArtikla.length>0
      &&this.novi.slikaArtikla.length<200
      &&this.novi.nazivArtikla.length>0
      &&this.novi.nazivArtikla.length<50
      &&this.novi.cenaArtikla>0){
      this.novi.tipArtikla=this.tipovi.find(el=>el.idTipaArtikla==this.odabranTip2);
      this.novi.mere=[];
      this.novi.prilozi=[];
      this.zaposleniArtikliService.posArtikl(this.novi).subscribe(data=>{
        this.pripremaStanja();
      });
    }
  }

  resetNovi(){
    this.novi.slikaArtikla="";
    this.novi.nazivArtikla="";
    this.novi.cenaArtikla=100;
    this.odabranTip2=this.tipovi[0].idTipaArtikla;
    this.novi.tipArtikla=this.tipovi[0];
  }

  obrisi(num){
    this.secondList=this.secondList.filter(el=>el.idArtikla!=num)
  }

  uzmiTipove(){
    this.restoranService.getTipoveArtikala().subscribe(data=>{
      this.tipovi=data;
      this.odabranTip=this.tipovi[0].idTipaArtikla;
      this.resetNovi();
    });
  }
}
