import React from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import Ale from '../images/img_8.jpg';

import '../styles/Guest.css';

const Guest = () => {
  return (
    <section>
      <h1 className="header"><span className="highlight">Our </span>Guest Ales & Wines</h1>
      <div className="guest-container">
        <Card className="card-wrapper">
          <CardBody>
            <CardTitle tag="h5">Deception</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Abbeydale Brewery</CardSubtitle>
          </CardBody>
          <img className="guest-image" src={Ale} alt="Card" />
          <CardBody>
            <CardText>A New Zealand pale ale, which at 4.1% ABV, makes an excellent session beer.</CardText>
            <CardLink href="https://www.abbeydalebrewery.co.uk/">More Information</CardLink>
          </CardBody>
        </Card>
        <Card className="card-wrapper">
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          </CardBody>
          <img className="guest-image" src={Ale} alt="Card" />
          <CardBody>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
        <Card className="card-wrapper">
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          </CardBody>
          <img className="guest-image" src={Ale} alt="Card" />
          <CardBody>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
        <Card className="card-wrapper">
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          </CardBody>
          <img className="guest-image" src={Ale} alt="Card" />
          <CardBody>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
        <Card className="card-wrapper">
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          </CardBody>
          <img className="guest-image" src={Ale} alt="Card" />
          <CardBody>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
        <Card className="card-wrapper">
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          </CardBody>
          <img className="guest-image" src={Ale} alt="Card" />
          <CardBody>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
        <Card className="card-wrapper">
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          </CardBody>
          <img className="guest-image" src={Ale} alt="Card" />
          <CardBody>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
        <Card className="card-wrapper">
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          </CardBody>
          <img className="guest-image" src={Ale} alt="Card" />
          <CardBody>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default Guest;
