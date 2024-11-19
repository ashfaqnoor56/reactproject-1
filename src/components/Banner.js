import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import image1 from './images.js/FBIMG-2.jpg'
import image2 from './images.js/FBIMG-6.jpg'
import image3 from './images.js/FBIMG-5.webp'
import { Container } from 'react-bootstrap';

function Banner() {


  return (
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
  );
}

export default Banner;