import React from "react"
import { NavLink } from "react-router-dom"
import StoreInfo from "./store-info"
import "./pin.css"

class Pin extends React.Component {

  render() {
    return (
      <div>
        <NavLink to={`/${this.props.category}/${this.props.name}`} activeClassName="active">
        <div className="pin">
          {/* <img src={require("../images/pin.png")} /> */}
        </div>
      </NavLink>
      </div>
    )
  }
}

export default Pin
