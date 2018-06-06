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
    // if you'r on another page than 1 in pagination, reload when menu-link is clicked
    if (this.props.match.params.skip === "5" && this.state.skip !== "5") {
      this.updateStoreList()
    }
  }

  updateStoreList = () => {
    this.props.paginationData()
    window.location.reload()
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="pagination-section">
        <div className="pagination-links">
          <NavLink to="/stores/5" activeClassName="active" onClick={this.updateStoreList}>{this.state.page}</NavLink>
          <NavLink to="/stores/10" activeClassName="active" onClick={this.updateStoreList}>{this.state.page + 1}</NavLink>
          <NavLink to="/stores/15" activeClassName="active" onClick={this.updateStoreList}>{this.state.page + 2}</NavLink>
        </div>
      </div>
    )
  }
}

export default withRouter(Pagination)
