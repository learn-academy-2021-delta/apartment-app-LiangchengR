import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ApartmentEdit from "./ApartmentEdit.js";
import mockApartments from "../mockApartments.js";
import mockCurrentSession from "../mockCurrentSession";

Enzyme.configure({ adapter: new Adapter() });

it("ApartmentEdit renders content", () => {
  const ApEdit = shallow(
    <ApartmentEdit
      apartment={mockApartments[0]}
      currentSession={mockCurrentSession[0]}
    />
  );
  expect(ApEdit.length).toEqual(1);
  expect(ApEdit.find("Form").length).toEqual(1);
  expect(ApEdit.find("FormGroup").length).toEqual(1);
  expect(ApEdit.find("Label").length).toEqual(9);
  expect(ApEdit.find("Input").length).toEqual(9);
  expect(ApEdit.find("h2").text()).toEqual("Edit Apartment");
});
