interface TImage {
  [key: string]: string;
}

function importAll(webpackContext: __WebpackModuleApi.RequireContext): TImage {
  let images: TImage = {};
  webpackContext.keys().forEach((item: string) => {
    images[item.replace("./", "")] = webpackContext(item);
  });
  return images;
}

export const flags = importAll(require.context("./flags", false, /\.(png|jpe?g|svg)$/));

