import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from "./Home.js";
import backgroundImg from "../assets/app-bg.png";

Enzyme.configure({ adapter: new Adapter() });

it("Home renders content", () => {
    const home = shallow(<Home />);
    const bg = backgroundImg;
    expect(home.length).toEqual(1);
  expect(home.find("img").length).toEqual(1);
  expect(home.find("h2").length).toEqual(1);
});
