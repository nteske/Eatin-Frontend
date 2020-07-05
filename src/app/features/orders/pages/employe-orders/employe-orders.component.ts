import { Component, OnInit } from '@angular/core';
import { PorudzbinaDTO } from '../../dto/porudzbinaDTO';
import { OrdersService } from '../../services/orders.service';
import { ApiUrls } from 'src/app/core/constants/api-urls';

@Component({
  selector: 'app-employe-orders',
  templateUrl: './employe-orders.component.html',
  styleUrls: ['./employe-orders.component.css']
})
export class EmployeOrdersComponent implements OnInit {
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
  constructor(public orderService:OrdersService) { }

  ngOnInit(): void {
    this.pocetak();
  }

  public pocetak(){
    this.paginator=1;
    this.page=1;
    this.uzmiPoruzbine(1,this.status);
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
    this.orderService.getEmployeeOrders(page,status).subscribe(data=>{
      this.orders=data;
      this.paginator=data.totalPages;
      if(this.orders.content.length!=0)this.prikazi=true;
    })
  }
  gledajSliku(test){
    return ApiUrls.getImageUrl(test);
  }

  pogledaj(num){
    this.gleda=num;
  }

  gotovo(num){
    this.orderService.putGootovaEmployee(num).subscribe(data=>{
      this.pocetak();
    });
  }

}
