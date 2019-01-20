import React, { Component } from 'react'
import '../App.css'
import Map from './map'
import Sidebar from './sidebar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col m4">
            <Sidebar />
          </div>
          <div className="col m8">
            <Map />
          </div>
        </div>
      </div>
    )
  }
}

export default App
