import { Storage } from '../constants/storage';
export class Basket {
    public static addToBasket(element) {
        var items=localStorage.getItem(Storage.basket);
        if(items==null){
            var niz=[element];
            localStorage.setItem(Storage.basket,JSON.stringify(niz));
        }else{
            var data=JSON.parse(items);
            var niz=[element, ...data.filter(i=>i.artikl!=element.artikl)];
            localStorage.setItem(Storage.basket,JSON.stringify(niz));
        }

    }
}