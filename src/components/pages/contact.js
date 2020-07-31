import React, { Component } from "react";

import Image3 from "../../../static/assets/images/images/image-3.jpg"

export default class Contact extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div className="contact-main-wrapper">
            <div className="title">
               <h1>Contact Us</h1>
            </div>

            <div className="image-info">
               <div className="image"
                  style={{
                     background: "url(" + Image3 + ") no-repeat",
                     backgroundSize: "cover",
                     backgroundPosition: "center"
                  }}
               />

               <div className="info">
                  <p>Nuestas recepcionistas estan para responder cualquier pregunta o dudas que tengas.</p>
                  <p>Llamanos para agendar tu cita!!</p>
                  <p>(801) 123 4567</p>
                  <p>Horarios de oficina</p>
                  <p>Lunes a viernes</p>
                  <p>9am a 6pm</p>
               </div>
            </div>
         </div>
      )
   }
}