import React, { Component } from "react";

import Profile1 from "../../../static/assets/images/images/profile-1.jpg"
import Profile2 from "../../../static/assets/images/images/profile-2.jpg"

export default class About extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div className="about-main-wrapper">
            <div className="title">
               <h1>About Us</h1>
            </div>

            <div className="about-info">
               <h1>Established 2020</h1>
               <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id eius
                  possimus dolorem architecto libero repellendus nulla quas veniam
                  illum sint.
               </p>

               <div className="description">
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                     consequatur corporis, nihil a velit ratione?
                  </p>
               </div>

               <div id="line"></div>

               <div className="about-profile">
                  <div className="avatar-image">
                     <img src={Profile1} />
                  </div>

                  <div className="description">
                     <h2>Hector Barrera</h2>
                     <h3>Titles goes here</h3>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                        esse repellat necessitatibus sunt! Ea optio odio enim expedita
                        explicabo aliquam quae officia fugit voluptatum. Nemo pariatur
                        et dignissimos, ea modi rerum dolore, blanditiis nihil provident
                        dolor beatae obcaecati eos, animi quas explicabo! Quasi incidunt
                        laborum aliquid dignissimos, earum quos ab.
                     </p>
                  </div>
               </div>

               <div id="line"></div>

               <div className="about-profile">
                  <div className="avatar-image">
                     <img src={Profile2} />
                  </div>
                  <div className="aboutDescription">
                     <h2>Maximiliano Sorto</h2>
                     <h3>Titles goes here</h3>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                        esse repellat necessitatibus sunt! Ea optio odio enim expedita
                        explicabo aliquam quae officia fugit voluptatum. Nemo pariatur
                        et dignissimos, ea modi rerum dolore, blanditiis nihil provident
                        dolor beatae obcaecati eos, animi quas explicabo! Quasi incidunt
                        laborum aliquid dignissimos, earum quos ab.
              </p>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}