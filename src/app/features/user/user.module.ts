import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
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
import { UsersComponent } from './pages/users/users.component';
import { KlijentDialogComponent } from './components/dialogs/klijent-dialog/klijent-dialog.component';
import { AdminDialogComponent } from './components/dialogs/admin-dialog/admin-dialog.component';
import { ZaposleniDialogComponent } from './components/dialogs/zaposleni-dialog/zaposleni-dialog.component';
import { DostavljacDialogComponent } from './components/dialogs/dostavljac-dialog/dostavljac-dialog.component';
import { RestaurantAdminComponent } from './pages/restaurant-admin/restaurant-admin.component';
import { RestaurantsModule } from '../restaurants/restaurants.module';
import { TipoviRestoranaComponent } from './pages/tipovi-restorana/tipovi-restorana.component';
import { TipoviArtiklaComponent } from './pages/tipovi-artikla/tipovi-artikla.component';
import { TipRestoranaDialogComponent } from './components/dialogs/tip-restorana-dialog/tip-restorana-dialog.component';
import { TipArtiklaDialogComponent } from './components/dialogs/tip-artikla-dialog/tip-artikla-dialog.component';


@NgModule({
  declarations: [SettingsComponent, UserInterfaceComponent, LoginComponent, RegisterComponent, PasswordComponent, ApanelComponent, EmployeComponent, ProfilComponent, UsersComponent, KlijentDialogComponent, AdminDialogComponent, ZaposleniDialogComponent, DostavljacDialogComponent, RestaurantAdminComponent, TipoviRestoranaComponent, TipoviArtiklaComponent, TipRestoranaDialogComponent, TipArtiklaDialogComponent],
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
    MatTableModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    RestaurantsModule
  ],
  entryComponents: [
    KlijentDialogComponent,
    AdminDialogComponent,
    ZaposleniDialogComponent,
    DostavljacDialogComponent,
    TipRestoranaDialogComponent,
    TipArtiklaDialogComponent
  ]
})
export class UserModule { }
