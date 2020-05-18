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

import Link from "next/link";
import "./NavBar.module.css";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar" expand="md">
        <Link href="/"><a className="logoImgLink"><img className="logoImg" src={require("../../images/logo.svg")} alt="Truman RX Logo" /></a></Link>
        <NavbarToggler onClick={toggle}>{isOpen ? <FaTimes color="#fff" /> : <FaBars color="#fff" />} </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link href="/why-trt"><a className="navItem">Why TRT?</a></Link>
            </NavItem>
            <NavItem>
              <Link href="/get-checked"><a className="navItem">Get Checked</a></Link>
            </NavItem>
            <NavItem>
              <Link href="/price"><a className="navItem">Price</a></Link>
            </NavItem>
            <NavItem>
              <Link href="/blog"><a className="navItem">Blog</a></Link>
            </NavItem>
            <NavItem>
              <Link href="/about"><a className="navItem">About Us</a></Link>
            </NavItem>
            <NavItem>
              <Link href="/contact"><a className="navItem">Contact</a></Link>
            </NavItem>
            <NavItem>
              <Link href="#"><a className="navItem">Members</a></Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;

