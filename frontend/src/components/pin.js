import React from "react"
import { Link } from "react-router-dom"
import StoreInfo from "./store-info"
import "./pin.css"

class Pin extends React.Component {

  render() {
    return (
      <div>
        <Link to={`/${this.props.name}`} >
          <div className="pin">
          </div>
        </Link>
      </div>
    )
  }
}

export default Pin
