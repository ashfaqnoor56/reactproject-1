import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import Footer from '../Footer';

import access from './images.js/accessories banner.jpg';
import rwatch from './images.js/redwatch.jpeg';
import bwatch from './images.js/blackwatch.jpeg';
import rbwatch from './images.js/rubypink.jpeg';
import gwatch from './images.js/goldwatch.jpeg';
import rolex from './images.js/leatherwatch.jpg';
import yellowwatch from './images.js/yellwatch.jpg';
import silverwatch from './images.js/siverwatch.jpg';
import bluewatch from './images.js/bracewatch.jpg';
import { Link, useNavigate } from 'react-router-dom';

function Acc() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate()
  
  useEffect(() => {
    const GetData = async () => {
      try {
        const response = await axios.get("https://673c367596b8dcd5f3f8edea.mockapi.io/productapi");
        setDatas(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); 
      }
    };
    GetData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  let Giturl = "https://raw.githubusercontent.com/ashfaqnoor56/reactproject-1/refs/heads/main/src/components/images.js/"


  let filterData = datas?.filter(a => a.listingType === "accessories"); 
  
  
  let bannerFilter = datas.filter(b => b.name == "acc banner")
  
  
  const handleClick = (id) => {
    console.log(id);
    navigate(`/showproduct/${id}`)
  }
  return (
    <div>
      <Container>
       {bannerFilter.map(item=>
         <img
         style={{ height: '80vh' }}
         className="w-100 d-block vh-50"
         src={Giturl + item.image}
         alt="accessories banner"
       />
       )}
        <h2 className="mt-5"><i>Glow Like a Princess</i></h2>

        <Row>
         {filterData.map(items=>
           <Col md={3} onClick={() => handleClick(items.id)}>
           <Card style={{ width: '100%', height: 'auto', marginTop: '30px' }}>
             <Card.Img variant="top" src={Giturl + items.image} style={{ height: '254px' }}  className='hoverimage' />
             <Card.Body>
               <Card.Title className="fs-6">{items.name}</Card.Title>
               <Card.Text>
                 {items.price}
               </Card.Text>
               <Button variant="primary" onClick={()=>handleClick(items.id)}>Buy Now {items.id}</Button>
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
  );
}

export default Acc;
