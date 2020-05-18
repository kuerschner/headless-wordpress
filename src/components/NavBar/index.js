import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { FaTimes, FaBars } from "react-icons/fa";

import "./styles.css";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar" expand="md">
        <a href="/" className="logoImgLink"><img className="logoImg" src={require("../../images/logo.svg")} alt="Truman RX Logo" /></a>
        <NavbarToggler onClick={toggle}>{isOpen ? <FaTimes color="#fff" /> : <FaBars color="#fff" />} </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <a href="/testosterone-replacement-therapy" className="navItem">Why TRT?</a>
            </NavItem>
            <NavItem>
              <a href="/get-checked" className="navItem">Get Checked</a>
            </NavItem>
            <NavItem>
              <a href="/price" className="navItem">Price</a>
            </NavItem>
            <NavItem>
              <a href="/blog" className="navItem">Blog</a>
            </NavItem>
            <NavItem>
              <a href="/about" className="navItem">About Us</a>
            </NavItem>
            <NavItem>
              <a href="/contact" className="navItem">Contact</a>
            </NavItem>
            <NavItem>
              <a href="#" className="navItem">Members</a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;

