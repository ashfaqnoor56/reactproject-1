import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import bagbanner from './images.js/bag banner.webp';
import bag1 from './images.js/bag1.jpg';
import bag2 from './images.js/bag2.jpeg';
import bag3 from './images.js/black bags.jpeg';
import bag4 from './images.js/brownbag.jpeg';
import bag5 from './images.js/redbag.jpeg';
import bag6 from './images.js/bagrd1.jpeg';
import bag7 from './images.js/beigebag.jpeg';
import bag8 from './images.js/bagbl1.jpeg';
import Footer from '../Footer';

function Bags() {
  return (
    <div>

<Container>
        <img
         style={{height:'80vh'}}
        className='w-100 d-block vh-50'
        src={bagbanner}
        alt=''
        />
        <h2 className='mt-5'><i>Makes You Feel Comfort</i></h2>

        <Row>
    <Col md={3}>
    <Card style={{ width: '100%', height:'auto',marginTop:'30px'}}>
      <Card.Img variant="top" src={bag1} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Morias Grey Classic Bag</Card.Title>
        <Card.Text>
         $299.00
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

<Col md={3}>
<Card style={{ width: '100%', height:'auto',marginTop:'30px'}}>
      <Card.Img variant="top" src={bag2} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Piyago Navy Casual Bag</Card.Title>
        <Card.Text>
         $129.29
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

<Col md={3}>
<Card style={{ width: '100%', height:'auto',marginTop:'30px'}}>
      <Card.Img variant="top" src={bag3} style={{height:'254px'}} />
      <Card.Body>
        <Card.Title className='fs-6'>Luxury Haris Black Bag</Card.Title>
        <Card.Text>
         $399.00
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col md={3}>
    <Card style={{ width: '100%', height:'auto',marginTop:'30px'}}>
      <Card.Img variant="top" src={bag4} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Premium Leather Brown Bag</Card.Title>
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
      <Card.Img variant="top" src={bag5} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Red Sauage Nitro Bag</Card.Title>
        <Card.Text>
         $299.00
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

<Col md={3}>
<Card style={{ width: '100%', height:'auto',marginTop:'30px'}}>
      <Card.Img variant="top" src={bag6} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Pegion Neck Red Bag</Card.Title>
        <Card.Text>
         $129.29
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

<Col md={3}>
<Card style={{ width: '100%', height:'auto',marginTop:'30px'}}>
      <Card.Img variant="top" src={bag7} style={{height:'254px'}} />
      <Card.Body>
        <Card.Title className='fs-6'>Classic Biege Bag</Card.Title>
        <Card.Text>
         $399.00
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col md={3}>
    <Card style={{ width: '100%', height:'auto',marginTop:'30px'}}>
      <Card.Img variant="top" src={bag8} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Imported Vintage Black Bag</Card.Title>
        <Card.Text>
         $99.00
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>

    <div style={{ marginTop: '100px' }}>
        <Footer />
      </div>
    </div>
  )
}

export default Bags