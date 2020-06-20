import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { HomeRoutingModule } from './home-routing.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { RecaptchaModule,RecaptchaFormsModule} from 'ng-recaptcha';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {MatCardModule} from '@angular/material/card';

//komponente
import { HomeComponent } from './pages/home/home.component';
import { HereComponent } from './components/here/here.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { OrderArticleComponent } from './pages/order-article/order-article.component';
import { DisplayComponent } from './components/display/display.component';
@NgModule({
  declarations: [HomeComponent, HereComponent, ArticlesComponent, OrderArticleComponent, DisplayComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    HomeRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    NgbModule
  ]
})
export class HomeModule { }
