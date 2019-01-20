import React, {Component} from 'react'
import {Map, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
        <Map 
            className="map"
            google={this.props.google}
            zoom={14}>
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDK0-sFxTBQlrFoLZfYvcxbjqe7zc0V9_M')
})(MapContainer)
