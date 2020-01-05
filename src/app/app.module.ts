import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; //used to make api calls and such

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrenciesComponent } from './Components/currencies/currencies.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrenciesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
