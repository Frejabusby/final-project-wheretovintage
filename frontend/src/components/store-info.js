import React from "react"
import Map from "./map"
import "./store-info.css"

class StoreInfo extends React.Component {

  render() {
    return (
      <div className="store-section">
        <h1>{this.props.id}</h1>
          <h2>{this.props.name}</h2>
      </div>
    )
  }
}

export default StoreInfo
