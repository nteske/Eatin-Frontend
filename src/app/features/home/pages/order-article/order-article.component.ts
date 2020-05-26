import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';
import { ArticlesDisplayService } from '../../services/articles-display.service';
import { PrikazArtikla } from '../../dto/prikazArtikla';
import { Artikl } from '../../models/artikl.model';
import { ApiUrls } from 'src/app/core/constants/api-urls';
import { Basket } from '../../../../core/utils/basket';
import { AuthService } from '../../services/auth.service';
import { Roles } from '../../../../core/constants/roles';

@Component({
  selector: 'app-order-article',
  templateUrl: './order-article.component.html',
  styleUrls: ['./order-article.component.css']
})
export class OrderArticleComponent implements OnInit {
  public taken;
  public loaded=false;
  public artikl:Artikl;
  public biraPrilog;
  public biraMeru;
  public kolicina;
  public user=Roles.user;
  constructor(private authService:AuthService,private router: Router,private route: ActivatedRoute,private articlesDisplayService:ArticlesDisplayService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap) => {
      this.taken = params.get('id');
        this.articlesDisplayService.getArticleDisplayById(this.taken).subscribe(data=>{
          this.biraMeru=data.mere;
          this.artikl=data.artikl;
          this.kolicina=data.mere[0].id_mere;
          let niz=JSON.parse(JSON.stringify(data.prilozi));
          this.biraPrilog=niz.map(item=>{item.stanje=false; return item;});
          this.loaded=true;
        });
      });
  }
  getRole():string{
    return this.authService.getRole();
  }
  getMyImage(text):string{
    return ApiUrls.getImageUrl(text);
  }
  dodaje():void{
    if(this.user==this.getRole()){
    var zaKorpu={artikl:this.artikl.id_artikla,
      prilozi:this.biraPrilog.filter(item=>item.stanje).map(item=>{item={id_priloga:item.id_priloga,naziv_priloga:item.naziv_priloga}; return item}),
      mera:this.biraMeru.filter(item=>this.kolicina==item.id_mere)
    };
    Basket.addToBasket(zaKorpu);
  }
  }
}
