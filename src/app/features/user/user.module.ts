import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { SettingsComponent } from './pages/settings/settings.component';
import { PasswordComponent } from './pages/password/password.component';
import { ApanelComponent } from './pages/apanel/apanel.component';
import { EmployeComponent } from './pages/employe/employe.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserInterfaceComponent } from './pages/user-interface/user-interface.component';
import { RecaptchaModule,RecaptchaFormsModule} from 'ng-recaptcha';
import { ProfilComponent } from './pages/profil/profil.component';


@NgModule({
  declarations: [SettingsComponent, UserInterfaceComponent, LoginComponent, RegisterComponent, PasswordComponent, ApanelComponent, EmployeComponent, ProfilComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ]
})
export class UserModule { }
