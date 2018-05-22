import React from "react"
import { Link } from "react-router-dom"
import Map from "./map"
import "./store-info.css"

class StoreInfo extends React.Component {

  render() {
    return (
      <div className="store-section">
        <Link to="/"><div className="close"></div></Link>
        <div className="store-info">
          <h2>{this.props.name}</h2>
            <p>{this.props.street}</p>
            <p>{this.props.zipcode}</p>
            <p>{this.props.city}</p>
        </div>
    </div>
    )
  }
}

export default StoreInfo
