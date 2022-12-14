import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
   const { checkinId } = useParams();
   return (
      <div>
         <h2>Welcome to detail: {checkinId}</h2>
         <div className='text-center'>
            <Link to="/checkout">
               <button className='btn btn-primary'>Proceed Checkout</button>
            </Link>
         </div>
      </div>
   );
};

export default ServiceDetail;