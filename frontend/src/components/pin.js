import React from "react"
import { Link } from "react-router-dom"
import StoreInfo from "./store-info"
import "./pin.css"

class Pin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pinInfoVisible: false
    }
  }

  handlePinClick = event => {
    this.setState({ pinInfoVisible: !this.state.pinInfoVisible })
  }

  render() {


    console.log(this.props)
    return (
      <div>
      <Link to={`/stores/${this.props.id}`} >
      <div className="pin">
      </div>
      </Link>
      {this.state.pinInfoVisible ? <StoreInfo key={this.props.id} /> : null}
    </div>
    )
  }
}

export default Pin
