import { parseServerData } from "./helpers/parce-curensies-server-data.helper";
import axios from "axios";

import type { TGetCurrenciesResponse } from "src/types/currensies.types";

import { CURRENCY_EDPOINT } from "./endpoints";

export const getCurrencies = async () => {
  const response = await axios
    .get<TGetCurrenciesResponse>(CURRENCY_EDPOINT, {
      headers: {
        Accept: "application/json",
      },
    })
    .then(({ data }) => {
      return parseServerData(data);
    })
    .catch((e) => {
      console.error(e.message);
    });
  return response;
};
