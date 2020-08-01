import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Icons from "../helpers/icons";

import NavigationBar from "./navigation-bar/navigation-bar"
import Home from "./pages/home"
import Auth from "./pages/auth"
import SignUp from "./auth/signup"
import Services from "./pages/services"
import About from "./pages/about"
import Contact from "./pages/contact"
import Footer from "./footer/footer"

export default function App(props) {
  Icons();

  return (
    <div className="container">
      <Router>

        <div>
          <NavigationBar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/auth"
              render={props => (
                <Auth
                  {...props}
                />
              )}
            />
            <Route path="/signup" component={SignUp} />

            <Route path="/services" component={Services} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>

        </div>

        <Footer />

      </Router>
    </div>
  );
}
