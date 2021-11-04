import { Component, OnInit } from '@angular/core';
import { IbmStockService } from 'src/app/services/ibm-stock.service';
import { IbmPriceDetails } from 'src/app/models/stock.model';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { GridDataResult, PageChangeEvent } from "@progress/kendo-angular-grid";

@Component({
  selector: 'app-ibm-list-prices',
  templateUrl: './ibm-list-prices.component.html',
  styleUrls: ['./ibm-list-prices.component.css']
})
export class IbmListPricesComponent implements OnInit {

  ibmPriceData: IbmPriceDetails[] = [];
  columns: { field: string }[];
  public type = "numeric";
  public buttonCount = 5;
  public info = true;
  public pageSize = 20;
  public pageSizes = true;
  public skip = 0;
  public previousNext = true;
  public position = "bottom";
  public sortable = true;
  public multiple = true;
  public allowUnsort = false;
  public sort: SortDescriptor[] = [
    {
      field: "date",
      dir: "asc"
    }
  ];
  gridView: GridDataResult;

  dateToSell: IbmPriceDetails;
  dateToBuy: IbmPriceDetails;

  constructor(private service: IbmStockService) { }
  ngOnInit(): void {
    this.service.getData().subscribe(data => {
      debugger;
      Object.entries(data["Time Series (Daily)"])
        .forEach(([date, timeSeriesDaily]) => {
          let day = new IbmPriceDetails();
          day.date = date;
          day.open = timeSeriesDaily['1. open'];
          day.high = timeSeriesDaily['2. high'];
          day.low = timeSeriesDaily['3. low'];
          day.close = timeSeriesDaily['4. close'];
          day.priceDiff = parseFloat(Math.abs(day.open - day.close).toFixed(2));
          day.adjustedClose = timeSeriesDaily['5. adjusted close'];
          day.volume = timeSeriesDaily['6. volume'];
          day.dividendAmount = timeSeriesDaily['7. dividend amount'];
          day.splitCoefficient = timeSeriesDaily['8. split coefficient'];
          this.ibmPriceData.push(day);
        });
      this.dateToBuy = this.ibmPriceData.reduce((prev, current) => (+prev.low < +current.low) ? prev : current)
      this.dateToSell = this.ibmPriceData.reduce((prev, current) => (+prev.high > +current.high) ? prev : current)

      this.initGrid();
    });
  }

  initGrid() {
    this.gridView = //process(this.ibmPriceData, this.state);
    {
      data: orderBy(this.ibmPriceData, this.sort).slice(this.skip, this.skip + this.pageSize),
      total: this.ibmPriceData.length,
    };

  }
  protected pageChange({ skip, take }: PageChangeEvent): void {
    this.skip = skip;
    this.pageSize = take;
    this.initGrid();
  }
  public sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.initGrid();
  }
}
