import React, { Component } from "react";
import { Link } from "react-router-dom"

import Logo from "../../../static/assets/images/logo/logo-1.png"

export default class NavigationBar extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div className="navbar-main-wrapper">
            <div className="contact-info">
               <p>Llamanos para agendar tu cita (801) 123 4567  o agendala online a traves de nuestro sitio web.</p>
            </div>

            <div className="navbar-info">
               <div className="left-column">
                  <img src={Logo} alt="logo" />
               </div>

               <div className="right-column">
                  <div className="links-wrapper">
                     <div className="link">
                        <Link to="/">Home</Link>
                     </div>

                     <div className="link">
                        <Link to="/services">Services</Link>
                     </div>

                     <div className="link">
                        <Link to="/services">About</Link>
                     </div>

                     <div className="link">
                        <Link to="/services">Contact</Link>
                     </div>
                  </div>

                  <div className="login-signup-wrapper">
                     <p>Login</p>
                     <p>Sign up</p>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}