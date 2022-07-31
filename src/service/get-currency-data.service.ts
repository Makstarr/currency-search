import { searchString } from "./../helpers/search-string";
import type { TCurrency } from "src/types/currency.types";
import * as jsonData from "src/data/fx.json";
const { fx: dataList } = jsonData;

const formatedData = dataList.map(({ currency }): TCurrency => {
  return { currency };
});

export const getCurrenciesData = (searchQuery?: string): TCurrency[] => {
  if (searchQuery) {
    const filteredData = formatedData.filter(
      ({ currency }) => searchString(currency, searchQuery)

      // || (nameI18N && searchString(nameI18N, searchQuery))
    );
    return filteredData;
  }
  return formatedData;
};
