import React from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import Ale from '../images/img_8.jpg';
import Siena from '../images/img_11.jpg';
import Plague from '../images/img_12.jpeg';
import Dr from '../images/img_13.jpeg';
import Jaipur from '../images/img_14.jpg';
import Tzara from '../images/img_15.jpg';
import Momp from '../images/img_16.jpeg';
import nook_ipa from '../images/img_17.jpg';

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
            <CardText class="card-text">A New Zealand pale ale, which at 4.1% ABV, makes an excellent session beer.</CardText>
            <CardLink href="https://www.abbeydalebrewery.co.uk/">More Information</CardLink>
          </CardBody>
        </Card>
        <Card className="card-wrapper">
          <CardBody>
            <CardTitle tag="h5">Doctor Morton's</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Mandarin Claw of Death</CardSubtitle>
          </CardBody>
          <img className="guest-image" src={Dr} alt="Card" />
          <CardBody>
            <CardText>Dr Morton's Mandarin Claw of Death 4.1% Trick or treat?! Deliciously fruity pale beer.</CardText>
            <CardLink href="https://www.abbeydalebrewery.co.uk/">More Information</CardLink>
          </CardBody>
        </Card>
        <Card className="card-wrapper">
          <CardBody>
            <CardTitle tag="h5">Siena</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Chapel-en-le-frith Brewing Co.</CardSubtitle>
          </CardBody>
          <img className="guest-image" src={Siena} alt="Card" />
          <CardBody>
            <CardText class="card-text">A hand crafted light ale brewed locally with 4.7% ABV. This local brew makes an excellent session beer.</CardText>
            <CardLink href="https://g.page/chapel-en-le-frith-craft-brewing?share">More Information</CardLink>
          </CardBody>
        </Card>
        <Card className="card-wrapper">
          <CardBody>
            <CardTitle tag="h5">Jaipur</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Thornbridge Brewery</CardSubtitle>
          </CardBody>
          <img className="guest-image" src={Jaipur} alt="Card" />
          <CardBody>
            <CardText>Jaipur's hoppiness builds in the mouth and bursts with powerful citrus fruit flavours with smooth finish, making it a deliciously drinkable IPA.</CardText>
            <CardLink href="https://thornbridgebrewery.co.uk/beer/jaipur/">More Information</CardLink>
          </CardBody>
        </Card>
        <Card className="card-wrapper">
          <CardBody>
            <CardTitle tag="h5">Tzara</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Thornbridge Brewery</CardSubtitle>
          </CardBody>
          <img className="guest-image" src={Tzara} alt="Card" />
          <CardBody>
            <CardText>Tzara is a hybrid beer, fermented like an ale but matured like a lager. A broad, almost fruity palate with some bready notes. Crisp and Refreshing.</CardText>
            <CardLink href="https://thornbridgebrewery.co.uk/beer/tzara/">More Information</CardLink>
          </CardBody>
        </Card>
        <Card className="card-wrapper">
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          </CardBody>
          <img className="guest-image" src={Momp} alt="Card" />
          <CardBody>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
        <Card className="card-wrapper">
          <CardBody>
            <CardTitle tag="h5">Eyam Plague</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Eyam Brewery</CardSubtitle>
          </CardBody>
          <img className="guest-image" src={Plague} alt="Card" />
          <CardBody>
            <CardText>A smooth stout produced of 4.8% ABV, produced by a local Derbyshire brewery located in the historic village of Eyam.</CardText>
            <CardLink href="https://www.facebook.com/eyambrewery/">More Information</CardLink>
          </CardBody>
        </Card>
        <Card className="card-wrapper">
          <CardBody>
            <CardTitle tag="h5">The Nook IPA</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">The Nook Brewhouse</CardSubtitle>
          </CardBody>
          <img className="guest-image" src={nook_ipa} alt="Card" />
          <CardBody>
            <CardText>We brew our IPA with pale British malts and a blend of hops from Europe and New Zealand.</CardText>
            <CardLink href="https://thenookbrewhouse.co.uk/nipa-5-2%abv/">More Information</CardLink>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default Guest;
