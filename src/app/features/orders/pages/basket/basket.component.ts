import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../../../core/services/basket.service';
import { ApiUrls } from 'src/app/core/constants/api-urls';
import { Router } from '@angular/router';
import { OrdersService } from '../../services/orders.service';
import { ToastrService } from 'ngx-toastr';
import { SlanjeNarudzbine } from '../../dto/slanjeNarudzbine';
import { Porudzbina } from '../../dto/porudzbina';
import { Lokacija } from '../../../home/models/lokacija.model';
import { LocationService } from '../../services/location.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  form: FormGroup;
  public korpa;
  public prikazi=false;
  public ukupnaCena=0;
  public locationslist;
  public ucitaneLokacije:Lokacija[];
  public odabraoLok=-1;
  constructor(private basketService:BasketService,private router:Router,
    private locationService:LocationService,private orderService:OrdersService,private toastr: ToastrService) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.form = new FormGroup({
      ulica: new FormControl(null, [Validators.required,Validators.minLength(4)]),
      broj: new FormControl(null, [Validators.required,Validators.minLength(1)]),
      grad: new FormControl(null, [Validators.required,Validators.minLength(2)]),
      pBroj: new FormControl(null, [Validators.required,Validators.minLength(4)])
    });
    this.uzmiIzKorpe();
  }
  uzmiIzKorpe(){
    var uzeto=this.basketService.getFromBasket();
    if(uzeto!=null){
      this.getUserLocations();
      this.korpa=uzeto;
      this.prikazi=true;
      this.ukupnaCena=this.korpa.map(item=>{return item.artikl.cenaArtikla;}).reduce((acc, cur) => acc + cur, 0);
    }
  }
  removeMe(num){
    var numb=Number(num);
    this.prikazi=false;
    this.basketService.removeElement(numb);
    this.uzmiIzKorpe();
    window.scroll(0,0);
  }

  getMyImage(text):string{
    return ApiUrls.getImageUrl(text);
  }
  posaljiPorudzbinu():void{
    if(this.odabraoLok==-1&&this.form.valid){
    var item:Porudzbina[]=this.basketService.getFromBasket();
    var lok:Lokacija=new Lokacija();
    lok.idLokacije=this.odabraoLok;
    lok.grad=this.form.value.grad;
    lok.postanskiBroj=this.form.value.pBroj;
    lok.ulica=this.form.value.ulica;
    lok.broj=this.form.value.broj;
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
  else if(this.odabraoLok!=-1){
    var item:Porudzbina[]=this.basketService.getFromBasket();
    var lok:Lokacija=this.ucitaneLokacije.find(item=>item.idLokacije==this.odabraoLok);
    var all:SlanjeNarudzbine={location:lok,porudzbina:item};
    this.callMeBaby(all);
  }
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

  promena(){

  }

  getUserLocations(){
    var last={name:"+ Dodaj novu lokaciju",value:"-1"};
    this.locationService.getOldUserLocations().subscribe(data=>{
      this.ucitaneLokacije=data;
      this.locationslist=data.map(item=>{
        var data={name:item.ulica+' '+item.broj+' , '+item.grad+' , '+item.postanskiBroj
          ,value:item.idLokacije};
        return data;
      }).reverse();
      this.locationslist.push(last);
      this.odabraoLok=this.locationslist[0].value;
    }
    );
  }

}
