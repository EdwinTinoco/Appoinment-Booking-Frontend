import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import NavigationBar from "./navigation-bar/navigation-bar"
import Home from "./pages/home"
import Services from "./pages/services"

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>

          <div>
            <NavigationBar />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/services" component={Services} />
            </Switch>

          </div>

        </Router>
      </div>
    );
  }
}
