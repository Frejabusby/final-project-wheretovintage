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
    fetch("http://localhost:8080/store").then(response => (
      response.json()
    )).then(json => {
      this.setState({ storeList: json })
    })
  }

  renderPin = () => {
    let storeList = this.state.storeList
    if (this.props.paramCategory !== undefined) {
      storeList = storeList.filter(store => (
        store.category === this.props.paramCategory
      ))
    }
    return storeList.map(store => (
      <Pin
        lat={store.lat}
        lng={store.long}
        key={store._id}
        id={store.id}
        name={store.name}
        category={store.category}
        pathName={this.props.match.params.category} />
    ))
  }

  render() {
    return (
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
