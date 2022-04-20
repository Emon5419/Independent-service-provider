import React from 'react';
import './Header.css';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <>
         <Navbar className='navbar-contanier'>
            <Container>
               <Navbar.Brand href="#home">
                  <img src='https://www.ynharari.com/wp-content/uploads/2020/01/ynhlogo.png' height="50" alt="" />
               </Navbar.Brand>

               <div className="link-container ms-8">
                  <Link to="/home">Home</Link>
                  <Link to="/services">Services</Link>
                  <Link to="/blogs">Blogs</Link>
                  <Link to="/login">Login</Link>
               </div>
            </Container>
         </Navbar>

      </>
   );
};

export default Header;


