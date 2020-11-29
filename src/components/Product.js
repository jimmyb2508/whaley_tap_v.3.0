import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import img_1 from '../images/img_6.jpg';

import '../styles/Product.css';

const Product = (props) => {
  return (
    <div className="product">
      <h1 className="header">What<span className="highlight"> We </span>Do</h1>
        <div className="product-container">
        <Card className="product-card">
          <CardImg top width="100%" src={img_1} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Card Title</CardTitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
        <Card className="product-card">
        <CardImg top width="100%" src={img_1} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Card Title</CardTitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
        <Card className="product-card">
        <CardImg top width="100%" src={img_1} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Card Title</CardTitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <CardText>
             <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Product;