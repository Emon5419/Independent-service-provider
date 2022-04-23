import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {

   const emailRef = useRef('');
   const passwordRef = useRef('');
   const navigate = useNavigate();
   const location = useNavigate();
   let from = location.state?.from?.pathname || "/checkout";

   const [
      signInWithEmailAndPassword,
      user
   ] = useSignInWithEmailAndPassword(auth);

   const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);


   if (user) {
      navigate(from, { replace: true });
   }
   const formSubmit = event => {
      event.preventDefault();
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      signInWithEmailAndPassword(email, password);
   }
   const navigateRegister = () => {
      navigate('/register');
   }
   const resetPassword = async () => {
      const email = emailRef.current.value;
      if (email) {
         await sendPasswordResetEmail(email);
         toast('Sent email');
      }
      else {
         toast('please enter your email address');
      }
   }

   return (

      <div className="login-container w-50 mx-auto m-5">
         <h2 className='text-center'>Login Here</h2>

         <Form onSubmit={formSubmit} className=" mt-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
            </Form.Group>

            <Button variant="primary" className="w-100 mx-auto d-block mb-3" type="submit">
               Login
            </Button>

            <p className="mt-2"><small>New to this page? <Link to="/register" className="text-primary text-decoration-none" onclick={navigateRegister}>Please Register</Link> </small></p>
            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
         </Form>
         <ToastContainer />
         <SocialLogin></SocialLogin>
      </div>

   );
};

export default Login;