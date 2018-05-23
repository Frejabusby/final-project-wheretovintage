import React from "react"
import { NavLink } from "react-router-dom"
import "./categories.css"

class Categories extends React.Component {

  render() {
    return (
      <div className="category-section">
        {/* <button onClick={this.changeCategory}>Cloths</button>
        <button onClick={this.changeCategory}>Stuff</button> */}
        <p className="category-filter">Filter the stores:</p>
        <NavLink to="/cloths" activeClassName="active">Only cloths</NavLink>
        <NavLink to="/stuff" activeClassName="active">Only stuff</NavLink>
        <NavLink to="/" exact activeClassName="active">All stores</NavLink>
      </div>
    )
  }
}

export default Categories
