import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../../../core/services/basket.service';
import { ApiUrls } from 'src/app/core/constants/api-urls';
import { Router } from '@angular/router';
import { rootPaths } from '../../../../core/constants/root-paths';
import { ArticlesDisplayService } from '../../services/articles-display.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  public korpa;
  public prikazi=false;
  public ukupnaCena=0;
  constructor(private basketService:BasketService,private router:Router,private articlesDisplayService:ArticlesDisplayService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.uzmiIzKorpe();
  }
  uzmiIzKorpe(){
    var uzeto=this.basketService.getFromBasket();
    if(uzeto!=null){
      this.korpa=uzeto;
      this.prikazi=true;
      this.ukupnaCena=this.korpa.map(item=>{return item.artikl.cena_artikla;}).reduce((acc, cur) => acc + cur, 0);
    }
  }
  removeMe(num){
    var numb=Number(num);
    this.prikazi=false;
    this.basketService.removeElement(numb);
    this.uzmiIzKorpe();
  }

  getMyImage(text):string{
    return ApiUrls.getImageUrl(text);
  }
  posaljiPorudzbinu():void{
    var all=this.basketService.getFromBasket();
    this.basketService.clearBasket();
        this.toastr.success("Vasa porudzbina je poslata","Uspeh",{
          closeButton:true,
          positionClass:'toast-bottom-right'
        });
    this.articlesDisplayService.orderArticle(all).subscribe();
    this.prikazi=false;
    this.uzmiIzKorpe();
  }

}
