import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import img from '../images/logo.png';

import '../styles/Footer.css';

const FooterPage = () => {
  return (
    <MDBFooter color="black" className="font-small pt-4 mt-0">
      <MDBContainer fluid className="text-center text-md-center">
        <MDBRow>
        <MDBCol md="4">
            <ul className="address">
            <img className="footer-logo" src={img} alt="logo"></img>
              <li className="add-list">
                <i className="fa fa-home mr-3" /><p>20 Old Rd, Whaley Bridge, High Peak, SK23 7HR</p>
              </li>
              <li className="add-list">
                <i className="fa fa-phone mr-3" /><p>0800 123 456</p>
              </li>
              <li className="add-list">
              <i className="fa fa-envelope mr-3" /><p>info@whaleynook.com</p>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="4">
            <ul className="hours">
            <h5 className="title">Opening Hours</h5>
              <li className="list-unstyled">
                <p>Monday: 4pm-10.30pm</p>
              </li>
              <li className="list-unstyled">
                <p>Tuesday: 2pm-10.30pm</p>
              </li>
              <li className="list-unstyled">
                <p>Wednesday: 2pm-10.30pm</p>
              </li>
              <li className="list-unstyled">
                <p>Thursday: 2pm-10.30pm</p>
              </li>
              <li className="list-unstyled">
                <p>Friday: 2pm-11pm</p>
              </li>
              <li className="list-unstyled">
                <p>Saturday: 2pm-11pm</p>
              </li>
              <li className="list-unstyled">
                <p>Sunday: 2pm-10.30pm</p>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="4">
          <h5 className="social-title">Social</h5>
            <ul className="social">
              <li className="social-list">
                <i className="fab fa-facebook-f white-text mr-lg-4 fa-3x"></i>
              </li>
              <li className="social-list">
                <i className="fab fa-twitter white-text mr-lg-4 fa-3x"></i>
              </li>
              <li className="social-list">
                <i className="fab fa-instagram white-text mr-lg-4 fa-3x"> </i>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://jbsoftware.dev"> jbsoftware.dev </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;