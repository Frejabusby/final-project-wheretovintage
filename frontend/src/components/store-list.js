import React from "react"
// import Pagination from "./pagination"
import "./store-list.css"

class StoresList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      storeList: []
    }
  }

  componentDidMount() {
    console.log(this.props)
    // fetch(`https://wheretovintage.herokuapp.com/stores/${this.props.match.params.skip}`).then(response => (
    fetch(`http://localhost:8080/stores/${this.props.match.params.skip}`).then(response => (
      response.json()
    )).then(json => {
      this.setState({ storeList: json })
    })
  }

  render() {
    return (
      <div className="storelist-section">
        {this.state.storeList.map(store => (
          <div className="store-container" key={store.id}>
            <h2>{store.name}</h2>
            <div className="storelist-description">
              <p>{store.description}</p>
            </div>
            <div className="storelist-content-first">
              <div className="storelist-content-adress">
                <h3>Address</h3>
                <p>{store.street}</p>
                <p>{store.zipcode}</p>
                <p>{store.city}</p>
              </div>
              <div className="storelist-openinghours">
                <h3>Openinghours</h3>
                <p>{store.openinghours}</p>
              </div>
            </div>
            <div className="storelist-content-second">
              <div className="storelist-content-phone">
                <h3>Phone number</h3>
                <a href={`tel: require(${store.phoneNumber})`}>{store.phoneNumber}</a>
              </div>
              <div className="storelist-content-site">
                <a href={store.site} target="_blank">Visit their site</a>
              </div>
            </div>
          </div>
        ))}
        {/* <Pagination /> */}
      </div>
    )
  }
}

export default StoresList
