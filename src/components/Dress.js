import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import dress from './images.js/dressbanner1.jpg'
import saree from './images.js/saree1.jpg'
import chudi1 from './images.js/pinkwear.jpg'
import party from './images.js/partywear.jpeg'
import blue from './images.js/bluewear.jpg'
import white from './images.js/whitedress.jpg'
import purple from './images.js/casual1.jpg'
import orange from './images.js/orangewear.jpg'
import lightblue from './images.js/lightbluewear.jpg'
import Footer from '../Footer';
import dressBanner from "../components/images.js/dressbanner.jpg";
import jewelbanner from './images.js/jewelbanner.jpg';
import jimiki1 from './images.js/jimikki1.webp'
import necklace from './images.js/necklace.jpeg';
import diamond from './images.js/diamondneck.jpeg';
import bangle from './images.js/bangless.jpeg';
import silvear from './images.js/silverear.jpeg';
import emerald from './images.js/emeraldneck.jpg';
import pinkneck from './images.js/pimk neck.jpeg';
import pairbr from './images.js/pairbrace.webp';
import array from './array';


// const apiData = [
//   {
//     "name": "dress",
//     "banner": dressBanner,
//     "title": 'Dress is nice to wear',
//     "id": '2',
//     "products": [
//       {
//         "image": saree,
//         "name": "Special Silk Saree",
//         "price": "MRP : 11000",
//       },
//       {
//         "image": chudi1,
//         "name": "Purple Light Chudi",
//         "price": "MRP : 700",
//       },
//       {
//         "image": blue,
//         "name": "Classic Skyblue Top",
//         "price": "MRP : 800",
//       },
//       {
//         "image": white,
//         "name": "Brew White Top",
//         "price": "MRP : 400",
//       },
//       {
//         "image": purple,
//         "name": "Axel Purple Top",
//         "price": "MRP : 500",
//       },
//       {
//         "image": lightblue,
//         "name": "Fancy Blue Saree",
//         "price": "MRP : 1100",
//       },
//       {
//         "image": party,
//         "name": "Glitter Party Wear",
//         "price": "MRP : 1400",
//       },
//       {
//         "image": orange,
//         "name": "Fancy Half Saree",
//         "price": "MRP : 900",
//       },
//     ]
//   },
//   {
//     "name": "jewels",
//     "banner": jewelbanner,
//     "title": 'Enhance Your Beauty',
//     "id": '3',
//     "products": [
//       {
//         "image": necklace,
//         "name": "Mysoria plate Necklace",
//         "price": "MRP : 50,000",
//       },
//       {
//         "image": jimiki1,
//         "name": "Pinky Diamond Earings",
//         "price": "MRP : 10,000",
//       },
//       {
//         "image": diamond,
//         "name": "Classic Silver Necklace",
//         "price": "MRP : 34,999",
//       },
//       {
//         "image": bangle,
//         "name": "Imported Vintage Bangle",
//         "price": "MRP : 19,999",
//       },
//       {
//         "image": silvear,
//         "name": "Arabia Silver Earings",
//         "price": "MRP : 14,999",
//       },
//       {
//         "image": emerald,
//         "name": "Emerald Necklace",
//         "price": "MRP : 24,999",
//       },
//       {
//         "image": pinkneck,
//         "name": "Pinky Fox Jewel",
//         "price": "MRP : 29,999",
//       },
//       {
//         "image": pairbr,
//         "name": "Royal Pair Bracelet",
//         "price": "MRP : 9999",
//       },
//     ]
//   }
// ]
function Dress() {
  const [Title, setTitle] = useState('')
  const [banner, setBanner] = useState('')
  const [products, setProducts] = useState([])
  const { id } = useParams()

  useEffect(() => {
    console.log(id);
    console.log(array);
    

    const Dress = array.filter(a => a.id == id)
    console.log(Dress);

    setTitle(Dress[0].title)
    setBanner(Dress[0].banner)
    setProducts(Dress[0].products)

    console.log(products);

  }, [])


  return (
    <div>
      <Container>
        <img
          style={{ height: '80vh' }}
          className='w-100 d-block vh-50'
          src={banner}
          alt=''
        />
        <h2 className='mt-5'><i>{Title ? Title : 'NO data'}</i></h2>
        <Row>
          {products.map(a =>
            <Col md={3}>
              <Card style={{ width: '100%', height: 'auto', marginTop: '30px' }}>
                <Card.Img variant="top" src={a.image} style={{ height: '254px' }} />
                <Card.Body>
                  <Card.Title className='fs-6'>{a.name}</Card.Title>
                  <Card.Text>
                    {a.price}
                  </Card.Text>
                  <Button variant="primary">Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>
          )}

          {/* <Col md={3}>
            <Card style={{ width: '100%', height: 'auto', marginTop: '30px' }}>
              <Card.Img variant="top" src={saree} style={{ height: '254px' }} />
              <Card.Body>
                <Card.Title className='fs-6'>Special Silk Saree</Card.Title>
                <Card.Text>
                  $299.00
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card style={{ width: '100%', height: 'auto', marginTop: '30px' }}>
              <Card.Img variant="top" src={chudi1} style={{ height: '254px' }} />
              <Card.Body>
                <Card.Title className='fs-6'>Purple Light Chudi</Card.Title>
                <Card.Text>
                  $129.29
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card style={{ width: '100%', height: 'auto', marginTop: '30px' }}>
              <Card.Img variant="top" src={lightblue} style={{ height: '254px' }} />
              <Card.Body>
                <Card.Title className='fs-6'>Classic Skyblue Saree</Card.Title>
                <Card.Text>
                  $399.00
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card style={{ width: '100%', height: 'auto', marginTop: '30px' }}>
              <Card.Img variant="top" src={orange} style={{ height: '254px' }} />
              <Card.Body>
                <Card.Title className='fs-6'>Vintage Half Saree</Card.Title>
                <Card.Text>
                  $99.00
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>

        {/* <Row style={{ marginTop: '100px' }}>
          <Col md={3}>
            <Card style={{ width: '100%', height: 'auto', marginTop: '30px' }}>
              <Card.Img variant="top" src={white} style={{ height: '254px' }} />
              <Card.Body>
                <Card.Title className='fs-6'>Casual White Wear</Card.Title>
                <Card.Text>
                  $299.00
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card style={{ width: '100%', height: 'auto', marginTop: '30px' }}>
              <Card.Img variant="top" src={party} style={{ height: '254px' }} />
              <Card.Body>
                <Card.Title className='fs-6'>Royal Black Party Wear</Card.Title>
                <Card.Text>
                  $129.29
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card style={{ width: '100%', height: 'auto', marginTop: '30px' }}>
              <Card.Img variant="top" src={blue} style={{ height: '254px' }} />
              <Card.Body>
                <Card.Title className='fs-6'>Classic Blue Top</Card.Title>
                <Card.Text>
                  $399.00
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card style={{ width: '100%', height: 'auto', marginTop: '30px' }}>
              <Card.Img variant="top" src={purple} style={{ height: '254px' }} />
              <Card.Body>
                <Card.Title className='fs-6'>Casual Purple Top</Card.Title>
                <Card.Text>
                  $99.00
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row> */}
      </Container>

      <div style={{ marginTop: '100px' }}>
        <Footer />
      </div>

    </div>
  )
}

export default Dress