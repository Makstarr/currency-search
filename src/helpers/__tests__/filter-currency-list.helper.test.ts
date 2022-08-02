import { CurrenciesListMock } from "src/mocks/currensies-list.mock";
import { filterCurrenciesList } from "../filter-currency-list.helper";
import { TCurrency } from "src/types/currensies.types";

const searchData: [string, TCurrency[]][] = [
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

const sortData: [string, TCurrency[], TCurrency[]][] = [
  [
    "a",
    [
      {
        ticker: "123a",
        flag: "",
        country: "a",
        exchangeRate: 1,
      },
      {
        ticker: "a",
        flag: "",
        country: "123a",
        exchangeRate: 1,
      },
      {
        ticker: "1234",
        flag: "",
        country: "12a",
        exchangeRate: 1,
      },
      {
        ticker: "1234",
        flag: "",
        country: "a",
        exchangeRate: 1,
      },
      {
        ticker: "123a",
        flag: "",
        country: "1234",
        exchangeRate: 1,
      },
    ],
    [
      {
        ticker: "a",
        flag: "",
        country: "123a",
        exchangeRate: 1,
      },
      {
        ticker: "123a",
        flag: "",
        country: "a",
        exchangeRate: 1,
      },
      {
        ticker: "123a",
        flag: "",
        country: "1234",
        exchangeRate: 1,
      },
      {
        ticker: "1234",
        flag: "",
        country: "a",
        exchangeRate: 1,
      },
      {
        ticker: "1234",
        flag: "",
        country: "12a",
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
      {
        ticker: "123a",
        flag: "",
        country: "1234",
        exchangeRate: 1,
      },
      {
        ticker: "1234",
        flag: "",
        country: "a",
        exchangeRate: 1,
      },
      { ticker: "USD", flag: "us.png", country: "US Dollar", exchangeRate: 10000 },
    ],
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
];

describe("filterCurrenciesList", () => {
  test.each(searchData)(
    "filterCurrenciesList filters and sorts a list of currensies with a given query = %i by ticker, name or country",
    (query, expected) => {
      const filteredList = filterCurrenciesList(CurrenciesListMock, query);
      expect(filteredList).toEqual(expected);
    }
  );
	
  test.each(sortData)(
    "filterCurrenciesList sorts a list with query = %i. First by ticker, then by name or country",
    (query, list, expected) => {
      const sortedList = filterCurrenciesList(list, query);
      expect(sortedList).toEqual(expected);
    }
  );
});
