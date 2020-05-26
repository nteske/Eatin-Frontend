import { Injectable } from '@angular/core';
import { Storage } from '../constants/storage';
import { Crypt } from '../utils/crypt';
import { ErrorService } from "./error.service";

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor(private errorService:ErrorService) { }
  addToBasket(element) {
    var items=localStorage.getItem(Storage.basket);
    if(items==null){
        var niz=[element];
        var encrt=Crypt.encryptData(JSON.stringify(niz));
        if(encrt!="error")
          localStorage.setItem(Storage.basket,encrt);
        else this.errorBasket();
    }else{
        var dec=Crypt.decryptData(items);
        if(dec!="error"){
          var data=null;
          try{
          data=JSON.parse(dec);
          }catch(e){
          }
          if(data!=null){
          var niz=[element, ...data.filter(i=>i.artikl!=element.artikl)];
          var encrt=Crypt.encryptData(JSON.stringify(niz));
          if(encrt!="error")
            localStorage.setItem(Storage.basket,encrt);
          else this.errorBasket();
          }else this.errorBasket();
        }else this.errorBasket();
    }
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


  errorBasket(){
    var error={status:1488,error:"Greška sa elementima u korpi, korpa je očiščena!"}
    this.errorService.handleError(error);
    this.clearBasket();
  }
}
