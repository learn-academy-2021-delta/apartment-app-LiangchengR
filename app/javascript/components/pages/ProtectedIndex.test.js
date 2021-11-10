import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ProtectedIndex from "./ProtectedIndex.js";
import mockApartments from "../mockApartments.js";

Enzyme.configure({ adapter: new Adapter() });
it("ProtectedIndex renders content", () => {
  const ApIndex = shallow(<ProtectedIndex apartments={mockApartments} />);
  expect(ApIndex.length).toEqual(1);
});
