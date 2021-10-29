import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IbmListPricesComponent } from './components/ibm-list-prices/ibm-list-prices.component';
import {IbmStockService} from './services/ibm-stock.service'
@NgModule({
  declarations: [
    AppComponent,
    IbmListPricesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [IbmStockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
