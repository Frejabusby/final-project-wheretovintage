import React from "react"
import { HashRouter, Route, Switch } from "react-router-dom"
import Menu from "./menu"
import Home from "./home"
import StoresList from "./store-list"

class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <div>
          <Menu />
          <Switch>
            <Route path="/stores/:skip" component={StoresList} />
            <Route exact path="/category/:category" component={Home} />
            <Route exact path="/category/:category/:name" component={Home} />
            <Route exact path="/:name" component={Home} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </HashRouter>
    )
  }

}

export default App
