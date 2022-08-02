import { searchStringInString } from "../search-string-in-string.helper";

const data: [string, string, boolean][] = [
  ["e", "EUR", true],
  ["bar", "USD", false],
  ["uR", "EUR", true],
];

describe("searchStringInString", () => {
  test.each(data)(
    "searchStringInString searches for a query in a given string",
    (query, string, expected) => {
      expect(searchStringInString(string, query)).toEqual(expected);
    }
  );
});
