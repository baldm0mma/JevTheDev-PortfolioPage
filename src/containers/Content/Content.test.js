import React from "react";
import { shallow } from "enzyme";
import { Content } from "./Content";
import { projectContent } from "../../allData/allData";

describe("Content Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Content content={projectContent[0]} />);
  });

  it("should render without crashing", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should properly populate the dynamic element text", () => {
    expect(wrapper.find("[data-testid='content-title']").text()).toBe(
      projectContent[0].title
    );
    expect(wrapper.find("[data-testid='content-description']").text()).toBe(
      projectContent[0].description
    );
  });

  it("should properly render the correct icons", () => {
    expect(wrapper.find("[alt='GitHub Icon']").exists()).toBe(true);
    expect(wrapper.find("[alt='GitLab Icon']").exists()).toBe(false);
    expect(wrapper.find("[alt='Live Demo Icon']").exists()).toBe(true);
  });

  it("should properly render an image", () => {
    expect(wrapper.find(`[src="${projectContent[0].image}"]`).exists()).toBe(
      true
    );
  });
});
