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
   }

   return (
      <div className="mt-5 mb-5 w-50 mx-auto">
         <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Confirm Email address</Form.Label>
               <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control type="password" placeholder="Password" required />
            </Form.Group>

            <p><small>Alredy have an account? <Link to="/login" className="text-primary text-decoration-none"> Please Login</Link> </small></p>
            <Button onClick={navigateLogin} variant="primary" type="submit">
               Register
            </Button>
         </Form>

      </div>
   );
};

export default Register;