import React, {Component} from 'react'
import {Map, GoogleApiWrapper, Marker, Circle} from 'google-maps-react'
import {apiKey} from '../../apikey'

export class MapContainer extends Component {
  constructor() {
    super()
    this.state = {
      lat: "",
      lon: "",
    }
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(location => {
      console.log(location)
      this.setState({
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      })   
    })
  }

  // areaCirle(coords) {
  //   return (
  //     <Circle
  //         radius={1200}
  //         center={coords}
  //         onMouseover={() => console.log('mouseover')}
  //         onClick={() => console.log('click')}
  //         onMouseout={() => console.log('mouseout')}
  //         strokeColor='transparent'
  //         strokeOpacity={0}
  //         strokeWeight={5}
  //         fillColor='#FF0000'
  //         fillOpacity={0.2}
  //      />
  //   )
  // }
  render() {
    const coords = { lat: this.state.lat, lng: this.state.lon }
    return (
        <Map 
            className="map"
            google={this.props.google}
            zoom={14}
            center={coords}  
        >
          <Marker position={{lat: this.state.lat, lng: this.state.lon}} />
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (apiKey)
})(MapContainer)
