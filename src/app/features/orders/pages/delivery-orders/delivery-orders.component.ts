import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { PorudzbinaDTO } from '../../dto/porudzbinaDTO';
import { ApiUrls } from '../../../../core/constants/api-urls';
import { Restoran } from 'src/app/features/home/models/restoran.model';
import { Lokacija } from 'src/app/features/home/models/lokacija.model';
import { RestoranService } from 'src/app/features/home/services/restoran.service';

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
  public korisnik:Lokacija=null;

  public restoran:Restoran=null;

  constructor(public orderService:OrdersService,private restoranService:RestoranService) { }

  ngOnInit(): void {
    this.pocetak();
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
    this.pogledaj2(-1);
    this.pogledajDostupne(this.page2);
  }
  gledajSliku(test){
    return ApiUrls.getImageUrl(test);
  }

  pogledaj(num){
    this.gleda2=-1;
    this.korisnik=null;
    this.restoran=null;
    this.gleda=num;
    if(Number(num)!=-1)
    this.restoranService.getRestoran(this.orders.content[num].restoranId).subscribe(data=>{
      this.restoran=data;
      this.korisnik=this.orders.content[num].lokacija;
    });
  }
  pogledaj2(num){
    this.gleda=-1;
    this.korisnik=null;
    this.restoran=null;
    this.gleda2=num;
    if(Number(num)!=-1)
    this.restoranService.getRestoran(this.dostupno.content[num].restoranId).subscribe(data=>{
      this.restoran=data;
      this.korisnik=this.dostupno.content[num].lokacija;
    });
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
      this.pogledaj(-1);
      this.pogledaj2(-1);
      this.pocetak();
    });
  }
  dostavljeno(num){
    this.orderService.putIsporucujeDeliver(num).subscribe(data=>{
      this.pogledaj(-1);
      this.pogledaj2(-1);
      this.pocetak();
    });
  }

}