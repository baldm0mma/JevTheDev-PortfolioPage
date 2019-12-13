import { wakeHerokuApps, urls } from "./apiCalls";

describe("API Calls", () => {
  window.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve({})
    });
  });

  beforeEach(() => {
    wakeHerokuApps();
  });

  it("should call fetch 5 times", () => {
    expect(window.fetch).toHaveBeenCalledTimes(5);
  });

  // Testing for the correct urls
  // First approach - one test, 5 urls
  it("should be called with the correct urls", () => {
    urls.forEach(url => {
      expect(window.fetch).toHaveBeenCalledWith(url);
    });
  });

  // Second approach - 5 tests, one url
  urls.forEach(url => {
    it("should be called with the correct url", () => {
      expect(window.fetch).toHaveBeenCalledWith(url);
    })
  })
});
