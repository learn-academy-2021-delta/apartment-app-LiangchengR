import React, { Component } from "react"
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";


export default class Footer extends Component {
    render() {
        return (
          <Navbar color="dark" dark expand sticky="bottom" fixed="bottom" light>
            <Nav className="me-auto" navbar>
              <NavbarText>&copy; 2021 Rebecca Reynolds</NavbarText>
              <NavItem>
                <NavLink href="/about">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/learn">Learn More</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        );
    }
}
