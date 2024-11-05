import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import accessories from './images.js/ladies-accessories.jpg';
import dress from './images.js/women dress.webp';
import jewels from './images.js/jewels.jpg';
import bags from './images.js/women bags.jpeg';
import jack from './images.js/jack and coat.jpeg';
import makeup from './images.js/women makeup.jpg';
import shoes from './images.js/women shoes.jpeg';
import denim1 from './images.js/denim2.jpeg';
import blackdenim from './images.js/Bdenim1.jpg';
import checked from './images.js/checked1.webp';
import dropts from './images.js/dropshoulder.jpg';
import blazer from './images.js/pinkblazer.jpg';
import coat from './images.js/leatherCoat.jpeg';
import printed from './images.js/Printed.jpeg';
import linen from './images.js/linen.webp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function Product() {
  return (
    <Container>
    <h2 className='mt-5 mb-5'> Explore Popular Categories</h2>
    <Swiper
      spaceBetween={50}
      slidesPerView={7}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
     
    >
      
      <SwiperSlide>
      <Link to="/acc">
      <img 
      style={{height:'200px', borderRadius:'50%'}}
        className='w-100 '
        src={accessories}
        alt=''
          />
          <h6 className='text-center mt-3'>Accessories</h6>
          </Link>
      </SwiperSlide>
      
       
      <SwiperSlide>
      <img 
       style={{height:'200px', borderRadius:'50%'}}
        className='w-100'
        src={dress}
        alt=''
          />
          <h6 className='text-center mt-3'>Dress</h6>
      </SwiperSlide>

      <SwiperSlide>
      <img 
       style={{height:'200px', borderRadius:'50%'}}
        className='w-100'
        src={jewels}
        alt=''
          />
          <h6 className='text-center mt-3'>Jewels</h6>
      </SwiperSlide>

      <SwiperSlide>
      <img 
       style={{height:'200px', borderRadius:'50%'}}
        className='w-100'
        src={bags}
        alt=''
          />
          <h6 className='text-center mt-3'>Bags</h6>
      </SwiperSlide>

      <SwiperSlide>
      <img 
       style={{height:'200px', borderRadius:'50%'}}
        className='w-100'
        src={jack}
        alt=''
          />
          <h6 className='text-center mt-3'>Jackets & Coat</h6>
      </SwiperSlide>

      <SwiperSlide>
      <img 
       style={{height:'200px', borderRadius:'50%'}}
        className='w-100'
        src={makeup}
        alt=''
          />
          <h6 className='text-center mt-3'>Makeup Set</h6>
      </SwiperSlide>

      <SwiperSlide>
      <img 
       style={{height:'200px', borderRadius:'50%'}}
        className='w-100'
        src={shoes}
        alt=''
          />
          <h6 className='text-center mt-3'>Shoes</h6>
      </SwiperSlide>
      
    </Swiper>

    {/* <Carousel>
      <Carousel.Item>
        <img 
        className=''
        src={accessories}
        alt=''
          />
        
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
        className=''
        src={dress}
        alt=''
          />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
        className=''
        src={jewels}
        alt=''
          />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
        className=''
        src={bags}
        alt=''
          />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
        className=''
        src={jack}
        alt=''
          />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
        className=''
        src={makeup}
        alt=''
          />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
        className=''
        src={shoes}
        alt=''
          />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}
    <h2 className='mt-5 mb-3'>Featured Products</h2>

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
      <Card.Img variant="top" src={checked} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>White Checked shirt</Card.Title>
        <Card.Text>
         $129.29
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

<Col md={3}>
    <Card style={{ width: '16rem', marginTop:'100px', height:'20px'}}>
      <Card.Img variant="top" src={blackdenim} style={{height:'254px'}} />
      <Card.Body>
        <Card.Title className='fs-6'>Classic Black shirt Jacket</Card.Title>
        <Card.Text>
         $399.00
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col md={3}>
    <Card style={{ width: '16rem', marginTop:'100px', height:'20px'}}>
      <Card.Img variant="top" src={dropts} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>OverSized Grey Tshirt</Card.Title>
        <Card.Text>
         $99.00
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>

    <Row style={{marginTop:'300px'}}>
    <Col md={3}>
    <Card style={{ width: '16rem', marginTop:'100px', height:'20px'}}>
      <Card.Img variant="top" src={coat} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Luxury Leather Coat</Card.Title>
        <Card.Text>
         $599.00
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

<Col md={3}>
    <Card style={{ width: '16rem', marginTop:'100px', height:'20px'}}>
      <Card.Img variant="top" src={blazer} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Premium Pink Blazer</Card.Title>
        <Card.Text>
         $899.00
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

<Col md={3}>
    <Card style={{ width: '16rem', marginTop:'100px', height:'20px'}}>
      <Card.Img variant="top" src={printed} style={{height:'254px'}} />
      <Card.Body>
        <Card.Title className='fs-6'>Printed Long Sleeve Shirt</Card.Title>
        <Card.Text>
         $399.00
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col md={3}>
    <Card style={{ width: '16rem', marginTop:'100px', height:'20px'}}>
      <Card.Img variant="top" src={linen} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Premium Linen Shirt</Card.Title>
        <Card.Text>
         $499.00
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
  );
}

export default Product;