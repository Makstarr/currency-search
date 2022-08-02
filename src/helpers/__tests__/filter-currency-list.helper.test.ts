import { CurrenciesListMock } from "src/mocks/currensies-list.mock";
import { filterCurrenciesList } from "../filter-currency-list.helper";

const data: [string, object][] = [
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
      { ticker: "USD", flag: "us.png", country: "US Dollar", exchangeRate: 10000 },
      {
        ticker: "RUB",
        flag: "ru.png",
        country: "Russian Rouble",
        exchangeRate: 1,
      },
    ],
  ],
  [
    "Russ",
    [
      {
        ticker: "RUB",
        flag: "ru.png",
        country: "Russian Rouble",
        exchangeRate: 1,
      },
    ],
  ],
  ["olla", [{ ticker: "USD", flag: "us.png", country: "US Dollar", exchangeRate: 10000 }]],
  ["AAAAAA", []],
];

describe("filterCurrenciesList", () => {
  test.each(data)(
    "filterCurrenciesList filters and sorts a list of currensies with a given query = %i by ticker, name or country",
    (query, expected) => {
      const filteredList = filterCurrenciesList(CurrenciesListMock, query);
      expect(filteredList).toEqual(expected);
    }
  )
});
