import React from 'react'
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./images.js/logo.webp"
import { FaRegUserCircle } from "react-icons/fa";
import Container from 'react-bootstrap/Container';

function Navbarr() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary bg-white mb-5 ">
        <Container>
          <Navbar.Brand href="#" className='fs-3'><img className='logo' src={logo} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto  my-lg-0 gap-2"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

              <Nav.Link href="/" className=''>Home</Nav.Link>

              <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="./acc">Accessories</NavDropdown.Item>
                <NavDropdown.Item href="./dress">Dress</NavDropdown.Item>
                <NavDropdown.Item href="./jewels">Jewels</NavDropdown.Item>
                <NavDropdown.Item href="./bags">Jack $ Coat</NavDropdown.Item>
                <NavDropdown.Item href="./jackets">Bags</NavDropdown.Item>
                <NavDropdown.Item href="./makeup">Fair & Beauty</NavDropdown.Item>
                <NavDropdown.Item href="./shoes">Shoes</NavDropdown.Item>
                <NavDropdown.Divider />

              </NavDropdown>



              <Nav.Link href="/contact" className=''> Contact Us</Nav.Link>


              <div className='d-flex'>
                <p className='fs-4'><FaRegUserCircle /></p>
                <NavDropdown title="Login" id="basic-nav-dropdown">
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

    </div>
  )
}

export default Navbarr;