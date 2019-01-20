import React, {Component} from 'react'
import {Map, GoogleApiWrapper} from 'google-maps-react'
import {apiKey} from '../../apikey'

export class MapContainer extends Component {
  constructor() {
    super()
    this.state = {
      lat: "",
      lon: ""
    }
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(location => {
      // this.setState({
      //   lat: location.coords.latitude,
      //   lon: location.coords.longitude
      // })   
    })
  }
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
  apiKey: (apiKey)
})(MapContainer)
