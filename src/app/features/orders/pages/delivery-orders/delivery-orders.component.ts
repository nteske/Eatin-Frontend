import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Porudzbina } from '../../dto/porudzbina';
import { ApiUrls } from '../../../../core/constants/api-urls';

@Component({
  selector: 'app-delivery-orders',
  templateUrl: './delivery-orders.component.html',
  styleUrls: ['./delivery-orders.component.css']
})
export class DeliveryOrdersComponent implements OnInit {

  prikazi=false;
  gleda=-1;
  orders:Porudzbina[]=[];
  constructor(public orderService:OrdersService) { }


  ngOnInit(): void {
    this.orderService.getOrdersToDeliver().subscribe(data=>{
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

  prihvati(num){
    this.orderService.acceptOrder(num).subscribe();
  }


}