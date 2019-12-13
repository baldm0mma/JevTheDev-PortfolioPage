import React from "react";
import { shallow } from "enzyme";
import { App } from "./App";

describe("App component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("should render without crashing", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  // it("should call wakeHerokuApps() on mount", () => {
  //   const wakeHerokuApps = jest.fn();
  //   expect(wakeHerokuApps).toHaveBeenCalled();
  // });
});
