import React from "react"
import { Link } from "react-router-dom"
import "./menu.css"

class Menu extends React.Component {

  render() {
    return (
      <div className="menu-section">
        <Link to="/">Home</Link>
        <Link to="/stores">List all stores</Link>
      </div>
    )
  }
}

export default Menu
