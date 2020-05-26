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
        var niz=[element];
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
          }catch(e){
          }
          if(data!=null){
          var niz=[element, ...data];
          if(niz.length<11){
              var encrt=Crypt.encryptData(JSON.stringify(niz));
              if(encrt!="error")  {
                localStorage.setItem(Storage.basket,encrt);
                return true;
              }
              else {this.errorBasket(); return false;}
            }else {this.premasio();return false;}
          }else {this.errorBasket();return false;}
        }else {this.errorBasket();return false;}
    }
  }
  premasio(){
    var error={status:666,error:"Korpa je već puna!"}
    this.errorService.handleError(error);
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
            data.splice(element,1);
            if(data.length==0)this.clearBasket();
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
