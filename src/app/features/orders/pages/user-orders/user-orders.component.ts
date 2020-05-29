import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Porudzbina } from '../../dto/porudzbina';
import { ApiUrls } from '../../../../core/constants/api-urls';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {
  prikazi=false;
  gleda=-1;
  orders:Porudzbina[]=[];
  constructor(public orderService:OrdersService) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(data=>{
      this.orders=data;
      this.prikazi=true;
    })
  }

  gledajSliku(test){
    return ApiUrls.getImageUrl(test);
  }

  pogledaj(num){
    this.gleda=num;
  }

}
