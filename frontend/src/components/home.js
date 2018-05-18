import React from "react"
import Hero from "./hero"
import Map from "./map"
import StoreInfo from "./store-info"
import "./home.css"

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      storeList: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/stores").then(response => (
      response.json()
    )).then(json => {
      this.setState({ storeList: json })
    })
  }

  renderStoreInfo = (paramInfo) => {
    console.log("renderstoreinfo" + paramInfo)
    return this.state.storeList.filter(store =>  (
          store.id === paramInfo
        )).map(store => (
          <StoreInfo
            lat={store.lat}
            lng={store.long}
            key={store._id}
            id={store.id}
            name={store.name} />
          ))
  }

  render() {

    const paramInfo = this.props.match.params.name

    return(

      <div>
        <Hero />
        <div className="map-section">
        {paramInfo && this.renderStoreInfo(paramInfo)}
        <Map />
      </div>
      </div>
    )
  }
}

export default Home
