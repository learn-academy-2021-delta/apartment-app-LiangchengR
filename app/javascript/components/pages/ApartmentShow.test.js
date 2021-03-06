import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ApartmentShow from "./ApartmentShow.js";
import mockApartments from "../mockApartments.js";
import mockCurrentSession from "../mockCurrentSession";

Enzyme.configure({ adapter: new Adapter() });

it("ApartmentShow renders content", () => {
  const ApShow = shallow(
    <ApartmentShow
      apartment={mockApartments[0]}
      currentSession={mockCurrentSession[0]}
    />
  );
  expect(ApShow.length).toEqual(1);
  expect(ApShow.find("Card").length).toEqual(1);
  expect(ApShow.find("CardBody").length).toEqual(2);
  expect(ApShow.find("CardTitle").length).toEqual(1);
  expect(ApShow.find("FontAwesomeIcon").length).toEqual(2);
  expect(ApShow.find("CardSubtitle").length).toEqual(1);
  expect(ApShow.find("CardText").length).toEqual(1);
  expect(ApShow.find("NavLink").length).toEqual(3);
  expect(ApShow.find("Button").length).toEqual(1);
});
