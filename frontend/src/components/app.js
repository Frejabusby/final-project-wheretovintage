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
              <Route path="/stores" component={StoresList} />
              <Route exact path="/:category" component={Home} />
              <Route path="/:category/:name" component={Home} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
      </HashRouter>
    )
  }

}

export default App
