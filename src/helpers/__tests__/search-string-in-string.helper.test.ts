import { searchStringInString } from "../search-string-in-string.helper";

const data: [string, string, number][] = [
  ["e", "EUR", 0],
  ["bar", "USD", -1],
  ["uR", "EUR", 1],
];

describe("searchStringInString", () => {
  test.each(data)(
    "searchStringInString returns index of a query in a given string",
    (query, string, expected) => {
      expect(searchStringInString(string, query)).toEqual(expected);
    }
  );
});
