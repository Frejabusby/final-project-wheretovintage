import React from "react"
import { Link } from "react-router-dom"
import "./menu.css"

class Menu extends React.Component {

  render() {
    const skip = 0
    return (
      <div className="menu-section">
        <h1>WhereToVintage</h1>
        <div className="menu-links">
          <Link to="/">Home</Link>
          <Link to={`/stores/0`}>List all stores</Link>
        </div>
      </div>
    )
  }
}

export default Menu
