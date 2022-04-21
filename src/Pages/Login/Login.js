import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {

   const emailRef = useRef('');
   const passwordRef = useRef('');
   const navigate = useNavigate()

   const formSubmit = event => {
      event.preventDefault();
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      console.log(email, password);
   }
   const navigateRegister = event => {
      navigate('/register');
   }


   return (
      <div className="login-container w-50 mx-auto m-5">
         <h2>Login Here</h2>

         <Form onSubmit={formSubmit} className=" mt-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
            </Form.Group>

            <p className="mt-2"><small>New to this page? <Link to="/register" className="text-primary text-decoration-none" onclick={navigateRegister}>Please Register</Link> </small></p>
            <Button variant="primary" type="submit">
               Login
            </Button>
         </Form>

      </div>
   );
};

export default Login;