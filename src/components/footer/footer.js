import React, { Component } from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";


export default function Footer(props) {
   return (
      <div className="footer-main-wrapper">
         <div className="columns-wrapper">
            <div className="left-column">
               <div className="about">
                  <p className="title">About Us</p>

                  <p className="about-info">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis
                     non sem elementum tempor in at urna. Suspendisse auctor libero ut nibh
                     consequat sed sagittis dolor iaculis. Donec condimentum mauris nec eros
                     auctor sed vestibulum tellus consequat.
                  </p>
               </div>
            </div>

            <div className="center-column">
               <p>Links</p>

               <div className="links-wrapper">
                  <div className="link">
                     <Link to="/">Home</Link>
                  </div>

                  <div className="link">
                     <Link to="/services">Services</Link>
                  </div>

                  <div className="link">
                     <Link to="/contact">Contact Us</Link>
                  </div>
               </div>
            </div>

            <div className="right-column">
               <p>Social Media</p>

               <div className="social-media">
                  <a href="https://www.facebook.com/MHRenovationsUtah/" target="_blank">
                     <div className="facebook">
                        <FontAwesomeIcon icon={faFacebookF} />
                     </div>
                  </a>

                  <div className="instagram">
                     <FontAwesomeIcon icon={faInstagram} />
                  </div>

                  <div className="google">
                     <FontAwesomeIcon icon={faGoogle} />
                  </div>
               </div>
            </div>
         </div>

         <div className="copyright-wrapper">
            <div className="info">
               <p>&copy; 2020 TD Tramitaciones y Servicios Diaz L.L.C. &#124; All rights reserved</p>
            </div>

            <div className="powered-by">
               <p>Powered by Webmoun Company</p>
            </div>
         </div>
      </div>
   )
}