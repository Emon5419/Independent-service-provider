import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
   return (
      <>
         <Navbar className='navbar-contanier'>
            <Container>
               <Navbar.Brand href="#home">
                  <img src='https://www.ynharari.com/wp-content/uploads/2020/01/ynhlogo.png' height="50" alt="" />
               </Navbar.Brand>
               <Nav className="ms-8">
                  <Nav.Link to="/home">Home</Nav.Link>
                  <Nav.Link to="/services">Services</Nav.Link>
                  <Nav.Link to="/blogs">Blogs</Nav.Link>
               </Nav>
            </Container>
         </Navbar>

      </>
   );
};

export default Header;


