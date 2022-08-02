export const setUrlHash = (string: string) => {
  if (string) {
    window.history.pushState(null, document.title, `#${string}`);
  } else {
    window.history.pushState(null, document.title, window.location.pathname);
  }
};
