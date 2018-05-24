import React from "react"
import { NavLink } from "react-router-dom"
import "./categories.css"

class Categories extends React.Component {

  render() {
    return (
      <div className="category-section">
        <p className="category-filter">Filter the stores:</p>
        <NavLink to="/category/cloths-accessories" activeClassName="active">Only cloths & accessories</NavLink>
        <NavLink to="/category/stuff" activeClassName="active">Only stuff</NavLink>
        <NavLink to="/" exact activeClassName="active">All stores</NavLink>
      </div>
    )
  }
}

export default Categories
