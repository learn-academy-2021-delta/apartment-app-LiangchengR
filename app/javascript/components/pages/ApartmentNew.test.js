import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ApartmentNew from "./ApartmentNew.js";
import mockCurrentSession from "../mockCurrentSession";

Enzyme.configure({ adapter: new Adapter() });

it("ApartmentNew renders content", () => {
    const ApNew = shallow(<ApartmentNew currentSession={mockCurrentSession[0]} />);
    expect(ApNew.length).toEqual(1);
    expect(ApNew.find("Form").length).toEqual(1);
    expect(ApNew.find("FormGroup").length).toEqual(1);
    expect(ApNew.find("Label").length).toEqual(9);
    expect(ApNew.find("Input").length).toEqual(9);
    expect(ApNew.find("h2").text()).toEqual("New Apartment");

});
