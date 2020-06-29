import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { FaTimes, FaBars } from "react-icons/fa";
import "./styles.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const { pathname } = useLocation();
  return (
    <div>
      <Navbar expand="md fixed-top">
        <a href="/" className="logoImgLink img-fluid"><img className="logoImg" src={require("../../images/logo.svg")} alt="Truman RX Logo"/></a>
        <NavbarToggler onClick={toggle}>{isOpen ? <FaTimes color="#fff" /> : <FaBars color="#fff" />} </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <a href="/testosterone-replacement-therapy" className='navItem'>Why TRT?</a>
              <div className={pathname.includes('testosterone-replacement-therapy') ? 'selectionLine active' : 'selectionLine'} />
            </NavItem>
            <NavItem>
              <a href="/get-checked" className='navItem'>Get Checked</a>
              <div className={pathname.includes('get-checked') ? 'selectionLine active' : 'selectionLine'} />
            </NavItem>
            <NavItem>
              <a href="/price" className='navItem'>Price</a>
              <div className={pathname.includes('price') ? 'selectionLine active' : 'selectionLine'} />
            </NavItem>
            <NavItem>
              <a href="/blog" className='navItem'>Blog</a>
              <div className={pathname.includes('blog') ? 'selectionLine active' : 'selectionLine'} />
            </NavItem>
            <NavItem>
              <a href="/about" className='navItem'>About Us</a>
              <div className={pathname.includes('about') ? 'selectionLine active' : 'selectionLine'} />
            </NavItem>
            <NavItem>
              <a href="/members" className='navItem'>Get Started</a>
              <div className={pathname.includes('contact') ? 'selectionLine active' : 'selectionLine'} />
            </NavItem>
            <div className='horizontalBar'></div>
            <NavItem>
              <a href="#" className='navItem'>Members</a>
              <div className={pathname.includes('members') ? 'selectionLine active' : 'selectionLine'} />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;

