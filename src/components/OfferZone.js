import React from 'react'
import { Container } from 'react-bootstrap'
import offer from './images.js/offerbanner1.avif'
import offer1 from './images.js/offer acc.jpg';
import offer2 from './images.js/offermakeup.jpeg';
import offer3 from './images.js/offershoe.jpg';
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function OfferZone() {
  return (
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

    
  )
}

export default OfferZone