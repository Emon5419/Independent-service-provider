import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {

   const navigate = useNavigate();

   const navigateLogin = () => {
      navigate('/login');
   }

   const handleRegister = event => {
      event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      const password = event.target.password.value;


   }

   return (
      <div className="mt-5 mb-5 w-50 mx-auto">
         <h1>Please Register</h1>

         <Form onSubmit={handleRegister}>

            <Form.Group className="mb-3" controlId="formBasicText">
               <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Control type="password" placeholder="password" required />
            </Form.Group>

            <Button onClick={navigateLogin} variant="primary" type="submit">
               Register
            </Button>

            <p><small>Alredy have an account? <Link to="/login" className="text-primary text-decoration-none"> Please Login</Link> </small></p>

         </Form>

      </div >
   );
};

export default Register;