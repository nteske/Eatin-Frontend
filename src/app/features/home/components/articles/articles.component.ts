import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ArticlesDisplayService } from '../../services/articles-display.service';
import { Tipizirano } from '../../dto/tipizirano';
import { ApiUrls } from '../../../../core/constants/api-urls';
import { Restoran } from '../../models/restoran.model';
import { Artikl } from '../../models/artikl.model';
import { TipArtikla } from '../../models/tip_artikla';
import { RestoranService } from '../../services/restoran.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit ,OnChanges{
  @Input() restoran:Restoran;
  @Input() tipovi:TipArtikla[];
  public sort=[{value:"dateNew",name:"Datum - poslednji dodat"},
  {value:"dateOld",name:"Datum - prvi dodat"},
  {value:"nameHigh",name:"Naziv - opadajuce"},
  {value:"nameLow",name:"Naziv - rastuce"},
  {value:"priceHigh",name:"Cena - opadajuce"},
  {value:"priceLow",name:"Cena - rastuce"}];
  odabraoSort:string=this.sort[0].value;

  nazivZaSve={name:"Svi tipovi hrane",value:-1};

  listTipove;

  secondList:Artikl[];
  paginator:number=1;
  page:number=1;
  search:string='';
  odabranTip=-1;

  constructor(private resotranService:RestoranService ,private articleDisplayService:ArticlesDisplayService) { }

  ngOnInit(): void {
      this.pripremaStanja();
      this.listTipove=[this.nazivZaSve, ...this.tipovi.map(item=>{var s={name:item.opisTipaArtikla,value:item.idTipaArtikla}; return s;})];
 
  }
  ngOnChanges(){
      this.odabranTip=-1;
      this.odabraoSort=this.sort[0].value;
      this.pripremaStanja();
  }



  novaStrana(broj){
    this.page=broj;
    this.pripremaStanja();
  }

  pripremaStanja(){
    var call={desc:"true",sort:"ID"};
    if(this.odabraoSort=="dateNew"){call.desc="false";call.sort="ID"};
    if(this.odabraoSort=="dateOld"){call.desc="true";call.sort="ID"};

    if(this.odabraoSort=="nameHigh"){call.desc="false";call.sort="NAZIV"};
    if(this.odabraoSort=="nameLow"){call.desc="true";call.sort="NAZIV"};

    if(this.odabraoSort=="priceHigh"){call.desc="false";call.sort="CENA"};
    if(this.odabraoSort=="priceLow"){call.desc="true";call.sort="CENA"};
    this.callForRequest(call.desc,this.page,this.restoran.idRestorana,this.search,call.sort,this.odabranTip);
  }
//
  callForRequest(desc,page,restoran,search,sort,tip):void{
      this.articleDisplayService.getArtikle(desc,page,restoran,search,sort,tip).subscribe(data=>{
        this.secondList=data.content;
        this.paginator=data.totalPages;
      });
  }

  promena():void{
    this.paginator=1;
    this.pripremaStanja();
  }

  getMyImage(text):string{
    return ApiUrls.getImageUrl(text);
  }

}
