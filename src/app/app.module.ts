
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from "@auth0/angular-jwt";

import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
//import { MapServiceProviderFactory } from './core/utils/MapServiceProviderFactory';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    JwtModule.forRoot({config:{throwNoTokenError: true}})
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
