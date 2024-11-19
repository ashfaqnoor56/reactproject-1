import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import image1 from './images.js/FBIMG-2.jpg';
import image2 from './images.js/FBIMG-6.jpg';
import image3 from './images.js/FBIMG-5.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import accessories from './images.js/ladies-accessories.jpg';
import dress from './images.js/women dress.webp';
import jewels from './images.js/jewels.jpg';
import bags from './images.js/women bags.jpeg';
import jack from './images.js/jack and coat.jpeg';
import makeup from './images.js/women makeup.jpg';
import shoes from './images.js/women shoes.jpeg';
import OfferZone from './OfferZone';
import Product from './Product';
import Footer from '../Footer';

function Home() {
  const navigate = useNavigate();

  // function handleClick(item) {
  //   console.log(item);
  
  //   navigate(`/dress/${item}`);
  // }

  return (
    <>
      {/* #Banner Carousel */}
      <Container>
        <Carousel>
          <Carousel.Item>
            <img
              style={{ height: '80vh' }}
              className="w-100 d-block vh-50"
              src={image1}
              alt=""
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: '80vh' }}
              className="w-100 d-block"
              src={image2}
              alt=""
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: '80vh' }}
              className="w-100 d-block"
              src={image3}
              alt=""
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      {/* #Categories */}
      <Container className="mt-5">
        <Swiper
          style={{ marginTop: '100px' }}
          spaceBetween={50}
          slidesPerView={7}
          loop={true} 
          
          
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Link to="/dress/1" className="text-decoration-none text-dark">
              <img
                style={{ height: '200px', borderRadius: '50%' }}
                className="w-100"
                src={accessories}
                alt="Accessories"
              />
              <h6 className="text-center mt-3">Accessories</h6>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/dress/2" className="text-decoration-none text-dark">
              <img
                style={{ height: '200px', borderRadius: '50%' }}
                className="w-100"
                src={dress}
                alt="Dress"
              />
              <h6 className="text-center mt-3">Dress</h6>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/dress/3" className="text-decoration-none text-dark">
              <img
                style={{ height: '200px', borderRadius: '50%' }}
                className="w-100"
                src={jewels}
                alt="Jewels"
              />
              <h6 className="text-center mt-3">Jewels</h6>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/dress/4" className="text-decoration-none text-dark">
              <img
                style={{ height: '200px', borderRadius: '50%' }}
                className="w-100"
                src={bags}
                alt="Bags"
              />
              <h6 className="text-center mt-3">Bags</h6>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/dress/5" className="text-decoration-none text-dark">
              <img
                style={{ height: '200px', borderRadius: '50%' }}
                className="w-100"
                src={jack}
                alt="Jackets & Coat"
              />
              <h6 className="text-center mt-3">Jackets & Coat</h6>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/dress/6" className="text-decoration-none text-dark">
              <img
                style={{ height: '200px', borderRadius: '50%' }}
                className="w-100"
                src={makeup}
                alt="Makeup Set"
              />
              <h6 className="text-center mt-3">Makeup Set</h6>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/dress/7" className="text-decoration-none text-dark">
              <img
                style={{ height: '200px', borderRadius: '50%' }}
                className="w-100"
                src={shoes}
                alt="Shoes"
              />
              <h6 className="text-center mt-3">Shoes</h6>
            </Link>
          </SwiperSlide>
        </Swiper>
      </Container>

      {/* #home Product */}
      <Product />

      {/* #offerzone */}
      <div style={{ marginTop: '100px' }}>
        <OfferZone />
      </div>

      {/* #Footer */}
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
}

export default Home;
