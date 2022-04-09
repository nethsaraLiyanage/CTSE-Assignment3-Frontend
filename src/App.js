import './App.css';
// import  { useState } from 'react';
import {Routes , Route , BrowserRouter as Router} from 'react-router-dom';
import Announcement from './components/Announcement';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NewsLetter from './components/Newsletter';
import Footer from './components/Footer';
// import RegisterPage from './pages/auth/RegisterPage';
// import LoginPage from './pages/auth/LoginPage';
import Shop from './pages/Shop';
import Login from './pages/user/Login';
import Signup from './pages/user/Signup';
import Checkout from './components/Checkout';
import Cart from './pages/Cart';
import Product from './pages/Product';
import { API } from './config';

function App() {
  return (
    <div className="App">
      <Announcement/>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<h1>contact</h1>} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/not-found" element={<h1>Not Found</h1>} />
          <Route path="Checkout" element={<Checkout />} />
        </Routes>
        {/* <NewsLetter /> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
