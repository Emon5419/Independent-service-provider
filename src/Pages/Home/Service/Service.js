import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
   const { id, name, img, description, price } = service;

   const navigate = useNavigate();

   const goToCheckInPage = (id) => {
      navigate(`/checkin/${id}`)
   }
   return (
      <div className='service'>
         <img className='w-25' src={img} alt="" />
         <p><strong> {name} </strong></p>
         <p>Price: ${price}</p>
         <p><small>{description}</small></p>
         <button onClick={() => goToCheckInPage(id)} className='btn btn-danger'>Buy Now</button>
      </div>
   );
};

export default Service;

