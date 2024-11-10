import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [number, setNumber] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signing up with:', { username, email, password });
  };

  return (
    <Container maxWidth="xs" style={{width:'25%',marginTop:'100px'}}>
      <h2 className='mb-4'>Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control 
            type="text" 
            className='mb-2'
            placeholder="Enter username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </Form.Group>

        <Form.Group controlId="formBasicMobileNumber">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control 
            type="number" 
            className='mb-2'
            placeholder="Enter Mobile Number" 
            value={number} 
            onChange={(e) => setNumber(e.target.value)} 
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            className='mb-2'
            placeholder="Enter email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            className='mb-2'
            placeholder="Enter password" 
            value={cpassword} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Enter password" 
            value={password} 
            onChange={(e) => setCpassword(e.target.value)} 
          />
        </Form.Group>

        <Button variant="primary" type="submit" className='mt-3'>
          Sign Up
        </Button>
      </Form>
    </Container>
  );
}

export default Signup;
