import React from "react";
import ReactDOM from "react-dom";
import { Contact } from "./Contact";
import { shallow } from "enzyme";

it("should render without crashing", () => {
  const component = shallow(<Contact />);
  expect(component).toBeTruthy();
});
