import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
   const [index, setIndex] = useState(0);

   const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
   };
   return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
         <Carousel.Item>
            <img
               className="d-block w-100"
               src='https://www.ceu.edu/sites/default/files/styles/node_widget/public/main_image/article/24137/yuvalnoahharariportrait41.jpg?itok=QGIN4b21&c=21e638aebbd8adc9c688edc2f32c6ca6'
               alt="First slide"
            />
            <Carousel.Caption>
               <h3>Yuval Noha Harari</h3>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
            <img
               className="d-block w-100"
               src='https://i.insider.com/608843360da8f40018033bdc?width=1200&format=jpeg'
               alt="Second slide"
            />

            <Carousel.Caption>
               <h3>Yuval Noha Harari</h3>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
            <img
               className="d-block w-100"
               src='https://i.pinimg.com/originals/81/0b/fb/810bfbab0ecb9a69a4ce667a107acb57.jpg'
               alt="Third slide"
            />

            <Carousel.Caption>
               <h3>Yuval Noha Harari</h3>
            </Carousel.Caption>
         </Carousel.Item>
      </Carousel>
   );
};

export default Banner;