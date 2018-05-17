import React from "react"
import { HashRouter, Route } from "react-router-dom"
import Menu from "./menu"
import Hero from "./hero"
import StoresList from "./store-list"
import StoreInfo from "./store-info"
import Map from "./map"

class App extends React.Component {

  render() {
    return (
        <HashRouter>
          <div>
            <Menu />
            <Hero />
            <Route path="/" component={Map} />
            <Route exact path="/stores" component={StoresList} />
            <Route path="/stores/:id" component={StoreInfo} />
          </div>
      </HashRouter>
    )
  }

}

export default App
