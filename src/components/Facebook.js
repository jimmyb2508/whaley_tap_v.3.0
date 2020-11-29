import React, { Component} from 'react';
import { FacebookProvider, Page } from 'react-facebook';

import '../styles/Facebook.css';

require('dotenv').config();

const fb_key=process.env.REACT_APP_FB_ID;

export default class Example extends Component {
  render() {
    return (
      <section className="fb-wrapper">
        <h1 className="header">Follow<span className="highlight"> Us </span>On Facebook</h1>
          <FacebookProvider className="fb-widget" appId={fb_key}>
            <Page href="https://www.facebook.com/The-Whaley-Nook-Tap-Rooms-850671731963064" tabs="timeline" />
          </FacebookProvider>    
      </section>
    );
  }
}