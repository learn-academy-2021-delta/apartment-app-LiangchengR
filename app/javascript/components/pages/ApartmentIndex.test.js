import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import ApartmentIndex from "./ApartmentIndex.js"
import mockApartments from "../mockApartments.js"

Enzyme.configure({adapter: new Adapter()})

it("ApartmentIndex renders content", () => {
    const ApIndex = shallow(<ApartmentIndex apartments={mockApartments} />);
    expect(ApIndex.length).toEqual(1)
})