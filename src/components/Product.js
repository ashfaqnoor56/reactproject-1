import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import white from './images.js/whitedress.jpg'
import blue from './images.js/bluewear.jpg'
import rolex from './images.js/leatherwatch.jpg';
import orange from './images.js/orangewear.jpg'
import makeupset from './images.js/women makeup.jpg';
import wboots from './images.js/wboots.jpeg';
import jack4 from './images.js/jack4.avif';
import bag7 from './images.js/women bags.jpeg';
import { Col, Row } from 'react-bootstrap';




function Product() {
  return (
    <Container>
<h2 style={{marginTop:'100px'}} > Explore Popular Categories</h2>
<Row className='mt-5'>
<Col md={3} >
<Card style={{ width: '100%', height: 'auto', marginTop: '30px' }}>
      <Card.Img variant="top" src={white} style={{height:'254px'}}/>
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
    <Card style={{ width: '100%', height: 'auto', marginTop: '30px' }}>
      <Card.Img variant="top" src={rolex} style={{height:'254px'}}/>
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
    <Card style={{ width: '100%', height: 'auto', marginTop: '30px' }}>
      <Card.Img variant="top" src={orange} style={{height:'254px'}}/>
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
    <Card style={{ width: '100%', height: 'auto', marginTop: '30px' }}>
      <Card.Img variant="top" src={jack4} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Navy Leather Jack</Card.Title>
        <Card.Text>
         $129.29
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>
</Row>

<Row style={{marginTop:'100px'}}>
<Col md={3}>
<Card style={{ width: '100%', height: 'auto', marginTop: '30px' }}>
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
    <Card style={{ width: '100%', height: 'auto', marginTop: '30px' }}>
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
    <Card style={{ width: '100%', height: 'auto', marginTop: '30px' }}>
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
    <Card style={{ width: '100%', height: 'auto', marginTop: '30px' }}>
      <Card.Img variant="top" src={blue} style={{height:'254px'}}/>
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
  );
}

export default Product;