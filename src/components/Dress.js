import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import dress from './images.js/dressbanner1.jpg'
import saree from './images.js/saree1.jpg'
import chudi1 from './images.js/pinkwear.jpg'
import party from './images.js/partywear.jpeg'
import blue from './images.js/bluewear.jpg'
import white from './images.js/whitedress.jpg'
import purple from './images.js/casual1.jpg'
import orange from './images.js/orangewear.jpg'
import lightblue from './images.js/lightbluewear.jpg'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaRegUserCircle } from "react-icons/fa";
import logo from './images.js/logo.webp'

function Dress() {
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
              <NavDropdown.Item href="./Shoe">Shoes</NavDropdown.Item>
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
        src={dress}
        alt=''
        />
        <h2 className='mt-5'><i>Fashion Fades Style is Eternal</i></h2>
        <Row>
    <Col md={3}>
    <Card style={{ width: '16rem', marginTop:'100px', height:'20px'}}>
      <Card.Img variant="top" src={saree} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Special Silk Saree</Card.Title>
        <Card.Text>
         $299.00
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

<Col md={3}>
    <Card style={{ width: '16rem', marginTop:'100px', height:'20px'}}>
      <Card.Img variant="top" src={chudi1} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Purple Light Chudi</Card.Title>
        <Card.Text>
         $129.29
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

<Col md={3}>
    <Card style={{ width: '16rem', marginTop:'100px', height:'20px'}}>
      <Card.Img variant="top" src={lightblue} style={{height:'254px'}} />
      <Card.Body>
        <Card.Title className='fs-6'>Classic Skyblue Saree</Card.Title>
        <Card.Text>
         $399.00
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col md={3}>
    <Card style={{ width: '16rem', marginTop:'100px', height:'20px'}}>
      <Card.Img variant="top" src={orange} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Vintage Half Saree</Card.Title>
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
      <Card.Img variant="top" src={white} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Casual White Wear</Card.Title>
        <Card.Text>
         $299.00
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

<Col md={3}>
    <Card style={{ width: '16rem', marginTop:'100px', height:'20px'}}>
      <Card.Img variant="top" src={party} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Royal Black Party Wear</Card.Title>
        <Card.Text>
         $129.29
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

<Col md={3}>
    <Card style={{ width: '16rem', marginTop:'100px', height:'20px'}}>
      <Card.Img variant="top" src={blue} style={{height:'254px'}} />
      <Card.Body>
        <Card.Title className='fs-6'>Classic Blue Top</Card.Title>
        <Card.Text>
         $399.00
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col md={3}>
    <Card style={{ width: '16rem', marginTop:'100px', height:'20px'}}>
      <Card.Img variant="top" src={purple} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Casual Purple Top</Card.Title>
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

export default Dress