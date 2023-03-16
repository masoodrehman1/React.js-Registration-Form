import React from "react";
import {  NavLink } from "react-router-dom";

import {  Navbar, NavbarBrand, NavItem,  Nav } from 'reactstrap';
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
            
             <NavLink to="/">Home</NavLink>
            
          </NavItem>
          <NavItem>
            
           <NavLink to="/inputmydata">My cards</NavLink>  
            
          </NavItem>
         
        </Nav>
      </Navbar>

    </>
  );
}

export default MyNavbar;
