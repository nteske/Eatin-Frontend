import { Component, OnInit } from '@angular/core';
import { ArticlesDisplayService } from '../../services/articles-display.service';
import { Tipizirano } from '../../dto/tipizirano';
import { ApiUrls } from '../../../../core/constants/api-urls';
import { Restoran } from '../../models/restoran.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  list:Tipizirano[];
  nazivZaSve="Svi tipovi hrane";
  nazivZaSveRestorane="Svi restorani";
  odabranTip=this.nazivZaSve;
  odabranRestoran=this.nazivZaSveRestorane;
  listTipove:string[];
  listRestorane:string[];
  ucitaniRestorani:Restoran[];
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

  getMyImage(text):string{
    return ApiUrls.getImageUrl(text);
  }

}
