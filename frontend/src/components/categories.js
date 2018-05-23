import React from "react"
import { Link } from "react-router-dom"
import "./categories.css"

class Categories extends React.Component {

  render() {
    return (
      <div className="category-section">
        {/* <button onClick={this.changeCategory}>Cloths</button>
        <button onClick={this.changeCategory}>Stuff</button> */}
        <Link to="/cloths">Only cloths</Link>
        <Link to="/stuff">Only stuff</Link>
        <Link to="/">All stores</Link>
      </div>
    )
  }
}

export default Categories
