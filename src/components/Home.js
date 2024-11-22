import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import image1 from './images.js/FBIMG-2.jpg';
import image2 from './images.js/FBIMG-6.jpg';
import image3 from './images.js/FBIMG-5.webp';
import OfferZone from './OfferZone';
import Product from './Product';
import Footer from '../Footer';
import { useEffect, useState } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Home() {

  const [datas, setDatas] = useState([]);
  const [count, setCount] = useState("")
  console.log(count);

  const navigate = useNavigate();

  function handleClick(id) {
    console.log(id);
    navigate(`/dress/${id}`);
  }

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

  // const filterData = datas?.filter((e) => e.listingType === "swiper");

  const uniqueIds = new Set();
  let filterData = datas.filter(element => {
    const isDuplicate = uniqueIds.has(element.listingType);
    uniqueIds.add(element.listingType);
    return !isDuplicate;
  });
  filterData = filterData.filter(a => a.listingType !== 'banner')
  filterData = filterData.filter(a => a.listingType !== 'swiper')
  console.log(filterData);

  const bannerFilter = datas.filter((banner) => banner.name == "home banner")
  console.log(bannerFilter);


  let Giturl = "https://raw.githubusercontent.com/ashfaqnoor56/reactproject-1/refs/heads/main/src/components/images.js/"

  
  switch (count) {
    case 0:
      navigate("/bags")
      break;
    case 1:
      navigate("/acc")
      break;
    case 2:
      navigate("/dress")
      break;
    case 3:
      navigate("/jewels")
      break;
    case 4:
      navigate("/jackets")
      break;
    case 5:
      navigate("/makeup")
      break;
    case 6:
      navigate("/shoe")
  }


  return (
    <>

      <Carousel>
        {bannerFilter.map(banner =>
          <Carousel.Item>
            <img
              style={{ height: '100vh' }}
              className="w-100 d-block vh-50"
              src={Giturl + banner.image}
              alt=""
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        )}
      </Carousel>


      <Container>
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 40
            },
            992: {
              slidesPerView: 6,
              spaceBetween: 20
            }
          }}
        >
          {
            filterData.map((items, index) => (
              <SwiperSlide key={index} >
                <img
                  onClick={() => setCount(index)}
                  // onClick={() => handleClick(items.id)}
                  src={Giturl + items.image}
                  alt={items.image + index}
                  style={{ marginTop: "50px", borderRadius: "50%", height: "200px", width: "152px", cursor: 'pointer' }}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </Container>

      <Product />

      <div style={{ marginTop: '100px' }}>
        <OfferZone />
      </div>

      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
}

export default Home;
