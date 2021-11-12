import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AboutUs from "./AboutUs.js";

Enzyme.configure({ adapter: new Adapter() });

it("AboutUs renders content", () => {
  const aboutUs = shallow(
    <AboutUs
    />
  );
    expect(aboutUs.length).toEqual(1);
    expect(aboutUs.find("h3").length).toEqual(1);
});
