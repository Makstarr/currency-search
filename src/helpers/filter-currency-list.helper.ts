import { TCurrency } from "src/types/currensies.types";
import { searchStringInString } from "./search-string-in-string.helper";

export const filterCurrencyList = (list: TCurrency[], searchQuery?: string): TCurrency[] => {
  if (searchQuery) {
    const filteredList = list.filter(({ ticker }) => searchStringInString(ticker, searchQuery));
    return filteredList;
  }
  return list;
};
