import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img_3 from '../images/img_3.jpg';

class Intro extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img className="carousel-img" src={img_3} alt="img_1" />
                    <p className="legend">Tap Room</p>
                </div>
                <div>
                    <img className="carousel-img" src={img_3} alt="img_2"/>
                    <p className="legend">Local Ales & Beers</p>
                </div>
                <div>
                    <img className="carousel-img" src={img_3} alt="img_3"/>
                    <p className="legend">Gin Palace</p>
                </div>
            </Carousel>
        );
    }
};

export default Intro;