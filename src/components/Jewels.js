import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';  
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';



function Jewels() {

  const [datas, setDatas] = useState([])

  let Giturl = "https://raw.githubusercontent.com/ashfaqnoor56/reactproject-1/refs/heads/main/src/components/images.js/"

  const navigate = useNavigate()

  useEffect(() => {
    GetData();
  }, []);

  async function GetData() {
    let data = await axios.get("https://673c367596b8dcd5f3f8edea.mockapi.io/productapi")
      .then(response => setDatas(response.data))
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  };

  const handleClick = (id) => {
console.log(id);
navigate(`/showproduct/${id}`)

  }

  let filterData = datas?.filter(a => a.listingType === "jewels"); 
  console.log(filterData);
  
  let bannerFilter = datas.filter(b => b.name == "jewel banner")
  console.log(bannerFilter);
  return (
    <div>
       
       <Container>
       {bannerFilter.map(item=>
         <img
         style={{height:'80vh'}}
        className='w-100 d-block vh-50'
        src={Giturl + item.image}
        alt=''
        />
       )}
        <h2 className='mt-5'><i>Winter is Coming</i></h2>
        <Row>
   {filterData.map(items=>
     <Col md={3} onClick={() =>handleClick(items.id)}>
     <Card style={{ width: '100%', height: 'auto', marginTop: '30px' }}>
       <Card.Img variant="top" src={Giturl + items.image} style={{height:'254px'}}  className='hoverimage'/>
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

 <div style={{marginTop:'100px'}}>
  <Footer />
 </div>
    </div>
  )
}

export default Jewels