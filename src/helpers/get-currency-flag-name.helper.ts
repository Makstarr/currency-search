export const getCurrencyFlagName = (currencyName: string): string =>
  currencyName.slice(0, 2).toLowerCase() + ".png";
