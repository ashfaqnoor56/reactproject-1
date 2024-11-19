import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import jackbanner from './images.js/jackbanner4k.jpg';
import jack1 from './images.js/blackhoodedjacket.jpg';
import jack2 from './images.js/redjacket.jpg';
import jack3 from './images.js/purplehoodedjacket.jpg';
import jack4 from './images.js/whitejacket.jpg';
import jack5 from './images.js/greenjacket.jpg';
import jack6 from './images.js/blackjacket.jpg';
import jack7 from './images.js/bluedenimjacket.jpg';
import jack8 from './images.js/darkbluedenimjacket.jpg';

import Footer from '../Footer';

function Jackets() {
  return (
    <div>
 
<Container>
        <img
         style={{height:'80vh'}}
        className='w-100 d-block vh-50'
        src={jackbanner}
        alt=''
        />
        <h2 className='mt-5'><i>Winter is Coming</i></h2>
        <Row>
    <Col md={3}>
    <Card style={{ width: '100%', height: 'auto', marginTop: '30px' }}>
      <Card.Img variant="top" src={jack1} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Black Wollen Jacket</Card.Title>
        <Card.Text>
         $299.00
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

<Col md={3}>
<Card style={{ width: '100%', height: 'auto', marginTop: '30px' }}>
      <Card.Img variant="top" src={jack2} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Navy Leather Jacket</Card.Title>
        <Card.Text>
         $129.29
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

<Col md={3}>
<Card style={{ width: '100%', height: 'auto', marginTop: '30px' }}>
      <Card.Img variant="top" src={jack3} style={{height:'254px'}} />
      <Card.Body>
        <Card.Title className='fs-6'>Rugged Black Coat</Card.Title>
        <Card.Text>
         $399.00
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col md={3}>
    <Card style={{ width: '100%', height: 'auto', marginTop: '30px' }}>
      <Card.Img variant="top" src={jack4} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Shining Vipro Jacket</Card.Title>
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
    <Card style={{ width: '100%', height: 'auto', marginTop: '30px' }}>
      <Card.Img variant="top" src={jack5} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Maroon Dark Coat</Card.Title>
        <Card.Text>
         $299.00
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

<Col md={3}>
<Card style={{ width: '100%', height: 'auto', marginTop: '30px' }}>
      <Card.Img variant="top" src={jack6} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Toned Beige Coat</Card.Title>
        <Card.Text>
         $129.29
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

<Col md={3}>
<Card style={{ width: '100%', height: 'auto', marginTop: '30px' }}>
      <Card.Img variant="top" src={jack7} style={{height:'254px'}} />
      <Card.Body>
        <Card.Title className='fs-6'>Classic Leather Coat</Card.Title>
        <Card.Text>
         $399.00
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col md={3}>
    <Card style={{ width: '100%', height: 'auto', marginTop: '30px' }}>
      <Card.Img variant="top" src={jack8} style={{height:'254px'}}/>
      <Card.Body>
        <Card.Title className='fs-6'>Helix White Jacket</Card.Title>
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

export default Jackets