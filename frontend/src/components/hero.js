import React from "react"
import "./hero.css"

class Hero extends React.Component {
  render() {
    return(
      <div className="hero-section">
        <div className="hero-img-section">
          <div className="hero-img">
            <img src={require("../images/vintage-fashion-1.jpg")} />
          </div>
          <div className="hero-img">
            <img src={require("../images/vintage-fashion-2.jpg")} />
          </div>
          <div className="hero-img">
            <img src={require("../images/vintage-fashion-3.jpg")} />
          </div>
        </div>
        <div className="hero-text-section">
          <p className="hero-text">
            Trouble to find a good Second hand that offers the right things for your expectations?
            <br />
            Then you are at the right place!
            <br />
          </p>
          <p className="hero-text">
            At WhereToVintage can you find Second hand shops with only cloths, stuff or both.
          </p>
        </div>
      </div>
    )
  }
}

export default Hero
