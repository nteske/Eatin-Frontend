import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../../../core/services/basket.service';
@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  public korpa;
  public prikazi=false;
  constructor(private basketService:BasketService) { }

  ngOnInit(): void {
    var uzeto=this.basketService.getFromBasket();
    if(uzeto!=null){
      this.korpa=uzeto;
      this.prikazi=true;
    }
  }

}
