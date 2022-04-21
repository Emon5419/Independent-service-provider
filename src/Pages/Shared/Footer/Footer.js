import React from 'react';
import './Footer.css';


const Footer = () => {

   const today = new Date();
   const year = today.getFullYear();
   return (
      <footer className=''>
         <div className="footer-container">
            <div className="mt-2 ms-5">
               <p className="">Naama Wartenburg <br /> <small>Chief Marketing Officer</small><br />
                  Contact: 9876543210</p>
               <div className="mt-2">
                  <p className="">Alauddin Imon <br /> <small>Developer & Head Programmer</small><br />
                     Contact: 01845415506 <br />
                     E-mail: alauddinemon3
                     @gmail.com</p>
               </div>
            </div>
            <div className="ms-5 mt-2">
               <p className="">Michael Zur <br /> <small>Gloval Reach & Event Booking</small><br />
                  Contact: 9876543210</p>
               <p className="">Abu Hanif <br /> <small>Manager</small><br />
                  Contact: 9876543210 <br />
                  E-mail: abuhanif@gmail.com</p>
            </div>
         </div>


         {/* Copyright-Contanier */}
         <div className="copyright-container">

            <div>
               <p className='text-center'><small>Copyright © {year}, All Rights Reserved.</small></p>
            </div>

         </div>
      </footer >
   );
};

export default Footer;