import React from "react"
import { Link } from "react-router-dom"
import "./menu.css"

class Pagination extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      skip: 0,
      page: 1
    }
  }

  updateSkip = () => {
    const newSkip = this.state.skip + 5
    this.setState({
      skip: newSkip
    })
    // window.location.reload()
  }

  render() {
    console.log(this.state.skip)
    return (
      <div className="menu-section">
        <div className="menu-links">
          <Link to={`/stores/${this.state.skip}`} onClick={this.updateSkip}>{this.state.page}</Link>
          <Link to={`/stores/${this.state.skip}`}>{this.state.page + 1}</Link>
          <Link to={`/stores/${this.state.skip}`}>{this.state.page + 2} </Link>
        </div>
      </div>
    )
  }
}

export default Pagination
