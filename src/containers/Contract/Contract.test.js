import React from "react";
import { shallow } from "enzyme";
import { Contract } from "./Contract";
import { contractContent } from "../../allData/allData.js";

describe("Contract Component", () => {
  let wrapper;
  const { title, dates, description, image } = contractContent[0];

  beforeEach(() => {
    wrapper = shallow(<Contract content={contractContent[0]} />);
  });

  it("should render without crashing", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should properly render the dynamic element texts", () => {
    expect(wrapper.find("[data-testid='contract-title']").text()).toBe(title);
    expect(wrapper.find("[data-testid='contract-dates']").text()).toBe(
      `Contract Dates: ${dates}`
    );
    expect(wrapper.find("[data-testid='contract-description']").text()).toBe(
      description
    );
  });

  it("should properly assign a dynamic image source", () => {
    expect(wrapper.find(`[src="${image}"]`).exists()).toBe(true);
  });
});
