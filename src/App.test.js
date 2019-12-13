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

  it("renders a welcome message", () => {
    // Approach #1 - assert that shallow wrapper will contain specific React element (exactly as it appears in the code).
    const welcome = <h1 data-testid="page-title">Welcome to _jevTheDev</h1>;
    expect(wrapper).toContainReact(welcome);

    // Approach #2 - assert that a search of shallow wrapper by specific data attribute will render a specific text.
    const welcomeMessage = wrapper.find("[data-testid='page-title']").text();
    expect(welcomeMessage).toBe("Welcome to _jevTheDev");
  });

  // it("should call wakeHerokuApps() on mount", () => {
  //   const wakeHerokuApps = jest.fn();
  //   expect(wakeHerokuApps).toHaveBeenCalled();
  // });
});
