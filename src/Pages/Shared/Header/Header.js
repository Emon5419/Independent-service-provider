import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
   return (
      <>
         <div className="contanier">
            <Navbar bg="primary" variant="dark">
               <Container>
                  <Navbar.Brand href="#home">
                     <img src='https://www.ynharari.com/wp-content/uploads/2020/01/ynhlogo.png' height="50" alt="" />
                  </Navbar.Brand>
                  <Nav className="me-0">
                     <Nav.Link href="#home">Home</Nav.Link>
                     <Nav.Link href="#services">Services</Nav.Link>
                     <Nav.Link href="#blogs">Blogs</Nav.Link>
                  </Nav>
               </Container>
            </Navbar>
         </div>


      </>
   );
};

export default Header;