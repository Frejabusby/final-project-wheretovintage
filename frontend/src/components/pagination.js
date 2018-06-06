import React from "react"
import { NavLink, withRouter } from "react-router-dom"
import "./pagination.css"

class Pagination extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      skip: this.props.match.params.skip,
      page: 1
    }
  }

  componentDidUpdate() {
    if (this.props.match.params.skip === "0" && this.state.skip !== "0") {
      this.updateSkip()
    }
  }

  updateSkip = () => {
    this.props.paginationData()
    window.location.reload()
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="pagination-section">
        <div className="pagination-links">
          <NavLink to="/stores/0" activeClassName="active" onClick={this.updateSkip}>{this.state.page}</NavLink>
          <NavLink to="/stores/5" activeClassName="active" onClick={this.updateSkip}>{this.state.page + 1}</NavLink>
          <NavLink to="/stores/10" activeClassName="active" onClick={this.updateSkip}>{this.state.page + 2}</NavLink>
        </div>
      </div>
    )
  }
}

export default withRouter(Pagination)
