import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IbmStockService {

  url: string = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=demo";

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<string>(this.url);
  }
}

