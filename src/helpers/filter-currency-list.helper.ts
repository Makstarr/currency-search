import { TCurrency } from "src/types/currensies.types";
import { searchStringInString } from "./search-string-in-string.helper";

export const filterCurrenciesList = (list: TCurrency[], searchQuery?: string): TCurrency[] => {
  if (searchQuery) {
    const filteredList = list.filter(
      ({ ticker, country }) =>
        searchStringInString(ticker, searchQuery) >= 0 ||
        searchStringInString(country, searchQuery) >= 0
    );

    const sortedList = filteredList.sort((a, b) => {
      // indexes of query
      const aTickerIndex = searchStringInString(a.ticker, searchQuery);
      const bTickerIndex = searchStringInString(b.ticker, searchQuery);
      const aCountryIndex = searchStringInString(a.country, searchQuery);
      const bCountryIndex = searchStringInString(b.country, searchQuery);

      // first sorts by ticker
      if (aTickerIndex >= 0 && bTickerIndex >= 0) {
        if (aTickerIndex < bTickerIndex) return -1;
        if (aTickerIndex > bTickerIndex) return 1;
      }
      if (aTickerIndex >= 0 && bTickerIndex < 0) return -1;
      if (aTickerIndex < 0 && bTickerIndex >= 0) return 1;

      // with equal tickers sorts by country
      if (aCountryIndex >= 0 && bCountryIndex >= 0) {
        if (aCountryIndex < bCountryIndex) return -1;
        if (aCountryIndex > bCountryIndex) return 1;
      }
      if (aCountryIndex >= 0 && bCountryIndex < 0) return -1;
      if (aCountryIndex < 0 && bCountryIndex >= 0) return 1;

      return 0;
    });

    return sortedList;
  }
  return list;
};
