import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'; 
import {MatSelectModule} from '@angular/material/select'; 
import { MatButtonModule } from '@angular/material/button';
import { HomeRoutingModule } from './home-routing.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { RecaptchaModule,RecaptchaFormsModule} from 'ng-recaptcha';
import {MatCheckboxModule} from '@angular/material/checkbox'; 

//komponente
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HereComponent } from './components/here/here.component';
import { UserInterfaceComponent } from './components/user-interface/user-interface.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { OrderArticleComponent } from './pages/order-article/order-article.component';
import { DisplayComponent } from './components/display/display.component';
@NgModule({
  declarations: [HomeComponent, LoginComponent, RegisterComponent, UserInterfaceComponent, HereComponent, ArticlesComponent, OrderArticleComponent, DisplayComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ]
})
export class HomeModule { }
