import React from "react"
import { NavLink, withRouter } from "react-router-dom"
import "./pin.css"

class Pin extends React.Component {

  renderPinLink = () => {
    console.log("pin", this.props.category)
    if (this.props.pathName === undefined) {
      return `/${this.props.name}`
    } else {
      return `/category/${this.props.category}/${this.props.name}`
    }
  }

  render() {
    return (
      <div>
        <NavLink to={this.renderPinLink()} activeClassName="active">
          <div className="pin" />
        </NavLink>
      </div>
    )
  }
}

export default withRouter(Pin)
