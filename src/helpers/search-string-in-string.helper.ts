export const searchStringInString = (string: string, query: string) => {
  return string.toLowerCase().search(query.toLowerCase());
};
