import React from "react";
import { shallow } from "enzyme";
import { Icon } from "./Icon";

describe("Icon component", () => {
  let wrapper;
  let source;

  beforeEach(() => {
    source = {
      link: "www.resume.com",
      imageSource: "../assets/cv.png",
      altText: "Resume Icon"
    };
    wrapper = shallow(<Icon source={source} />);
  });

  it("should render without crashing", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should properly populate the dynamic attributes", () => {
    expect(wrapper.find("[href='www.resume.com']").length).toBe(1);
    expect(wrapper.find("[src='../assets/cv.png']").length).toBe(1);
    expect(wrapper.find("[alt='Resume Icon']").length).toBe(1);
  });
});
