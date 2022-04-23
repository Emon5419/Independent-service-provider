import React from 'react';
import Banner from '../Banner/Banner';
import ExtraPart from '../ExtraPart/ExtraPart';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <hr className='mt-5 mb-5 w-75 mx-auto' />
         <Services></Services>
         <hr className='mt-5 mb-5 w-75 mx-auto' />
         <ExtraPart></ExtraPart>
      </div>
   );
};

export default Home;