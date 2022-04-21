import React from 'react';
import './Header.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <Navbar collapseOnSelect expand="lg" sticky="top" bg="primary" variant="dark">
         <Container>
            <Navbar.Brand as={Link} to="/">
               <img src='https://www.ynharari.com/wp-content/uploads/2020/01/ynhlogo.png' height="50" alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="me-auto">
                  <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                  <Nav.Link as={Link} to="/checkin">Check-In</Nav.Link>
                  <Nav.Link as={Link} to="/signup">SignUp</Nav.Link>
                  <Nav.Link as={Link} to="/login">Login</Nav.Link>
                  <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                     <NavDropdown.Divider />
                     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>);
};

export default Header;