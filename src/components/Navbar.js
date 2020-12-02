import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
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

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
      <Navbar color="light" light expand="md" className="navbar" sticky="top">
        <NavbarBrand><img src={Logo} className="logo" alt="logo" onClick={scrollToTop}></img></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="nav-item">
              <Router>    
                <NavLink>
                <Link
                  activeClass="active"
                  to="section1"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >Experience</Link>
                </NavLink>
              </Router>
            </NavItem>
            <NavItem className="nav-item">
            <NavItem>
              <NavLink>
                <Link
                  activeClass="active"
                  to="section2"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >About</Link>
                </NavLink>
              </NavItem>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink>
                <Link
                  activeClass="active"
                  to="section3"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >Ales & Sprits
              </Link>
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink>
                <Link
                  activeClass="active"
                  to="section6"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >Contact
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink>
                <Link
                  activeClass="active"
                  to="section6"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >Location
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  );
}

export default NavBar;