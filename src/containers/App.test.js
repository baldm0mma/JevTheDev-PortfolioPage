import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import { App } from "./App";

it("should render without crashing", () => {
  const component = shallow(<App />);
  expect(component).toBeTruthy();
});

it("renders a welcome message", () => {
  const wrapper = shallow(<App />);
  const welcome = <h1>Welcome to _jevTheDev</h1>;
  expect(wrapper).toContainReact(welcome);
});
