import { getCurrencyFlagName } from "../get-currency-flag-name.helper";

const data = [
  ["RUB", "ru.png"],
  ["USD", "us.png"],
  ["EUR", "eu.png"],
];
describe("getCurrencyFlagName", () => {
  test.each(data)("getCurrencyFlagName converts ticker to flag image name", (ticker, expected) => {
    expect(getCurrencyFlagName(ticker)).toEqual(expected);
  });
});
