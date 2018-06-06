import React from "react"
import GoogleMapReact from "google-map-react"
import { withRouter } from "react-router-dom"
import Pin from "./pin"
import apiKey from "./apikey"
import "./map.css"

class Map extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      storeList: []
    }
  }

  static defaultProps = {
    center: {
      lat: 59.323688,
      lng: 18.066630
    },
    zoom: 13
  }

  componentDidMount() {
    // fetch("https://wheretovintage.herokuapp.com/store").then(response => (
    fetch("http://localhost:8080/store").then(response => (
      response.json()
    )).then(json => {
      this.setState({ storeList: json })
    })
  }

  renderPin = () => {
    // Filter categories
    let storeList = this.state.storeList
    if (this.props.match.params.category !== undefined) {
      storeList = storeList.filter(store => (
        store.category === this.props.match.params.category
      ))
    }
    return storeList.map(store => (
      <Pin
        lat={store.lat}
        lng={store.long}
        key={store.id}
        name={store.name}
        category={store.category}
        pathCategory={this.props.match.params.category} />
    ))
  }

  render() {
    return (
      // Transform depending on if a store is shown or not
      <div id="map" className={this.props.ifStoreShows ? "shows-store-info map-section " : "map-section"}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey.apikey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom} >
          {this.renderPin()}
        </GoogleMapReact>
      </div>
    )
  }
}

export default withRouter(Map)
