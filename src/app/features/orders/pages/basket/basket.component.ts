import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../../../core/services/basket.service';
import { ApiUrls } from 'src/app/core/constants/api-urls';
import { Router } from '@angular/router';
import { OrdersService } from '../../services/orders.service';
import { ToastrService } from 'ngx-toastr';
import { SlanjeNarudzbine } from '../../dto/slanjeNarudzbine';
import { Porudzbina } from '../../dto/porudzbina';
import { Lokacija } from '../../../home/models/lokacija.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  public korpa;
  public prikazi=false;
  public ukupnaCena=0;
  constructor(private basketService:BasketService,private router:Router,private orderService:OrdersService,private toastr: ToastrService) { }

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
    var item:Porudzbina[]=this.basketService.getFromBasket();
    var lok:Lokacija=new Lokacija();
    lok.latitude=0;
    lok.longitude=0;
    var all:SlanjeNarudzbine={location:lok,porudzbina:item};
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
          position => {
              all.location.latitude=position.coords.latitude;
              all.location.longitude=position.coords.longitude;
              this.callMeBaby(all);
          },
          error => {
            this.callMeBaby(all);
          }
      );
  }else{this.callMeBaby(all);}        
  }
  callMeBaby(all:SlanjeNarudzbine){
    this.basketService.clearBasket();
    this.toastr.success("Vasa porudzbina je poslata","Uspeh",{
      closeButton:true,
      positionClass:'toast-bottom-right'
    });
    this.orderService.orderArticle(all).subscribe();
    this.prikazi=false;
    this.uzmiIzKorpe();
  }

}
