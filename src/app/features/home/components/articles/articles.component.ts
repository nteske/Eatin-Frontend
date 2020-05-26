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

  nazivZaSve="Svi tipovi hrane";
  nazivZaSveRestorane="Svi restorani";

  listTipove:string[];
  listRestorane:string[];

  list:Tipizirano[];
  secondList:Artikl[];
  ucitaniRestorani:Restoran[];
  paginator:number=1;
  page:number=1;
  search:string='';
  odabranTip=this.nazivZaSve;
  odabranRestoran=this.nazivZaSveRestorane;

  constructor(private articlesDisplayService:ArticlesDisplayService ) { }

  ngOnInit(): void {
    this.articlesDisplayService.getArticlesByTypes().subscribe(data=>{
      this.list=data;
      this.listTipove=[this.nazivZaSve, ...data.map(item=>{return item.opis_tipa_artikla;})];
    });
    this.articlesDisplayService.getAllRestourants().subscribe(data=>{
      this.ucitaniRestorani=data;
      this.listRestorane=[this.nazivZaSveRestorane, ...data.map(item=>{return item.naziv_restorana;})];
    })
  }

  getMyRestoraunt(name):Restoran{
    return this.ucitaniRestorani.find(x => x.naziv_restorana === name);
  }

  novaStrana(broj){
    this.page=broj;
    this.callForRequest();
  }

  callForRequest():void{
    if(this.odabranTip==this.nazivZaSve&&this.odabranRestoran==this.nazivZaSveRestorane&&!this.search&&this.odabraoSort==this.sort[0].value)this.homeList=true;
    else{
      let tip="";
      let restoran="";
      if(this.odabranTip!=this.nazivZaSve)tip=this.odabranTip;
      if(this.odabranRestoran!=this.nazivZaSveRestorane)restoran=this.odabranRestoran;
      this.articlesDisplayService.searchArticles(this.page,tip,restoran,this.search,this.odabraoSort).subscribe(data=>{
        this.secondList=data.artikli;
        this.paginator=data.pages;
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
