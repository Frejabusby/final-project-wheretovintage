import React from "react"
import { Link } from "react-router-dom"
import StoreInfo from "./store-info"
import "./pin.css"

class Pin extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     pinInfoVisible: false
  //   }
  // }
  //
  // handlePinClick = () => {
  //   this.setState({ pinInfoVisible: !this.state.pinInfoVisible })
  // }

  render() {
    return (
      <div>
        {/* <div>
        {/* {this.state.pinInfoVisible ? <StoreInfo name={this.props.name} /> : null} */}
      {/* </div> */}
      <div onClick={this.handlePinClick}>
        <Link to={`/${this.props.id}/${this.props.name}`} >
          <div className="pin">
          </div>
        </Link>
      </div>
    </div>
    )
  }
}

export default Pin
