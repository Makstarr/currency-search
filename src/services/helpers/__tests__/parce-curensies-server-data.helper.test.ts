import { currencyListMock } from "src/mocks/currensies-list.mock";
import { serverDataMock } from "src/mocks/currensies-server-data.mock";
import { parseServerData } from "../parce-curensies-server-data.helper";

describe("parseServerData", () => {
  test("parseServerData returns filtered and parces array of currensies and baseCurrency", () => {
    const data = parseServerData(serverDataMock);
    expect(data).toEqual({ list: currencyListMock, baseCurrency: "EUR" });
  });
});
