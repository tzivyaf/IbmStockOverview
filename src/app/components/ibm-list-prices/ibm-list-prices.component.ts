import { Component, OnInit } from '@angular/core';
import { IbmStockService } from 'src/app/services/ibm-stock.service';

@Component({
  selector: 'app-ibm-list-prices',
  templateUrl: './ibm-list-prices.component.html',
  styleUrls: ['./ibm-list-prices.component.css']
})
export class IbmListPricesComponent implements OnInit {

  constructor(private service :IbmStockService) { }
  ngOnInit(): void {
  }

}
