import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

require('dotenv').config()

const api_key =process.env.REACT_APP_API_KEY;
console.log(api_key);

const style = {
  position: 'relative',
  width: '100%',
  height: '400px',
}

const containerStyle = {
  position: 'relative',
  width: '100%',
  height: '100%'
}

export class Location extends Component {
  render() {
    return (
      <section className="contact">
        <h1 className="header">WHere to find <span className="highlight">us</span></h1>
        <div className="google-maps-api">
          <Map  
              className="map"
              alt="Google Map with Posh Pods Location"
              google={this.props.google}
              style={style}
              containerStyle={containerStyle}
              initialCenter={{
              lat: 53.328361,
              lng: -1.982811
              }}
              zoom={12}
          >
            <Marker onClick={this.onMarkerClick}
              name={'Current location'} />
            <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
          </Map>
        </div>
      </section>
    )
  }
};


export default GoogleApiWrapper({
  apiKey: (api_key)
})(Location)
