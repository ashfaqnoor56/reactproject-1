import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import jewelbanner from './images.js/jewelbanner.jpg';
import jimiki1 from './images.js/jimikki1.webp'
import necklace from './images.js/necklace.jpeg';
import diamond from './images.js/diamondneck.jpeg';
import bangle from './images.js/bangless.jpeg';
import silvear from './images.js/silverear.jpeg';
import emerald from './images.js/emeraldneck.jpg';
import pinkneck from './images.js/pimk neck.jpeg';
import pairbr from './images.js/pairbrace.webp';
import Footer from '../Footer';



function Jewels() {
  return (
    <div>
       
 <Container>
        <img
         style={{height:'80vh'}}
        className='w-100 d-block vh-50'
        src={jewelbanner}
        alt=''
        />
        <h2 className='mt-5'><i>Enhance your Beauty</i></h2>
        <Row>
    <Col md={3}>
    <Card style={{ width: '100%', height:'auto',marginTop:'30px'}}>
      <Card.Img variant="top" src={necklace} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Mysoria plate Necklace</Card.Title>
        <Card.Text>
         $299.00
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

<Col md={3}>
<Card style={{ width: '100%', height:'auto',marginTop:'30px'}}>
      <Card.Img variant="top" src={jimiki1} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Pinky Diamond Earings</Card.Title>
        <Card.Text>
         $129.29
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

<Col md={3}>
<Card style={{ width: '100%', height:'auto',marginTop:'30px'}}>
      <Card.Img variant="top" src={diamond} style={{height:'254px'}} />
      <Card.Body>
        <Card.Title className='fs-6'>Classic Silver Necklace</Card.Title>
        <Card.Text>
         $399.00
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col md={3}>
    <Card style={{ width: '100%', height:'auto',marginTop:'30px'}}>
      <Card.Img variant="top" src={bangle} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Imported Vintage Bangle</Card.Title>
        <Card.Text>
         $99.00
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>

    <Row style={{marginTop:'10px'}}>
    <Col md={3}>
    <Card style={{ width: '100%', height:'auto',marginTop:'30px'}}>
      <Card.Img variant="top" src={silvear} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Arabia Silver Earings</Card.Title>
        <Card.Text>
         $299.00
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

<Col md={3}>
<Card style={{ width: '100%', height:'auto',marginTop:'30px'}}>
      <Card.Img variant="top" src={pinkneck} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Pinky Fox Jewel</Card.Title>
        <Card.Text>
         $129.29
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

<Col md={3}>
<Card style={{ width: '100%', height:'auto',marginTop:'30px'}}>
      <Card.Img variant="top" src={pairbr} style={{height:'254px'}} />
      <Card.Body>
        <Card.Title className='fs-6'>Royal Pair Bracelet</Card.Title>
        <Card.Text>
         $399.00
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col md={3}>
    <Card style={{ width: '100%', height:'auto',marginTop:'30px'}}>
      <Card.Img variant="top" src={emerald} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Emerald Necklace</Card.Title>
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

export default Jewels