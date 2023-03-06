import React from "react";

import {  Navbar, NavbarBrand, NavItem, NavLink, Nav } from 'reactstrap';
import myImage from '../images/mylogo1.png'

function MyNavbar() {
  return (
    <>
    
      <Navbar className="navbar">
        <NavbarBrand href="/">
          <img
            alt="logo"
            src={myImage}
            style={{
              height: 90,
              width: 90,
            }}
          />
        </NavbarBrand>
        <Nav className="nav"
        >
          <NavItem>
            <NavLink
              active
              href="#"
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              Contact Us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
            
              href="#"
            >
              About Us
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>

    </>
  );
}

export default MyNavbar;
