import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BasketComponent } from '../orders/pages/basket/basket.component';
import { UserOrdersComponent } from './pages/user-orders/user-orders.component';
import { DeliveryOrdersComponent } from './pages/delivery-orders/delivery-orders.component';
import { ArticleOrdersComponent } from './components/article-orders/article-orders.component';

@NgModule({
  declarations: [BasketComponent, UserOrdersComponent, DeliveryOrdersComponent, ArticleOrdersComponent],
  imports: [
    CommonModule,
    FormsModule,
    OrdersRoutingModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
  ]
})
export class OrdersModule { }