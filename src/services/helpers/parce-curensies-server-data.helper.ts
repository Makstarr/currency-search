import { getCurrencyFlagName } from "src/helpers/get-currency-flag-name.helper";

import type {
  TCurrency,
  TCurrencyResponseItem,
  TGetCurrenciesResponse,
} from "src/types/currensies.types";

export const parseServerData = (data: TGetCurrenciesResponse) => {
  const list = data.fx.reduce(
    (filtered: TCurrency[], { currency, nameI18N, exchangeRate }: TCurrencyResponseItem) => {
      if (currency && nameI18N && exchangeRate?.middle) {
        filtered.push({
          ticker: currency,
          flag: getCurrencyFlagName(currency),
          country: nameI18N,
          exchangeRate: exchangeRate.middle,
        });
      }
      return filtered;
    },
    []
  );

  return { list, baseCurrency: data.baseCurrency };
};
