import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { IbmListPricesComponent } from './components/ibm-list-prices/ibm-list-prices.component';
import {IbmStockService} from './services/ibm-stock.service'
import { HttpClientModule } from '@angular/common/http';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    IbmListPricesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GridModule,
    BrowserAnimationsModule
  ],
  providers: [IbmStockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
