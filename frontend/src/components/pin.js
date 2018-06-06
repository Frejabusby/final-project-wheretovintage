import React from "react"
import { Link, withRouter } from "react-router-dom"
import "./pin.css"

class Pin extends React.Component {

  renderPinLink = () => {
    if (this.props.pathName === undefined) {
      return `/${this.props.name}`
    } else {
      return `/category/${this.props.category}/${this.props.name}`
    }
  }

  render() {
    return (
      <div>
        <Link to={this.renderPinLink()}>
          <div className="pin" />
        </Link>
      </div>
    )
  }
}

export default withRouter(Pin)
