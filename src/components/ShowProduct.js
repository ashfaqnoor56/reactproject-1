import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { FaRegHeart } from "react-icons/fa6";
import {ToastContainer, toast} from 'react-toastify';

function ShowProduct() {

    const[datas, setDatas] = useState([]);
    const [isClicked, setIsClicked] = useState(false);

    const { id } = useParams()

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
    };
    console.log(datas);
    let filterData = datas.filter(a=>a.id == id)
    console.log(filterData);

   

  const handleClick = () => {
    setIsClicked(!isClicked);
    
  };
  return (
    <div>
       <Container>
        <Row style={{height:"70vh"}}>
          {filterData.map((a) => (
            <>
              <Col md={6}><img className="w-75" src={Giturl + a.image}/></Col>
              <Col md={6} className="d-flex justify-content-start align-items-start flex-column mt-5 fs-5">

              <div className='wishlist'>
              <h5>
                  <strong>Name:</strong>
                  {a.name}
                </h5>

                <button style={{backgroundColor: isClicked ? "red" : "white", border: 'none', borderRadius: '20%',
        cursor: 'pointer'}} onClick={handleClick}><FaRegHeart className='fs-3'/></button>
              </div>

                <h5 className="text-danger">
                  <strong>Price: </strong>
                  {a.price} INR
                </h5>

                <p>
                  <strong>Category:</strong>
                  {a.listingType}
                </p>

                <p>
                  <strong>Description:</strong>
                  {a.description}
                </p>

                <button className='w-50 bg-warning fw-bold'>Add to Cart</button>
                <button className='w-50 mt-3 bg-warning fw-bold'>Buy Now</button>

              </Col>
            </>
          ))} 
        </Row>
        
<ToastContainer />
      </Container>
    </div>
  )
}

export default ShowProduct