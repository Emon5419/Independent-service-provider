import React from 'react';
import './ExtraPart.css';
import sapians from '../../../images/sapians.jpg';

const ExtraPart = () => {
   return (
      <div>
         <h2 className='text-center text-primary'><strong>Our Best Saling Book!</strong></h2>

         <div className='text-container'>
            <div className='me-5'>
               <h2> Sapians: A Brief History of Humankind </h2>
               <p><small>Homo sapiens rules the world because it is the only animal that can believe in things that exist purely in its own imagination, such as gods, states, money, and human rights.</small></p>
               <button className='btn-explore' type="submit"><a className="text-decoration-none " href="https://en.wikipedia.org/wiki/Sapiens:_A_Brief_History_of_Humankind">Explore More</a></button>
            </div>
            <div className='p-2'>
               <img src={sapians} wdith="200px" height="300px" alt="" />
            </div>
         </div>
      </div>

   );
};

export default ExtraPart;