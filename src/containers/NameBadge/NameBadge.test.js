import React from "react";
import { shallow } from "enzyme";
import { NameBadge } from "./NameBadge";

describe("NameBadge Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NameBadge />);
  });

  it("should render without crashing", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render a welcome message", () => {
    // Approach #1 - assert that shallow wrapper will contain specific React element (exactly as it appears in the code).
    const welcome = <h1 data-testid="page-title">Welcome to _jevTheDev</h1>;
    expect(wrapper).toContainReact(welcome);

    // Approach #2 - assert that a search of shallow wrapper by specific data attribute will render a specific text.
    const welcomeTitle = wrapper.find("[data-testid='page-title']").text();
    expect(welcomeTitle).toBe("Welcome to _jevTheDev");
    const welcomeText = wrapper.find("[data-testid='page-text']").text();
    expect(welcomeText).toBe("Hi, I'm Jev. I'm a Dev. This is my portfolio.");
  });
});
