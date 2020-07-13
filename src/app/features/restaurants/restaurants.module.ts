import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { RestaurantViewComponent } from './pages/restaurant-view/restaurant-view.component';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ArticlesEditComponent } from './pages/articles-edit/articles-edit.component';
import { SharedModule } from '../../shared/shared.module';
import { PriloziIMereComponent } from './dialogs/prilozi-i-mere/prilozi-i-mere.component';
import {  MatDialogModule}  from '@angular/material/dialog';
import { ClickMapComponent } from './components/click-map/click-map.component';
@NgModule({
  declarations: [RestaurantViewComponent, ArticlesEditComponent, PriloziIMereComponent, ClickMapComponent],
  imports: [
    CommonModule,FormsModule,MatInputModule,MatSelectModule,MatCardModule,
    MatIconModule,MatCheckboxModule,MatButtonModule,ReactiveFormsModule,SharedModule,
    RestaurantsRoutingModule,MatDialogModule
  ],entryComponents: [
    PriloziIMereComponent
  ],
  exports: [
    ClickMapComponent
  ]
})
export class RestaurantsModule { }
