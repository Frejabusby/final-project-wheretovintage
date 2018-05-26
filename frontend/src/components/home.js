import React from "react"
import Hero from "./hero"
import Map from "./map"
import StoreInfo from "./store-info"
import Categories from "./categories"
import "./home.css"

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      storeList: [],
      showsStoreInfo: false
    }
  }

  componentDidMount() {
    fetch("https://wheretovintage.herokuapp.com/store").then(response => (
      response.json()
    )).then(json => {
      this.setState({ storeList: json })
    })
  }

  componentDidUpdate() {
    this.ifStoreShows()
  }

  ifStoreShows = () => {
    if (this.props.match.params.name !== undefined && this.state.showsStoreInfo === false) {
      this.setState({
        showsStoreInfo: true
      })
    } else if (this.props.match.params.name === undefined && this.state.showsStoreInfo === true) {
      this.setState({
        showsStoreInfo: false
      })
    }
  }

  renderStoreInfo = paramInfo => (
    this.state.storeList.filter(store => (
      store.name === paramInfo
    )).map(store => (
      <StoreInfo
        lat={store.lat}
        lng={store.long}
        key={store.id}
        name={store.name}
        street={store.street}
        zipcode={store.zipcode}
        city={store.city}
        phoneNumber={store.phoneNumber}
        description={store.description}
        site={store.site}
        openinghours={store.openinghours} />
    ))
  )

  render() {
    const paramInfo = this.props.match.params.name
    return (
      <div>
        <Hero />
        <Categories />
        <div className="map-container">
          {paramInfo && this.renderStoreInfo(paramInfo)}
          <Map
            paramCategory={this.props.match.params.category}
            ifStoreShows={this.state.showsStoreInfo} />
        </div>
      </div>
    )
  }
}

export default Home
