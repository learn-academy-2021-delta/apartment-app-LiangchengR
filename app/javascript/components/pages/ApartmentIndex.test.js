import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ApartmentIndex from "./ApartmentIndex.js";
import mockApartments from "../mockApartments.js";
import mockCurrentSession from "../mockCurrentSession";

Enzyme.configure({adapter: new Adapter()})

it("ApartmentIndex renders content", () => {
    const ApIndex = shallow(
      <ApartmentIndex
        apartments={mockApartments}
        currentSession={mockCurrentSession[0]}
      />
    );
  expect(ApIndex.length).toEqual(1)
})