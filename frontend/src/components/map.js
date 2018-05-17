import React from "react"
import GoogleMapReact from 'google-map-react'
import Pin from "./pin"
import apiKey from "./apikey"

class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      storeList: []
    }
  }

  static defaultProps = {
    center: {
      lat: 59.334591,
      lng: 18.063240
    },
    zoom: 13
  }

  componentDidMount() {
    fetch("http://localhost:8080/stores").then(response => (
      response.json()
    )).then(json => {
      this.setState({ storeList: json })
    })
  }

  render() {
  // console.log(apiKey.apikey)
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey.apikey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom} >
          {this.state.storeList.map(store => (
            <Pin lat={store.lat} lng={store.long} key={store._id} id={store.id} />
          ))}
        </GoogleMapReact>
      </div>
    )
  }
}

export default Map
