import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { PorudzbinaDTO } from '../../dto/porudzbinaDTO';
import { ApiUrls } from '../../../../core/constants/api-urls';

@Component({
  selector: 'app-delivery-orders',
  templateUrl: './delivery-orders.component.html',
  styleUrls: ['./delivery-orders.component.css']
})
export class DeliveryOrdersComponent implements OnInit {
  prikazi=false;
  prikazi2=false;
  gleda=-1;
  gleda2=-1;
  orders:PorudzbinaDTO;
  dostupno:PorudzbinaDTO;
  paginator:number=1;
  page:number=1;
  paginator2:number=1;
  page2:number=1;
  public statusi=[{value:"",name:"Sve porudzbine"},
  {value:"PRIMLJENA",name:"Primljene porudzbine"},
  {value:"GOTOVA",name:"Gotove porudzbine"},
  {value:"PRIHVACENA",name:"Prihvacene porudzbine"},
  {value:"ISPORUCENA",name:"Isporucene porudzbine"}];
  public status=this.statusi[0].value;
  constructor(public orderService:OrdersService) { }

  ngOnInit(): void {
    this.pocetak();
  }
  promena(){
    this.paginator=1;
    this.page=1;
    this.prikazi=false;
    this.uzmiPoruzbine(1,this.status);
  }
  novaStrana(broj){
    this.page=broj;
    this.uzmiPoruzbine(this.page,this.status);
  }
  uzmiPoruzbine(page,status){
    this.orderService.getOrdersToDeliver(page,status).subscribe(data=>{
      this.orders=data;
      this.paginator=data.totalPages;
      if(this.orders.content.length!=0)this.prikazi=true;
    })
  }
  pogledajDostupne(page){
    this.orderService.getAvalibeToDeliver(page).subscribe(data=>{
      this.dostupno=data;
      this.paginator2=data.totalPages;
      if(this.dostupno.content.length!=0)this.prikazi2=true;
    })
  }
  novaStrana2(broj){
    this.page2=broj;
    this.pogledajDostupne(this.page2);
  }
  gledajSliku(test){
    return ApiUrls.getImageUrl(test);
  }

  pogledaj(num){
    this.gleda=num;
  }
  pogledaj2(num){
    this.gleda2=num;
  }

  public pocetak(){
    this.paginator=1;
    this.page=1;
    this.paginator2=1;
    this.page2=1;
    this.uzmiPoruzbine(1,this.status);
    this.pogledajDostupne(1);
  }

  prihvati(num){
    this.orderService.putPrihvataDeliver(num).subscribe(data=>{
      this.pocetak();
    });
  }
  dostavljeno(num){
    this.orderService.putIsporucujeDeliver(num).subscribe(data=>{
      this.pocetak();
    });
  }

}