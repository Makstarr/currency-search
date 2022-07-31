export const searchString = (string: string, query: string) => {
  return string.toLowerCase().search(query.toLowerCase()) >= 0;
};
