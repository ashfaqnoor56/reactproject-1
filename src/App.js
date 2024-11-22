
import './App.css';
import Home from './components/Home';

import Product from './components/Product';

import { BrowserRouter, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Acc from './components/Acc';
import Dress from './components/Dress';
import Jackets from './components/Jackets';
import Jewels from './components/Jewels';
import Makeup from './components/Makeup';
import Shoes from './components/Shoes';
import Footer from './Footer';
import Bags from './components/Bags';
import LoginForm from './components/Login';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';
import Blog from './components/Error';
import Navbarr from './components/Navbarr';
import Error from './components/Error';
import ShowProduct from './components/ShowProduct';

function App() {
  return (
    <div>
      {/* <Home />
      <Banner />
      <Product />
      <Footer /> */}

      <BrowserRouter>

      <Navbarr />
      
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acc" element={<Acc />} />
          {/* <Route path="/acc/:id" element={<Acc />} /> */}
          <Route path="/dress" element={<Dress />} />
          <Route path="/dress/:id" element={<Dress />} />
          <Route path="/jackets" element={<Jackets />} />
          <Route path="/bags" element={<Bags />} />
          <Route path="/jewels" element={<Jewels />} />
          <Route path="/makeup" element={<Makeup />} />
          <Route path="/shoe" element={<Shoes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/showproduct/:id" element={<ShowProduct />} />
          <Route path="*" element={<Error />} />


        </Routes>
      </BrowserRouter>

    
    </div>
  );
}

export default App;
