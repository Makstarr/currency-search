export interface TExchangeRate {
  buy: number;
  middle: number;
  sell: number;
  indicator: number;
  lastModified: string;
}
export interface TBanknoteRate {
  buy: number;
  middle: number;
  sell: number;
  indicator: number;
  lastModified: string;
}
export interface TCurrency {
  currency: string;
  nameI18N?: string;
  precision: number;
  denominations?: number[];
  exchangeRate: TExchangeRate;
  banknoteRate: TBanknoteRate;
  flags: string[];
}
