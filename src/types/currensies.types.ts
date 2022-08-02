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
  sell?: number;
  indicator: number;
  lastModified: string;
}
export interface TCurrencyResponseItem {
  currency: string;
  nameI18N?: string;
  precision?: number;
  denominations?: number[];
  exchangeRate?: TExchangeRate;
  banknoteRate?: TBanknoteRate;
  flags?: string[];
}

export interface TGetCurrenciesResponse {
  fx: TCurrencyResponseItem[];
  institute: number;
  lastUpdated: string;
  comparisonDate: string;
  baseCurrency: string;
}

export interface TCurrency {
  ticker: string;
  flag: string;
  country: string;
  exchangeRate: number;
}
