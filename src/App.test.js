import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { App } from "./App";

it("should render without crashing", () => {
  const component = shallow(<App />);
  expect(component).toBeTruthy();
});

it("renders a welcome message", () => {
  const wrapper = shallow(<App />);

  // Approach #1 - assert that shallow wrapper will contain specific React element (exactly as it appears in the code).
  const welcome = <h1 data-testId="page-title">Welcome to _jevTheDev</h1>;
  expect(wrapper).toContainReact(welcome);

  // Approach #2 - assert that a search of shallow wrapper by specific data attribute will render a specific text.
  const welcomeMessage = wrapper.find("[data-testId='page-title']");
  expect(welcomeMessage.text()).toBe("Welcome to _jevTheDev");
});
