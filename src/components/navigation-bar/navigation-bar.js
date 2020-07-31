import React, { Component } from "react";
import { Link } from "react-router-dom"

export default class NavigationBar extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div className="navbar-main-wrapper">
            <div className="left-column">
               logo
            </div>

            <div className="center-column">
               <div className="links-wrapper">
                  <div className="link">
                     <Link to="/">Home</Link>
                  </div>

                  <div className="link">
                     <Link to="/services">Services</Link>
                  </div>
               </div>
            </div>

            <div className="right-column">
               login
            </div>
         </div>
      )
   }
}