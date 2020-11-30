import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import img from '../images/logo.png';

import '../styles/Footer.css';

const FooterPage = () => {
  return (
    <MDBFooter color="black" className="font-small pt-4 mt-0">
      <MDBContainer fluid className="text-center text-md-center">
        <MDBRow className="foot-row">
        <MDBCol className="foot-col" md="4">
          <img className="footer-logo" src={img} alt="logo"></img>
          <div className="add-box"> 
            <i className="fa fa-home mr-3" /><p>20 Old Rd, Whaley Bridge, High Peak, SK23 7HR</p>
            <i className="fa fa-phone mr-3" /><p>0800 123 456</p>
            <i className="fa fa-envelope mr-3" /><p>info@whaleynook.com</p>
          </div>
        </MDBCol>
        <MDBCol className ="foot-col" md="4">
          <div className="open-box">
            <h5 className="title">Opening Hours</h5>
            <p>Monday: 4pm-10.30pm</p>
            <p>Tuesday: 2pm-10.30pm</p>
            <p>Wednesday: 2pm-10.30pm</p>
            <p>Thursday: 2pm-10.30pm</p>
            <p>Friday: 2pm-11pm</p>
            <p>Saturday: 2pm-11pm</p>
            <p>Sunday: 2pm-10.30pm</p>
          </div>
          </MDBCol>
          <MDBCol className ="foot-col-soc" md="4">
            <h5 className="social-title">Social</h5>
            <div className="social-box">
              <i className="fab fa-facebook-f white-text mr-lg-4 fa-3x"></i>
              <i className="fab fa-instagram white-text mr-lg-4 fa-3x"></i>
            </div>
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