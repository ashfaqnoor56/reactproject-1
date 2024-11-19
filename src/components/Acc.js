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
import { useParams } from 'react-router-dom';
import Footer from '../Footer';



function Acc() {
  const { id } = useParams()
  return (
    <div>
        <Container>
        <img
         style={{height:'80vh'}}
        className='w-100 d-block vh-50'
        src={access}
        alt=''
        />
        <h2 className='mt-5'><i>Glow Like a Princess</i></h2>
        <Row>
    <Col md={3}>
    <Card style={{ width: '100%', height:'auto',marginTop:'30px'}}>
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
<Card style={{ width: '100%', height:'auto',marginTop:'30px'}}>
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
<Card style={{ width: '100%', height:'auto',marginTop:'30px'}}>
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
    <Card style={{ width: '100%', height:'auto',marginTop:'30px'}}>
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

    <Row style={{marginTop:'100px'}}>
    <Col md={3}>
    <Card style={{ width: '100%', height:'auto',marginTop:'30px'}}>
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
<Card style={{ width: '100%', height:'auto',marginTop:'30px'}}>
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
<Card style={{ width: '100%', height:'auto',marginTop:'30px'}}>
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
    <Card style={{ width: '100%', height:'auto',marginTop:'30px'}}>
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

   
        <div style={{marginTop:'100px'}}>
        <Footer />
      </div>
    </div>
  )
}

export default Acc