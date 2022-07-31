export const setUrlHash = (string: string) => {
  if (string) {
    window.history.pushState(null, "", `#${string}`);
  } else {
    window.history.pushState(null, "", "");
  }
};
