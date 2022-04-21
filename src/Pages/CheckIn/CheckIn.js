import React from 'react';
import { useParams } from 'react-router-dom';

const CheckIn = () => {
   const { checkinId, name } = useParams()
   return (
      <div>
         <h1>Check-In Page : {checkinId}</h1>
         <h1>{name}</h1>
      </div>

   );
};

export default CheckIn;