import React from "react"
import "./hero.css"

class Hero extends React.Component {
  render() {
    return(
      <div className="hero-section">
        <h1>WhereToVintage</h1>
        <p className="hero-text">
          Trouble to find a good Second hand that offers the right things for your expectations? <br />
          Then you are at the right place! <br />
        </p>
        <p className="hero-text">
          At WhereToVintage can you find Second hand shop with only cloths, stuff or both.
        </p>
      </div>
    )
  }
}

export default Hero
