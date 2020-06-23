import { Component, OnInit, Input } from '@angular/core';
import { ArticlesDisplayService } from '../../services/articles-display.service';
import { Tipizirano } from '../../dto/tipizirano';
import { ApiUrls } from '../../../../core/constants/api-urls';
import { Restoran } from '../../models/restoran.model';
import { Artikl } from '../../models/artikl.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  @Input() restoran:Restoran;

  public sort=[{value:"dateNew",name:"Datum - poslednji dodat"},
  {value:"dateOld",name:"Datum - prvi dodat"},
  {value:"nameHigh",name:"Naziv - opadajuce"},
  {value:"nameLow",name:"Naziv - rastuce"},
  {value:"priceHigh",name:"Cena - opadajuce"},
  {value:"priceLow",name:"Cena - rastuce"}];
  odabraoSort:string=this.sort[0].value;

  nazivZaSve={name:"Svi tipovi hrane",value:-1};

  listTipove;
  listRestorane;

  list:Tipizirano[];
  secondList:Artikl[];
  paginator:number=1;
  page:number=1;
  search:string='';
  odabranTip=-1;

  constructor(private articlesDisplayService:ArticlesDisplayService ) { }

  ngOnInit(): void {
   /* this.articlesDisplayService.getArticlesByTypes().subscribe(data=>{
      this.list=data;
      this.listTipove=[this.nazivZaSve, ...data.map(item=>{var s={name:item.opisTipaArtikla,value:item.idTipaArtikla}; return s;})];
    });*/

  }



  novaStrana(broj){
    this.page=broj;
    this.callForRequest();
  }

  callForRequest():void{
    /*if(this.odabranTip==-1&&!this.search&&this.odabraoSort==this.sort[0].value)this.homeList=true;
    else{
      this.articlesDisplayService.searchArticles(this.page,this.odabranTip,this.search,this.odabraoSort).subscribe(data=>{
        this.secondList=data.content;
        this.paginator=data.totalPages;
        this.homeList=false;
      });
    }*/
  }

  promena():void{
    this.paginator=1;
    this.callForRequest();
  }

  getMyImage(text):string{
    return ApiUrls.getImageUrl(text);
  }

}
