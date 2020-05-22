
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from "@auth0/angular-jwt";
import { ToastrModule } from 'ngx-toastr';

import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { ErrorComponent } from './core/components/error/error.component';
//import { MapServiceProviderFactory } from './core/utils/MapServiceProviderFactory';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    JwtModule.forRoot({config:{throwNoTokenError: true}})
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
