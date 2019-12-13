import { testReducer } from "./testReducer";

describe("testReducer", () => {
  it("should return the default state if no state is defined", () => {
    const defaultState = "test";
    const result = testReducer(undefined, {});
    expect(result).toBe(defaultState);
  });

  it("should be able to update state with the payload", () => {
    const changedState = "The state has changed";
    const action = {
      type: "TEST_STORE",
      changedState
    };
    const result = testReducer(undefined, action);
    expect(result).toBe(changedState);
  });
});
