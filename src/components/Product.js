import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import img_1 from '../images/img_1.jpg';
import img_2 from '../images/img_2.jpg';
import img_3 from '../images/img_3.jpg';

import '../styles/Product.css';

const Product = (props) => {
  return (
    <div className="product">
      <h1 className="header">What<span className="highlight"> We </span>Do</h1>
        <div className="product-container">
        <Card className="product-card">
          <CardImg className="card-img" top width="100%" src={img_3} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Tap Room</CardTitle>
            <CardText>A unique pair of rooms with local art on the wall, furnished comfortably. A great social space to make new friends.</CardText>
          </CardBody>
        </Card>
        <Card className="product-card">
        <CardImg className="card-img" top width="100%" src={img_2} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Local Ales</CardTitle>
            <CardText>Locally sourced ales and beers that are unique to the local Derbyshire towns and villages.</CardText>
          </CardBody>
        </Card>
        <Card className="product-card">
        <CardImg className="card-img" top width="100%" src={img_1} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Gin Palace</CardTitle>
            <CardText>Specially sourced liquors & spirits that mean there is always something new to try.</CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Product;