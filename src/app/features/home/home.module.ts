import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HomeRoutingModule } from './home-routing.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { RecaptchaModule,RecaptchaFormsModule} from 'ng-recaptcha';

//komponente
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HereComponent } from './components/here/here.component';
import { UserInterfaceComponent } from './components/user-interface/user-interface.component';

@NgModule({
  declarations: [HomeComponent, LoginComponent, RegisterComponent, UserInterfaceComponent, HereComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ]
})
export class HomeModule { }
