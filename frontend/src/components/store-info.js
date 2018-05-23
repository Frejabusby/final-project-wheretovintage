import React from "react"
import { Link } from "react-router-dom"
import Map from "./map"
import "./store-info.css"

class StoreInfo extends React.Component {

  render() {
    return (
      <div className="store-section">
        <Link to="/all"><div className="close"></div></Link>
        <div className="store-info">
          <h2>{this.props.name}</h2>
          <div className="store-address">
            <h3>Find us:</h3>
            <p>{this.props.street}</p>
            <p>{this.props.zipcode}</p>
            <p>{this.props.city}</p>
          </div>
          <h3>Call us:</h3>
          <a href={`tel: require(${this.props.phoneNumber})`}>{this.props.phoneNumber}</a>
          <div className="store-description">
            <h3>Description</h3>
            <p>{this.props.description}</p>
          </div>
        </div>
    </div>
    )
  }
}

export default StoreInfo
