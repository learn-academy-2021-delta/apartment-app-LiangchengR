import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import LearnMore from "./LearnMore.js";

Enzyme.configure({ adapter: new Adapter() });

it("LearnMore renders content", () => {
  const learnMore = shallow(<LearnMore />);
  expect(learnMore.length).toEqual(1);
  expect(learnMore.find("img").length).toEqual(1);
  expect(learnMore.find("h3").length).toEqual(1);
});
