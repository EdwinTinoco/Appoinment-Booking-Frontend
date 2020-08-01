import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import Image1 from "../../../static/assets/images/images/image-1.jpg"
import Image2 from "../../../static/assets/images/images/image-2.jpg"
import Image3 from "../../../static/assets/images/images/image-3.jpg"
import Image4 from "../../../static/assets/images/images/image-4.jpg"


export default function Services() {
   return (
      <div className="services-main-wrapper">
         <div className="title-img">
            <div className="title">
               <h1>Servicios</h1>
            </div>
         </div>

         <div className="services-info">
            <div className="title">
               <h2>Nuestros Servicios</h2>
            </div>
            <div className="description">
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis
               non sem elementum tempor in at urna. Suspendisse auctor libero ut nibh
               consequat sed sagittis dolor iaculis. Donec condimentum mauris nec eros
               auctor sed vestibulum tellus consequat. Pellentesque tincidunt hendrerit
               neque, tincidunt tempus mauris consequat non. Nullam interdum, enim sed
               ultrices sagittis, nibh tortor viverra lacus, eu tristique risus sapien
               et eros. Cras gravida, felis sed sagittis convallis, nulla ante vehicula
               justo, id imperdiet enim nisi id mauris. Nunc egestas volutpat congue.
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula
               purus eu enim vulputate rhoncus</p>
            </div>
         </div>

         <div className="squares-wrapper">
            <div className="squares">
               <div className="square">
                  <div className="img-wrapper">
                     <img src={Image4} alt="kitchen" />
                  </div>

                  <div className="square-text-wrapper">
                     <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>

                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem natus molestiae sunt perspiciatis quis aut facilis, laboriosam suscipit voluptas labore repellendus ut inventore et excepturi corporis quisquam animi mollitia corrupti illo commodi dolore dicta. Sapiente possimus, dolor, dolorum iure rem maiores iste nulla quo quia numquam, sed voluptate nam? Odio?</p>
                  </div>
               </div>

               <hr />

               <div className="square">
                  <div className="square-text-wrapper">
                     <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>

                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem natus molestiae sunt perspiciatis quis aut facilis, laboriosam suscipit voluptas labore repellendus ut inventore et excepturi corporis quisquam animi mollitia corrupti illo commodi dolore dicta. Sapiente possimus, dolor, dolorum iure rem maiores iste nulla quo quia numquam, sed voluptate nam? Odio?</p>
                  </div>

                  <div className="img-wrapper">
                     <img src={Image1} alt="service" />
                  </div>
               </div>

               <hr />
            </div>
         </div>

         <div className="squares-wrapper">
            <div className="squares">
               <div className="square">
                  <div className="img-wrapper">
                     <img src={Image2} alt="service" />
                  </div>

                  <div className="square-text-wrapper">
                     <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>

                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem natus molestiae sunt perspiciatis quis aut facilis, laboriosam suscipit voluptas labore repellendus ut inventore et excepturi corporis quisquam animi mollitia corrupti illo commodi dolore dicta. Sapiente possimus, dolor, dolorum iure rem maiores iste nulla quo quia numquam, sed voluptate nam? Odio?</p>
                  </div>
               </div>

               <hr />

               <div className="square">
                  <div className="square-text-wrapper">
                     <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>

                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem natus molestiae sunt perspiciatis quis aut facilis, laboriosam suscipit voluptas labore repellendus ut inventore et excepturi corporis quisquam animi mollitia corrupti illo commodi dolore dicta. Sapiente possimus, dolor, dolorum iure rem maiores iste nulla quo quia numquam, sed voluptate nam? Odio?</p>
                  </div>

                  <div className="img-wrapper">
                     <img src={Image3} alt="service" />
                  </div>
               </div>
            </div>
         </div>

         <div className="certificate-licences">
            Aqui van las licencias, cerfificaciones, diplomas
         </div>

         <div className="get-appointment">
            <Link to="/auth">
               <div className="button">
                  <div className="icon">
                     <FontAwesomeIcon icon="globe" />
                  </div>
                  Agenda tu cita online
               </div>
            </Link>
         </div>
      </div>
   )
}