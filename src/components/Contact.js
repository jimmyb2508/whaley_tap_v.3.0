import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import emailjs from 'emailjs-com';

require('dotenv').config()

const contact_key=process.env.REACT_APP_EMAIL_ID;

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'whaley_nook', e.target, contact_key)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <section className="form-wrapper">
      <h1 className="header">Contact <span className="highlight">us</span></h1>
      <div className="input-wrapper">
      <Form onSubmit={sendEmail}>
      <FormGroup row>
        <Label className="labels" for="name" sm={2}>Name</Label>
        <Col sm={8}>
          <Input type="text" name="from_name" className="input-field" placeholder="Your Name..." />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="email" sm={2}>Email</Label>
        <Col sm={8}>
          <Input type="email" name="reply_to" className="input-field" placeholder="Your email..." />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="message" sm={2}>Message</Label>
        <Col sm={8}>
          <Input type="textarea" name="message" className="input-field" placeholder="Your Message..." />
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 9, offset: 1 }}>
          <Button>Submit</Button>
        </Col>
      </FormGroup>
     </Form>
      </div>
    </section>
  );
}

export default Contact;