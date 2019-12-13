import React from "react";
import { shallow } from "enzyme";
import { About, createSkillList } from "./About";
import { aboutContent } from "../../allData/allData.js";

describe("About Component", () => {
  let wrapper;
  const { name, title, description, image, skills } = aboutContent;

  beforeEach(() => {
    wrapper = shallow(<About />);
  });

  it("should render without crashing", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should properly populate the dynamic elements", () => {
    expect(wrapper.find(`[src="${image}"]`).length).toBe(1);
    expect(wrapper.find("[data-testid='about-name']").text()).toBe(name);
    expect(wrapper.find("[data-testid='about-title']").text()).toBe(title);
    expect(wrapper.find("[data-testid='about-description']").text()).toBe(
      description
    );
  });

  it("should have createSkillList() populate skills", () => {
    expect(wrapper.find("[data-testid='about-skill-list']").exists()).toBe(
      true
    );
  });
});
