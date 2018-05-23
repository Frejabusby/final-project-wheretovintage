import React from "react"
import { Parallax, Background } from 'react-parallax';
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
    fetch("http://localhost:8080/stores").then(response => (
      response.json()
    )).then(json => {
      this.setState({ storeList: json })
    })
  }

  componentDidUpdate() {
    this.ifStoreShows()
  }

  ifStoreShows = () => {
    if(this.props.match.params.name !== undefined && this.state.showsStoreInfo === false){
      this.setState({
        showsStoreInfo: true
      })
    } else if(this.props.match.params.name === undefined && this.state.showsStoreInfo === true) {
      this.setState({
        showsStoreInfo: false
      })
    }
  }

  renderStoreInfo = (paramInfo) => {
    console.log("renderstoreinfo" + paramInfo)
    return this.state.storeList.filter(store =>  (
          store.name === paramInfo
        )).map(store => (
          <StoreInfo
            lat={store.lat}
            lng={store.long}
            key={store._id}
            name={store.name}
            street={store.street}
            zipcode={store.zipcode}
            city={store.city}
            phoneNumber={store.phoneNumber}
            description={store.description} />
          ))
  }

  render() {
    const paramInfo = this.props.match.params.name

    return(

      <div>
        {/* <Parallax
          blur={{ min: -12, max: 15 }}
          bgImage={require("../images/vintage-fashion.jpg")}
          bgImageAlt="the dog"
          strength={200} > */}
        <Hero />
        {/* </Parallax> */}
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
