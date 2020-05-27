import { Component, OnInit } from '@angular/core';
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
  homeList:boolean=true;
  sort=[{value:"",name:"Preporuka"},
  {value:"dateNew",name:"Datum - najnoviji"},
  {value:"dateOld",name:"Datum - najstariji"},
  {value:"priceHigh",name:"Cena - opadajuce"},
  {value:"priceLow",name:"Cena - rastuce"}];
  odabraoSort:string=this.sort[0].value;

  nazivZaSve={name:"Svi tipovi hrane",value:-1};
  nazivZaSveRestorane={name:"Svi restorani",value:-1};

  listTipove;
  listRestorane;

  list:Tipizirano[];
  secondList:Artikl[];
  ucitaniRestorani:Restoran[];
  paginator:number=1;
  page:number=1;
  search:string='';
  odabranTip=-1;
  odabranRestoran=-1;

  constructor(private articlesDisplayService:ArticlesDisplayService ) { }

  ngOnInit(): void {
    this.articlesDisplayService.getArticlesByTypes().subscribe(data=>{
      this.list=data;
      this.listTipove=[this.nazivZaSve, ...data.map(item=>{var s={name:item.opisTipaArtikla,value:item.idTipaArtikla}; return s;})];
    });
    this.articlesDisplayService.getAllRestourants().subscribe(data=>{
      this.ucitaniRestorani=data;
      this.listRestorane=[this.nazivZaSveRestorane, ...data.map(item=>{var s={name:item.nazivRestorana,value:item.idRestorana}; return s;})];
    })
  }

  getMyRestoraunt(name):Restoran{
    return this.ucitaniRestorani.find(x => x.idRestorana === name);
  }

  novaStrana(broj){
    this.page=broj;
    this.callForRequest();
  }

  callForRequest():void{
    if(this.odabranTip==-1&&this.odabranRestoran==-1&&!this.search&&this.odabraoSort==this.sort[0].value)this.homeList=true;
    else{
      this.articlesDisplayService.searchArticles(this.page,this.odabranTip,this.odabranRestoran,this.search,this.odabraoSort).subscribe(data=>{
        this.secondList=data.content;
        this.paginator=data.totalPages;
        this.homeList=false;
      });
    }
  }

  promena():void{
    this.paginator=1;
    this.callForRequest();
  }

  getMyImage(text):string{
    return ApiUrls.getImageUrl(text);
  }

}
