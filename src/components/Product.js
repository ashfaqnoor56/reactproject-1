import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Product() {


  const [image, setImage] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    GetData();
  }, []);

  const GetData = () => {
    axios
      .get("https://673c367596b8dcd5f3f8edea.mockapi.io/productapi")
      .then((response) => {

        const acc = response.data.filter((a) => a.id === "12");
        const dress = response.data.filter((a) => a.id === "21");
        const jewel = response.data.filter((a) => a.id === "28");
        const bag = response.data.filter((a) => a.id === "4");
        const jack = response.data.filter((a) => a.id === "39");
        const makeup = response.data.filter((a) => a.id === "46");
        const shoe = response.data.filter((a) => a.id === "52");
        const other = response.data.filter((a) => a.id === "7");


        console.log(acc);

        setImage([...acc, ...dress, ...jewel, ...bag, ...jack, ...makeup, ...shoe, ...other]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleClick = (id) => {
    console.log(id);
    navigate(`/showproduct/${id}`)
  }

  let Giturl = "https://raw.githubusercontent.com/ashfaqnoor56/reactproject-1/refs/heads/main/src/components/images.js/"






  return (
    <Container>
      <h2 style={{ marginTop: '100px' }} > Explore Popular Categories</h2>
      <Row className='mt-5'>

        {image && image.map(items =>
          <Col md={3}  onClick={() =>handleClick(items.id)}>
            <Card style={{ width: '100%', minHeightt: '254px', marginTop: '30px' }}>
              <Card.Img variant="top" src={Giturl + items.image} style={{ height: '254px' }}  className='hoverimage'/>
              <Card.Body>
                <Card.Title className='fs-6'>{items.name}</Card.Title>
                <Card.Text>
                  {items.price}
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        )}

      </Row>

     

    </Container>
  );
}

export default Product;