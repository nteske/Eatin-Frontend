import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { BasketComponent } from '../orders/pages/basket/basket.component';

@NgModule({
  declarations: [BasketComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
  ]
})
export class OrdersModule { }