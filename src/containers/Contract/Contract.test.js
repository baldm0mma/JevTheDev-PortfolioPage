import React from "react";
import { shallow } from "enzyme";
import { Contract } from "./Contract";
import { contractContent } from "../../allData/allData.js";

describe("Contract Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Contract content={content} />);
  });
});
