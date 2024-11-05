import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import access from './images.js/accessories banner.jpg'
import rwatch from './images.js/redwatch.jpeg';
import bwatch from './images.js/blackwatch.jpeg';
import rbwatch from './images.js/rubypink.jpeg';
import gwatch from './images.js/goldwatch.jpeg'
import rolex from './images.js/leatherwatch.jpg';
import yellowwatch from './images.js/yellwatch.jpg';
import silverwatch from './images.js/siverwatch.jpg';
import bluewatch from './images.js/bracewatch.jpg'
import { FaRegUserCircle } from "react-icons/fa";
import logo from './images.js/logo.webp'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Acc() {
  return (
    <div>
       <Navbar expand="lg" className="bg-body-tertiary bg-white mb-5 p-3">
      <Container>
        <Navbar.Brand href="/" className='fs-3'><img className='logo' src={logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto  my-lg-0 gap-5"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            {/* <Nav.Link href="#" className='text-dark fs-5 '>Pages</Nav.Link>
            <Nav.Link href="#" className='text-dark fs-5'>Blog</Nav.Link>
            <Nav.Link href="#" className='text-dark fs-5'> Contact Us</Nav.Link> */}

            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="./Acc">Accessories</NavDropdown.Item>
              <NavDropdown.Item href="./Dress">Dress</NavDropdown.Item>
              <NavDropdown.Item href="./Jewels">Jewels</NavDropdown.Item>
              <NavDropdown.Item href="./Jackets">Jack $ Coat</NavDropdown.Item>
              <NavDropdown.Item href="./Bags">Bags</NavDropdown.Item>
              <NavDropdown.Item href="./Makeup">Fair & Beauty</NavDropdown.Item>
              <NavDropdown.Item href="./Shoes">Shoes</NavDropdown.Item>
              <NavDropdown.Divider />
             
            </NavDropdown>
            <Nav.Link href="#" className=''>Blog</Nav.Link>

           

            <Nav.Link href="/contact" className=''> Contact Us</Nav.Link>
            
           
           <div className='d-flex'>
           <p className='fs-4'><FaRegUserCircle /></p>
           <NavDropdown  title="Login" id="basic-nav-dropdown">
            <NavDropdown.Item href="./Login">Login</NavDropdown.Item>
              <div className='d-flex'>
              <NavDropdown.Item href="#">New Customer?</NavDropdown.Item>
              <NavDropdown.Item href="./Signup" className='text-white bg-primary'>
                Sign Up
              </NavDropdown.Item>
              </div>
              <NavDropdown.Item href="#">My Orders</NavDropdown.Item>
              <NavDropdown.Item href="#">Wishlist</NavDropdown.Item>
              <NavDropdown.Item href="#">Rewards</NavDropdown.Item>

              <NavDropdown.Divider />
             
            </NavDropdown>
            </div>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search for Products"
              className="me-2 w-100"
              aria-label="Search"
            />
            
          </Form>
        </Navbar.Collapse>
       
      </Container>
    </Navbar>



        <Container>
        <img
         style={{height:'80vh'}}
        className='w-100 d-block vh-50'
        src={access}
        alt=''
        />
        <Row>
    <Col md={3}>
    <Card style={{ width: '16rem', marginTop:'100px', height:'20px'}}>
      <Card.Img variant="top" src={rwatch} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Casio Red Watch</Card.Title>
        <Card.Text>
         $299.00
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

<Col md={3}>
    <Card style={{ width: '16rem', marginTop:'100px', height:'20px'}}>
      <Card.Img variant="top" src={bwatch} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Mangolio Black Watch</Card.Title>
        <Card.Text>
         $129.29
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

<Col md={3}>
    <Card style={{ width: '16rem', marginTop:'100px', height:'20px'}}>
      <Card.Img variant="top" src={gwatch} style={{height:'254px'}} />
      <Card.Body>
        <Card.Title className='fs-6'>Jacquline Gold Watch</Card.Title>
        <Card.Text>
         $399.00
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col md={3}>
    <Card style={{ width: '16rem', marginTop:'100px', height:'20px'}}>
      <Card.Img variant="top" src={rbwatch} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Akasa RubyPink Watch</Card.Title>
        <Card.Text>
         $99.00
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>

    <Row style={{marginTop:'350px'}}>
    <Col md={3}>
    <Card style={{ width: '16rem', marginTop:'100px', height:'20px'}}>
      <Card.Img variant="top" src={rolex} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Grey Leather Watch</Card.Title>
        <Card.Text>
         $299.00
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

<Col md={3}>
    <Card style={{ width: '16rem', marginTop:'100px', height:'20px'}}>
      <Card.Img variant="top" src={yellowwatch} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Disu Classic Watch</Card.Title>
        <Card.Text>
         $129.29
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

<Col md={3}>
    <Card style={{ width: '16rem', marginTop:'100px', height:'20px'}}>
      <Card.Img variant="top" src={silverwatch} style={{height:'254px'}} />
      <Card.Body>
        <Card.Title className='fs-6'>Silver Steel Watch</Card.Title>
        <Card.Text>
         $399.00
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col md={3}>
    <Card style={{ width: '16rem', marginTop:'100px', height:'20px'}}>
      <Card.Img variant="top" src={bluewatch} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Imported Bracelet Watch</Card.Title>
        <Card.Text>
         $99.00
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>

    <div className='bg-dark'>
        <Container style={{marginTop:'450px'}} className='text-white pt-5 pb-5'>
            <Row>
                <Col md={3}>
                    <h3>Our Store</h3>
                    <div className='mt-5'>
                    <p>
                        AQ Fashion is one of the biggest international fashion companies, one of the world’s largest distribution groups.
                    </p>
                   <div className='d-flex gap-3 fs-4'>
                   <p><FaFacebook /></p>
                    <p><FaXTwitter /></p>
                    <p><FaInstagram /></p>
                    <p><FaPinterest /></p>
                   </div>
                    </div>
                </Col>

                <Col md={3}>
                    <h3>Quick Links</h3>
                   <div className='mt-5'>
                   <p>My Account</p>
                    <p>Shopping Cart</p>
                    <p>Wishlist</p>
                    <p>Product Compare</p>
                   </div>
                </Col>

                <Col md={3}>
                    <h3>Information</h3>
                   <div className='mt-5'>
                   <p>Privacy Policy</p>
                    <p>Refund Policy</p>
                    <p>Shipping and Return</p>
                    <p>Terms & Conditions</p>
                   </div>
                </Col>

                <Col md={3}>
                    <h3>Let's Get in Touch</h3>
                    <div className='mt-5'>
                    <p>Sign up for our newsletter and receive 10% off your</p>
                    <input type="email" placeholder='Enter your Email here' className='mt-3 p-1 w-100' />
                    </div> 
                </Col>

            </Row>

        </Container>
        </div>
    </div>
  )
}

export default Acc