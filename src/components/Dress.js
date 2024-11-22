
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Footer from '../Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Dress() {
 
  const [datas, setDatas] = useState([]);
  const [count, setCount] = useState("")
  const { id } = useParams()
  const navigate = useNavigate()  

  

  let Giturl = "https://raw.githubusercontent.com/ashfaqnoor56/reactproject-1/refs/heads/main/src/components/images.js/"


  useEffect(() => {
    GetData();
  }, []);

  async function GetData() {
    let dat = await axios.get("https://673c367596b8dcd5f3f8edea.mockapi.io/productapi")
      .then(response => setDatas(response.data))
      .catch(error => {
        console.error("Error fetching data:", error);
      });
      return dat
  };
  console.log(datas);

  const handleClick = (id) => {
    console.log(id);
    navigate(`/showproduct/${id}`)
  }

  let dressFilter = datas.filter(a=> a.listingType == "dress")
  let bannerFilter = datas.filter((banner) => banner.name == "dress banner")

  


  return (
    <div>
      <Container>
        {bannerFilter.map(data =>
          <img
            style={{ height: '80vh' }}
            className='w-100 d-block vh-50'
            src={Giturl + data.image}
            alt=''
          />
        )
        }
        <h2 className='mt-5'><i>Costume Makes Confidence</i></h2>
        <Row>
          {dressFilter.map(a =>
            <Col md={3} onClick={() => handleClick(a.id)}>
              <Card style={{ width: '100%', height: 'auto', marginTop: '30px' }}>
                <Card.Img variant="top" src={Giturl + a.image} style={{ height: '254px' }}  className='hoverimage'/>
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

         
        </Row>

       
      </Container>

      <div style={{ marginTop: '100px' }}>
        <Footer />
      </div>

    </div>
  )
}

export default Dress