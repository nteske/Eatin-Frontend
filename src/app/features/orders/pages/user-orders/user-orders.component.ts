import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { PorudzbinaDTO } from '../../dto/porudzbinaDTO';
import { ApiUrls } from '../../../../core/constants/api-urls';
import { Restoran } from 'src/app/features/home/models/restoran.model';
import { Lokacija } from 'src/app/features/home/models/lokacija.model';
import { RestoranService } from 'src/app/features/home/services/restoran.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {
  prikazi=false;
  gleda=-1;
  orders:PorudzbinaDTO;
  paginator:number=1;
  page:number=1;
  public statusi=[{value:"",name:"Sve porudzbine"},
  {value:"PRIMLJENA",name:"Primljene porudzbine"},
  {value:"GOTOVA",name:"Gotove porudzbine"},
  {value:"PRIHVACENA",name:"Prihvacene porudzbine"},
  {value:"ISPORUCENA",name:"Isporucene porudzbine"}];
  public status=this.statusi[0].value;

  public korisnik:Lokacija=null;

  public restoran:Restoran=null;
  constructor(public orderService:OrdersService,private restoranService:RestoranService) { }

  ngOnInit(): void {
    this.paginator=1;
    this.page=1;
    this.uzmiPoruzbine(1,this.status);
  }
  promena(){
    this.paginator=1;
    this.page=1;
    this.prikazi=false;
    this.pogledaj(-1);
    this.uzmiPoruzbine(1,this.status);
  }
  novaStrana(broj){
    this.page=broj;
    this.pogledaj(-1);
    this.uzmiPoruzbine(this.page,this.status);
  }
  uzmiPoruzbine(page,status){
    this.orderService.getOrders(page,status).subscribe(data=>{
      this.orders=data;
      this.paginator=data.totalPages;
      if(this.orders.content.length!=0)this.prikazi=true;
    })
  }
  gledajSliku(test){
    return ApiUrls.getImageUrl(test);
  }

  pogledaj(num){
    this.korisnik=null;
    this.restoran=null;
    this.gleda=num;
    if(Number(num)!=-1)
    this.restoranService.getRestoran(this.orders.content[num].restoranId).subscribe(data=>{
      this.restoran=data;
      this.korisnik=this.orders.content[num].lokacija;
    });
  }

}
