import { testStore } from "./index";

describe("Actions", () => {
  it("should have a type of 'TEST_STORE, a payload of 'changedState', and change the Redux state as a test", () => {
    const changedState = "The state has changed";
    const expectedAction = {
      type: "TEST_STORE",
      changedState
    };
    expect(testStore(changedState)).toEqual(expectedAction);
  });
});
