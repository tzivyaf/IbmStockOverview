import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { StockData, TimeSeries, IbmPriceDetails } from '../models/stock.model'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IbmStockService implements OnInit {

  url: string = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=demo"
  stockData: StockData = new StockData();
  timeSeries: TimeSeries[] = [];
  ibmPriceDetails: IbmPriceDetails[] = [];
  constructor(private http: HttpClient) { }
  ngOnInit() {
  }
  getData() {

    return this.http.get<string>(this.url).pipe(map(x => {
      debugger;

      this.stockData = Object.assign(new StockData(), x)
      this.timeSeries = this.stockData["Time Series (Daily)"]
      return this.timeSeries;
    }));
  }
}
