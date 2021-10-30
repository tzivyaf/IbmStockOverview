import { Component, OnInit } from '@angular/core';
import { IbmStockService } from 'src/app/services/ibm-stock.service';
import { map } from 'rxjs/operators';
import { JsonpClientBackend } from '@angular/common/http';
import { IbmPriceDetails, StockData, TimeSeries } from 'src/app/models/stock.model';
@Component({
  selector: 'app-ibm-list-prices',
  templateUrl: './ibm-list-prices.component.html',
  styleUrls: ['./ibm-list-prices.component.css']
})
export class IbmListPricesComponent implements OnInit {

  ibmPriceData: IbmPriceDetails[] = [];
  stockData: StockData;
  dataTimeSeries: TimeSeries[] = [];
  constructor(private service: IbmStockService) { }
  ngOnInit(): void {
    this.service.getData().subscribe(data => {
      debugger;
      this.dataTimeSeries = data;
    });
  }

}
