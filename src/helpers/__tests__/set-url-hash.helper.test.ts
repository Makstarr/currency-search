import { setUrlHash } from "../set-url-hash.helper";

describe("setUrlHash", () => {
  test("setUrlHash sets hash for given string", () => {
    window.history.pushState = jest.fn();
    setUrlHash("testhash");
    expect(window.history.pushState).toBeCalledWith(null, document.title, "#testhash");
  });
  test("setUrlHash delets hash when string is empty", () => {
    window.history.pushState = jest.fn();
    setUrlHash("");
    expect(window.history.pushState).toBeCalledWith(null, document.title, window.location.pathname);
  });
});
