import { currencyListMock } from "src/mocks/currensies-list.mock";
import { filterCurrencyList } from "../filter-currency-list.helper";

const data = [
  [
    "rU",
    [
      {
        ticker: "RUB",
        flag: "ru.png",
        country: "Russian Rouble",
        exchangeRate: 1,
      },
    ],
  ],
  [
    "U",
    [
      {
        ticker: "RUB",
        flag: "ru.png",
        country: "Russian Rouble",
        exchangeRate: 1,
      },
      { ticker: "USD", flag: "us.png", country: "US Dollar", exchangeRate: 10000 },
    ],
  ],
  ["AAAAAA", []],
];

describe("filterCurrencyList", () => {
  test.each(data)(
    "filterCurrencyList filters a list of currensies with a given query = %i",
    (query, expected) => {
      const filteredList = filterCurrencyList(currencyListMock, query);
      expect(filteredList).toEqual(expected);
    }
  );
});
