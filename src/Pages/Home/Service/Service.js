import React from 'react';
import './Service.css';

const Service = ({ service }) => {
   const { name, img, description, price } = service;
   return (
      <div className='service'>
         <img className='w-25' src={img} alt="" />
         <p><strong> {name} </strong></p>
         <p>Price: ${price}</p>
         <p><small>{description}</small></p>
         <button className='btn btn-danger'>Buy Now</button>
      </div>
   );
};

export default Service;