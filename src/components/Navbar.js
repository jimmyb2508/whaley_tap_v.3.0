import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import Logo from '../images/logo_b&w.png';

import '../styles/Navbar.css';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollToProduct = () => {
    scroll.scrollTo(1450);
  };

  const scrollToAbout = () => {
    scroll.scrollTo(2250);
  };

  const scrollToGuest = () => {
    scroll.scrollTo(3000);
  };
  
  const scrollToContact = () => {
    scroll.scrollTo(6400);
  };

  const scrollToLocation = () => {
    scroll.scrollTo(7050);
  };


  return (
      <Navbar color="light" light expand="md" className="navbar" sticky="top">
        <NavbarBrand><img src={Logo} className="logo" alt="logo" onClick={scrollToTop}></img></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="nav-item">
              <Router>      
                <NavLink onClick={scrollToProduct}>The Nook</NavLink>
              </Router>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink onClick={scrollToAbout}>About</NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink onClick={scrollToGuest}>Ales & Spirits</NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink onClick={scrollToContact}>Contact</NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink onClick={scrollToLocation}>Location</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  );
}

export default NavBar;