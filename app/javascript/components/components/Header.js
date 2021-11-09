import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import logo from "../assets/logo.png"

export default class Header extends Component {
  render() {
    // console.log("logged in:", this.props.logged_in);
    // console.log("current user:", this.props.current_user);
    // console.log("sign up", this.props.new_user_route);
    // console.log("sign in:", this.props.sign_in_route);
    // console.log("sign out:", this.props.sign_out_route);

    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;

    return (
      <header>
        <Navbar
          className="header-nav"
          color="dark"
          dark
          expand
          sticky="top"
          fixed="top"
          light
        >
          <NavbarBrand href="/">
            <img
              src={logo}
              alt="logo with house leaves and Flat Finder"
              className="logo"
            />
          </NavbarBrand>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/apartmentindex">Apartments</NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            {!logged_in && (
              <>
                <div className="header-login">
                  <NavItem>
                    <a href={new_user_route}>Sign Up</a>
                  </NavItem>
                </div>
                <div className="header-login">
                  <NavItem>
                    <a href={sign_in_route}>Sign In</a>
                  </NavItem>
                </div>
              </>
            )}
            {logged_in && (
              <NavItem>
                <a href={sign_out_route}>Sign Out</a>
              </NavItem>
            )}
          </Nav>
        </Navbar>

        {/* devise is in rails and will not work with NavLink */}
        {/* a tags work externally and take you out of JavaScript */}
      </header>
    );
  }
}
