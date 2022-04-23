import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';

const Header = () => {


   const [user] = useAuthState(auth);

   const handleSignOut = () => {
      signOut(auth);
   }


   return (
      <Navbar className="navbar text" collapseOnSelect expand="lg" sticky="top" bg="primary" variant="dark">
         <Container>
            <Navbar.Brand as={Link} to="/">
               <img src='https://www.ynharari.com/wp-content/uploads/2020/01/ynhlogo.png' height="50" alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="me-auto">
                  <Nav.Link href="#services">Services</Nav.Link>
                  <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                  <Nav.Link as={Link} to="/checkOut">CheckOut</Nav.Link>
               </Nav>

               <Nav className="me-2">
                  {
                     user ?
                        <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                        :
                        <Nav.Link as={Link} to="login">
                           Login
                        </Nav.Link>}
               </Nav>

            </Navbar.Collapse>
         </Container>
      </Navbar>);
};

export default Header;