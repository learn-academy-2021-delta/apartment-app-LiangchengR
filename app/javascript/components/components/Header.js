import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default class Header extends Component {
  render() {
    return (
      <Navbar color="dark" dark expand sticky="top" fixed="top" light>
        <NavbarBrand href="/">Sweet Home</NavbarBrand>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Apartments</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">My Apartments</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Sign In/Up</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
