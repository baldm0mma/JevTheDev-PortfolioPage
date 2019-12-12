import { combineReducers, createStore } from "redux";
import { testReducer } from "./testReducer";

describe("rootReducer", () => {
  let rootReducer = combineReducers({ test: testReducer });
  let store = createStore(rootReducer);

  it("should be able to create a store", () => {
    expect(store.getState().test).toEqual("test");
  });
});
