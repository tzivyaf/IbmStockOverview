export class StockData {
    metaData: string;
    timeSeries: TimeSeries[];
}

export class TimeSeries {
    date: Date;
    prices: IbmPriceDetails[];
}
export class IbmPriceDetails {
    open: number;
    high: number;
    low: number;
    close: number;
    adjustedClose: number;
    volume: number;
    dividendAmount: number;
    splitCoefficient: number;
}
