import React from 'react'
import { Container } from 'react-bootstrap'
import offer from './images.js/offerbanner1.avif'
import { Col, Row } from 'react-bootstrap';
function OfferZone() {
  return (
    <Container>
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
            
            </Col>

         
        </Row>
    </Container>

    
  )
}

export default OfferZone