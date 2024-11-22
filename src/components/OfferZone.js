import React from 'react'
import { Container } from 'react-bootstrap'
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import { useState, useEffect } from 'react';

function OfferZone() {

  const [datas, setDatas] = useState([]);
 

  useEffect(() => {
    GetData();
  }, []);

  const GetData = () => {
    axios.get("https://673c367596b8dcd5f3f8edea.mockapi.io/productapi")
      .then(response => setDatas(response.data))
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  };

  let Giturl = "https://raw.githubusercontent.com/ashfaqnoor56/reactproject-1/refs/heads/main/src/components/images.js/"


  let offer = datas.filter(a => a.name == "offer banner")
  let offer1 = offer.filter(b => b.id == "82")
  let offer2 = offer.filter(c => c.id > "82")







  return (
    <Container >
      <h2 className='mb-5'>Mega Sale is on</h2>
      <Row>
        <Col md={8}>
          {offer1.map(item =>
            <img
              style={{ height: '80vh' }}
              className='w-100 d-block vh-50'
              src={Giturl + item.image}
              alt=''
            />
          )}
        </Col>
        <Col md={4}>
          <Carousel>
          {offer2.map(item1 =>
            <Carousel.Item>
                <img
                  style={{ height: '80vh' }}
                  className='w-100 d-block vh-50'
                  src={Giturl + item1.image}
                  alt=''
                />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
             )}
          </Carousel>
        </Col>


      </Row>
    </Container>


  )
}

export default OfferZone