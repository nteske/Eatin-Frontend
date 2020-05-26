
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button'; 
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from "@auth0/angular-jwt";
import { ToastrModule } from 'ngx-toastr';
import {MatIconModule} from '@angular/material/icon';

import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { ErrorComponent } from './core/components/error/error.component';
import { BasketButtonComponent } from './core/component/basket-button/basket-button.component';
//import { MapServiceProviderFactory } from './core/utils/MapServiceProviderFactory';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ErrorComponent,
    BasketButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    JwtModule.forRoot({config:{throwNoTokenError: true}})
  ],
  exports:[],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
