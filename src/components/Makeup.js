import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import makeupbanner from './images.js/makeupbanner.avif';
import nailpolish from './images.js/nailpolish.jpeg';
import mascara from './images.js/mascara.webp';
import eyeliner from './images.js/eyeliner.webp';
import lipstick from './images.js/lipstick.jpg';
import facecream from './images.js/facecream.webp';
import facepowder from './images.js/serum1.jpeg';
import makeupset from './images.js/brush.avif';
import illusionpowder from './images.js/illusion powder.jpg';
import array from './array';
import Footer from '../Footer';


function Makeup() {
  return (
    <div>

      <Container>
        <img
          style={{ height: '80vh' }}
          className='w-100 d-block vh-50'
          src={makeupbanner}
          alt=''
        />
        <h2 className='mt-5'><i>Beauty is Endless</i></h2>

        <Row>
          <Col md={3}>
            <Card style={{ width: '100%', height: 'auto', marginTop: '30px' }}>
              <Card.Img variant="top" src={nailpolish} style={{ height: '254px' }} />
              <Card.Body>
                <Card.Title className='fs-6'>Fancy Nail Polish</Card.Title>
                <Card.Text>
                  $299.00
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card style={{ width: '100%', height: 'auto', marginTop: '30px' }}>
              <Card.Img variant="top" src={mascara} style={{ height: '254px' }} />
              <Card.Body>
                <Card.Title className='fs-6'>Premium Black Mascara</Card.Title>
                <Card.Text>
                  $129.29
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card style={{ width: '100%', height: 'auto', marginTop: '30px' }}>
              <Card.Img variant="top" src={lipstick} style={{ height: '254px' }} />
              <Card.Body>
                <Card.Title className='fs-6'>Lipca Red Lipstick</Card.Title>
                <Card.Text>
                  $399.00
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card style={{ width: '100%', height: 'auto', marginTop: '30px' }}>
              <Card.Img variant="top" src={eyeliner} style={{ height: '254px' }} />
              <Card.Body>
                <Card.Title className='fs-6'>Hemic Black Eyeliner</Card.Title>
                <Card.Text>
                  $99.00
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row style={{ marginTop: '100px' }}>
          <Col md={3}>
            <Card style={{ width: '100%', height: 'auto', marginTop: '30px' }}>
              <Card.Img variant="top" src={facecream} style={{ height: '254px' }} />
              <Card.Body>
                <Card.Title className='fs-6'>Foundation Face Cream</Card.Title>
                <Card.Text>
                  $299.00
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card style={{ width: '100%', height: 'auto', marginTop: '30px' }}>
              <Card.Img variant="top" src={illusionpowder} style={{ height: '254px' }} />
              <Card.Body>
                <Card.Title className='fs-6'>Brighten Face Powder</Card.Title>
                <Card.Text>
                  $129.29
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card style={{ width: '100%', height: 'auto', marginTop: '30px' }}>
              <Card.Img variant="top" src={makeupset} style={{ height: '254px' }} />
              <Card.Body>
                <Card.Title className='fs-6'>Classic Makeup Brush</Card.Title>
                <Card.Text>
                  $399.00
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card style={{ width: '100%', height: 'auto', marginTop: '30px' }}>
              <Card.Img variant="top" src={facepowder} style={{ height: '254px' }} />
              <Card.Body>
                <Card.Title className='fs-6'>Aqua Face Serum</Card.Title>
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

export default Makeup