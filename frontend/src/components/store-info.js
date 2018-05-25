import React from "react"
import { Link } from "react-router-dom"
import "./store-info.css"

class StoreInfo extends React.Component {

  render() {
    return (
      <div className="store-section">
        <Link to="/" className="close-cross"><div className="close" /></Link>
        <div className="store-info">
          <h2>{this.props.name}</h2>
          <div className="store-address">
            <h3>Address</h3>
            <p>{this.props.street}</p>
            <p>{this.props.zipcode}</p>
            <p>{this.props.city}</p>
          </div>
          <div className="store-description">
            <h3>About</h3>
            <p>{this.props.description}</p>
          </div>
          <div className="store-phonenumber">
            <h3>Phone number</h3>
            <a href={`tel: require(${this.props.phoneNumber})`}>{this.props.phoneNumber}</a>
          </div>
          <div className="store-openinghours">
            <h3>Openinghours</h3>
            <p>{this.props.openinghours}</p>
          </div>
          <a href={this.props.site} target="_blank">Visit their site</a>
        </div>
      </div>
    )
  }
}

export default StoreInfo
