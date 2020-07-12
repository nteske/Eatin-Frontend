import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { RestaurantViewComponent } from './pages/restaurant-view/restaurant-view.component';


@NgModule({
  declarations: [RestaurantViewComponent],
  imports: [
    CommonModule,
    RestaurantsRoutingModule
  ]
})
export class RestaurantsModule { }
