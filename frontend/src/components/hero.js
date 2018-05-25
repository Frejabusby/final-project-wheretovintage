import React from "react"
import "./hero.css"

class Hero extends React.Component {
  render() {
    return (
      <div className="hero-section">
        <div className="hero-img-section">
          <div className="hero-img">
            <img src={require("../images/vintage-fashion-1.jpg")} alt="girl in vintage clothes" />
          </div>
          <div className="hero-img">
            <img src={require("../images/vintage-fashion-2.jpg")} alt="girl in vintage clothes" />
          </div>
          <div className="hero-img">
            <img src={require("../images/vintage-fashion-3.jpg")} alt="girl in vintage clothes" />
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
            At WhereToVintage can you find stores with only clothes, stuff or both. Welcome!
          </p>
        </div>
      </div>
    )
  }
}

export default Hero
