import { Injectable } from '@angular/core';
import { Storage } from '../constants/storage';
import { Crypt } from '../utils/crypt';
import { ErrorService } from "./error.service";

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor(private errorService:ErrorService) { }
  addToBasket(element):boolean {
    var items=localStorage.getItem(Storage.basket);
    if(items==null){
        var niz={restoranId:element.artikl.restoranId,stavkePorudzbine:[element],
          ukupnaCena:Number(element.artikl.cenaArtikla)};
             // console.log("PRVI",niz);
        var encrt=Crypt.encryptData(JSON.stringify(niz));
        if(encrt!="error")
        {
          localStorage.setItem(Storage.basket,encrt);
          return true;
        }
        else {this.errorBasket(); return false;}
    }else{
        var dec=Crypt.decryptData(items);
        if(dec!="error"){
          var data=null;
          try{
          data=JSON.parse(dec);
         // console.log("PRE DODATKA",data);
          }catch(e){
          }
          if(data!=null){
            ///odavde
          if(Number(data.restoranId)==Number(element.artikl.restoranId)){
          data.stavkePorudzbine=[element, ...data.stavkePorudzbine];
          data.ukupnaCena=Number(data.ukupnaCena)+Number(element.artikl.cenaArtikla);
          //ovde
          if(data.stavkePorudzbine.length<11){
            //console.log("POSLE DODATKA",data);
              var encrt=Crypt.encryptData(JSON.stringify(data));
              if(encrt!="error")  {
                localStorage.setItem(Storage.basket,encrt);
                return true;
              }else {this.errorBasket(); return false;}
            }else {this.premasio();return false;}
          }else {this.wrongRestaurant(element); return false;}
          }else {this.errorBasket();return false;}
        }else {this.errorBasket();return false;}
    }
  }
  premasio(){
    var error={status:666,error:"Korpa je već puna!"}
    this.errorService.handleError(error);
  }


  wrongRestaurant(element){
    var error={status:1488,error:"Promenili ste restoran, prethodni artikli su ispraznjeni!"}
    this.errorService.handleError(error);
    this.clearBasket();
    this.addToBasket(element);
  }

  errorBasket(){
    var error={status:1488,error:"Greška sa elementima u korpi, korpa je očiščena!"}
    this.errorService.handleError(error);
    this.clearBasket();
  }

  removeElement(element){
    var items=localStorage.getItem(Storage.basket);
    var dec=Crypt.decryptData(items);
        if(dec!="error"){
          var data=null;
          try{
          data=JSON.parse(dec);
          }catch(e){
          }
          if(data!=null){
            var me=data.stavkePorudzbine.find(el=>el.artikl.idArtikla==Number(element));
            data.ukupnaCena=Number(data.ukupnaCena)-Number(me.artikl.cenaArtikla);
            var index=data.stavkePorudzbine.indexOf(me);
            data.stavkePorudzbine.splice(index,1);
            if(data.stavkePorudzbine.length==0)this.clearBasket();
            else{
              var encrt=Crypt.encryptData(JSON.stringify(data));
              if(encrt!="error")
                localStorage.setItem(Storage.basket,encrt);
              else this.errorBasket();
            }
          }else this.errorBasket();
        }else this.errorBasket();
  }

  clearBasket(){
    localStorage.removeItem(Storage.basket);
  }

  getFromBasket(){
    var items=localStorage.getItem(Storage.basket);
    if(items==null)return null;
    var dec=Crypt.decryptData(items);
    if(dec!="error"){
      var data=null;
      try{
        data=JSON.parse(dec);
      }catch(e){
      }
      if(data!=null){
        return data;
      }else {this.errorBasket(); return null;}
    }else{this.errorBasket(); return null;}
  }

}
