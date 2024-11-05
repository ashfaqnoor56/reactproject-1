import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import image1 from './images.js/FBIMG-2.jpg'
import image2 from './images.js/FBIMG-6.jpg'
import image3 from './images.js/FBIMG-5.webp'
import { Col, Row } from 'react-bootstrap';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import logo from "./images.js/logo.webp"
import { FaRegUserCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import accessories from './images.js/ladies-accessories.jpg';
import dress from './images.js/women dress.webp';
import jewels from './images.js/jewels.jpg';
import bags from './images.js/women bags.jpeg';
import jack from './images.js/jack and coat.jpeg';
import makeup from './images.js/women makeup.jpg';
import shoes from './images.js/women shoes.jpeg';
import Card from 'react-bootstrap/Card';
import denim1 from './images.js/denim2.jpeg';
import rwatch from './images.js/redwatch.jpeg';
import bride from './images.js/Bridesvintage.jpeg'
import makeupset from './images.js/women makeup.jpg';
import wboots from './images.js/wboots.jpeg';
import jack2 from './images.js/jack2.jpeg';
import bag7 from './images.js/women bags.jpeg';
import offer from './images.js/offerbanner1.avif';
import offer1 from './images.js/offer acc.jpg';
import offer2 from './images.js/offermakeup.jpeg';
import offer3 from './images.js/offershoe.jpg';
import { TbTruckDelivery } from "react-icons/tb";
function Home() {
   
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary bg-white mb-5 p-3">
      <Container>
        <Navbar.Brand href="#" className='fs-3'><img className='logo' src={logo}/></Navbar.Brand>
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

{/* #Banner Carousel */}

<Container>
<Carousel>
 
      <Carousel.Item>
        <img
         style={{height:'80vh'}}
        className='w-100 d-block vh-50'
        src={image1}
        alt=''
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className='w-100 d-block'
        src={image2}
        alt=''
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
      style={{height:'80vh'}}
        className='w-100 d-block'
        src={image3}
        alt=''
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</Container>

{/* #Categories */}

<Container className='mt-5'>


    <Swiper style={{marginTop:'100px'}}
      spaceBetween={50}
      slidesPerView={7}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)} 
    >
      <Row> 
      <Col md={2} sm={12}>
      <SwiperSlide>
      <Link to="/acc" className='text-decoration-none text-dark'>
      <img 
      style={{height:'200px', borderRadius:'50%'}}
        className='w-100 '
        src={accessories}
        alt=''
          />
          <h6 className='text-center mt-3'>Accessories</h6>
          </Link>
      </SwiperSlide>
      </Col>

      <Col md={2} sm={12}>
       
      <SwiperSlide>
        <Link to="/dress" className='text-decoration-none text-dark'>
      <img 
       style={{height:'200px', borderRadius:'50%'}}
        className='w-100'
        src={dress}
        alt=''
          />
          <h6 className='text-center mt-3'>Dress</h6>
          </Link>
      </SwiperSlide>
      </Col>

      <Col md={2} xs={12}>
      <SwiperSlide>
      <Link to="/jewels" className='text-decoration-none text-dark'>
      <img 
       style={{height:'200px', borderRadius:'50%'}}
        className='w-100'
        src={jewels}
        alt=''
          />
          <h6 className='text-center mt-3'>Jewels</h6>
          </Link>
      </SwiperSlide>
      </Col>

      <Col md={2} xs={12}>
      <SwiperSlide>
      <Link to="/bags" className='text-decoration-none text-dark'>
      <img 
       style={{height:'200px', borderRadius:'50%'}}
        className='w-100'
        src={bags}
        alt=''
          />
          <h6 className='text-center mt-3'>Bags</h6>
          </Link>
      </SwiperSlide>
      </Col>

      <Col md={2} xs={12}>
      <SwiperSlide>
      <Link to="/jackets" className='text-decoration-none text-dark'>
      <img 
       style={{height:'200px', borderRadius:'50%'}}
        className='w-100'
        src={jack}
        alt=''
          />
          <h6 className='text-center mt-3'>Jackets & Coat</h6>
          </Link>
      </SwiperSlide>
      </Col>

      <Col md={2} xs={12}>
      <SwiperSlide>
      <Link to="/makeup" className='text-decoration-none text-dark'>
      <img 
       style={{height:'200px', borderRadius:'50%'}}
        className='w-100'
        src={makeup}
        alt=''
          />
          <h6 className='text-center mt-3'>Makeup Set</h6>
          </Link>
      </SwiperSlide>
      </Col>

      <Col md={2} xs={12}>
      <SwiperSlide>
      <Link to="/shoe" className='text-decoration-none text-dark'>
      <img 
       style={{height:'200px', borderRadius:'50%'}}
        className='w-100'
        src={shoes}
        alt=''
          />
          <h6 className='text-center mt-3'>Shoes</h6>
          </Link>
      </SwiperSlide>
      </Col>
      
      </Row>
    </Swiper>
    
  

</Container>

{/* #home Product */}

<Container>
<h2 style={{marginTop:'100px'}} > Explore Popular Categories</h2>
<Row>
<Col md={3}>
    <Card style={{ width: '16rem', marginTop:'100px', height:'20px'}}>
      <Card.Img variant="top" src={denim1} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Classic Blue shirt Jacket</Card.Title>
        <Card.Text>
         $299.00
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

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
      <Card.Img variant="top" src={bride} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Imported Vintage Costume</Card.Title>
        <Card.Text>
         $99.00
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col md={3}>
    <Card style={{ width: '16rem', marginTop:'100px', height:'20px'}}>
      <Card.Img variant="top" src={jack2} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Pegion White Chudi</Card.Title>
        <Card.Text>
         $129.29
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>
</Row>

<Row style={{marginTop:'350px'}}>
<Col md={3}>
<Card style={{ width: '16rem', marginTop:'100px', height:'20px'}}>
      <Card.Img variant="top" src={bag7} style={{height:'254px'}} />
      <Card.Body>
        <Card.Title className='fs-6'>Classic Party Wear</Card.Title>
        <Card.Text>
         $399.00
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col md={3}>
    <Card style={{ width: '16rem', marginTop:'100px', height:'20px'}}>
      <Card.Img variant="top" src={wboots} style={{height:'254px'}}/>
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
      <Card.Img variant="top" src={makeupset} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Imported Vintage Costume</Card.Title>
        <Card.Text>
         $99.00
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col md={3}>
    <Card style={{ width: '16rem', marginTop:'100px', height:'20px'}}>
      <Card.Img variant="top" src={jack2} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Pegion White Chudi</Card.Title>
        <Card.Text>
         $129.29
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>
</Row>
</Container>

{/* #Facilities */}

{/* <Container>
<Row>
  <Col md={3}>
  <div className='d-flex'>
  <div><TbTruckDelivery /></div>
  <div>Fastest Delivery</div>
  </div>
  </Col>
  <Col md={3}>
  <div className='d-flex'>
  <div><TbTruckDelivery /></div>
  <div>Fastest Delivery</div>
  </div>
  </Col>
  <Col md={3}>
  <div className='d-flex'>
  <div><TbTruckDelivery /></div>
  <div>Fastest Delivery</div>
  </div>
  </Col>
  <Col md={3}>
  <div className='d-flex'>
  <div><TbTruckDelivery /></div>
  <div>Fastest Delivery</div>
  </div>
  </Col>
</Row>


</Container> */}

{/* #offerzone */}

<div style={{marginTop:'450px'}}>
<Container >
  <h2 className='mb-5'>Mega Sale is on</h2>
        <Row>
            <Col md={8}>
            <img
         style={{height:'80vh'}}
        className='w-100 d-block vh-50'
        src={offer}
        alt=''
        />
            </Col>
            <Col md={4}>
            <Carousel>
      <Carousel.Item>
        <img
         style={{height:'80vh'}}
        className='w-100 d-block vh-50'
        src={offer1}
        alt=''
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
       style={{height:'80vh'}}
        className='w-100 d-block'
        src={offer2}
        alt=''
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
      style={{height:'80vh'}}
        className='w-100 d-block'
        src={offer3}
        alt=''
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </Col>

         
        </Row>
    </Container>
    </div>
{/* #Footer */}

<div className='bg-dark'>
        <Container style={{marginTop:'100px'}} className='text-white pt-5 pb-5'>
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
    
   
    </>
   
  );
}

export default Home;