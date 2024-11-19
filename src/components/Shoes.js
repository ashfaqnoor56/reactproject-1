import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import shoebanner from './images.js/shoebanner.jpg';
import shoe1 from './images.js/blackheel.jpeg';
import walkshoe from './images.js/wshoes.jpeg';
import heels from './images.js/synthetic heels.jpg';
import whiteheel from './images.js/whitewear.jpeg';
import sneaker from './images.js/white sneaker.jpeg';
import boots from './images.js/wboots.jpeg';
import blackshoe from './images.js/runshoe.jpeg';
import pboots from './images.js/pinkboots.jpeg';
import Footer from '../Footer';


function Shoes() {
  return (
    <div>


      <Container>
        <img
          style={{ height: '80vh' }}
          className='w-100 d-block vh-50'
          src={shoebanner}
          alt=''
        />
        <h2 className='mt-5'><i>Walk Like a Queen</i></h2>

        <Row>
          <Col md={3}>
          <Card style={{ width: '100%', height:'auto',marginTop:'30px'}}>
              <Card.Img variant="top" src={walkshoe} style={{ height: '254px' }} />
              <Card.Body>
                <Card.Title className='fs-6'>Beige Low Heel Shoe</Card.Title>
                <Card.Text>
                  $299.00
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
          <Card style={{ width: '100%', height:'auto',marginTop:'30px'}}>
              <Card.Img variant="top" src={heels} style={{ height: '254px' }} />
              <Card.Body>
                <Card.Title className='fs-6'>Black Heel Shoe</Card.Title>
                <Card.Text>
                  $129.29
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
          <Card style={{ width: '100%', height:'auto',marginTop:'30px'}}>
              <Card.Img variant="top" src={pboots} style={{ height: '254px' }} />
              <Card.Body>
                <Card.Title className='fs-6'>Classic Pink Boot</Card.Title>
                <Card.Text>
                  $399.00
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
          <Card style={{ width: '100%', height:'auto',marginTop:'30px'}}>
              <Card.Img variant="top" src={whiteheel} style={{ height: '254px' , }} />
              <Card.Body>
                <Card.Title className='fs-6'> Vintage White Heel</Card.Title>
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
          <Card style={{ width: '100%', height:'auto',marginTop:'30px'}}>
              <Card.Img variant="top" src={sneaker} style={{ height: '254px', }} />
              <Card.Body>
                <Card.Title className='fs-6'>White Premium Sneakers</Card.Title>
                <Card.Text>
                  $299.00
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
    <Card style={{ width: '100%', height:'auto',marginTop:'30px'}}>
              <Card.Img variant="top" src={boots} style={{ height: '254px' }} />
              <Card.Body>
                <Card.Title className='fs-6'>Beige Neckup Boots</Card.Title>
                <Card.Text>
                  $129.29
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
          <Card style={{ width: '100%', height:'auto',marginTop:'30px'}}>
              <Card.Img variant="top" src={shoe1} style={{ height: '254px' }} />
              <Card.Body>
                <Card.Title className='fs-6'> Party Wear Black Heel</Card.Title>
                <Card.Text>
                  $399.00
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
          <Card style={{ width: '100%', height:'auto',marginTop:'30px'}}>
              <Card.Img variant="top" src={blackshoe} style={{ height: '254px' }} />
              <Card.Body>
                <Card.Title className='fs-6'>Running Red Shoe</Card.Title>
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

export default Shoes