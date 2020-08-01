import React, { Component } from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Home extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div className="home-main-wrapper">
            <div className="title-info-img">
               <div className="title">
                  <p>Tramitaciones y Servicios Diaz</p>
               </div>

               <div className="info">
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis
                     non sem elementum tempor in at urna. Suspendisse auctor libero ut nibh
                     consequat sed sagittis dolor iaculis. Donec condimentum mauris nec eros
                     auctor sed vestibulum tellus consequat.
                  </p>
               </div>

               <Link to="/auth">
                  <div className="button">
                     <p>Agenda tu cita online</p>
                  </div>
               </Link>
            </div>

            <div className="featured-section">
               <div className="columns-wrapper">
                  <div className="column">
                     <FontAwesomeIcon className="icon" icon="globe-americas" />
                     <p className="title">Servicio</p>

                     <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                  </div>

                  <div className="column">
                     <FontAwesomeIcon className="icon" icon="globe-americas" />
                     <p className="title">Calidad</p>

                     <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                  </div>

                  <div className="column">
                     <FontAwesomeIcon className="icon" icon="globe-americas" />
                     <p className="title">Buen trato</p>

                     <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                  </div>
               </div>

            </div>

            <div className="services-link">
               <Link to="/services">
                  <div className="button">
                     <div className="icon">
                        <FontAwesomeIcon icon="calculator" />
                     </div>
                  Que tramite o servicio necesitas?
               </div>
               </Link>
            </div>
         </div>
      )
   }
}