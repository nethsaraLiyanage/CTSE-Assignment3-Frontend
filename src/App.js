import './App.css';
import React, { useState } from 'react';
import {Routes , Route , BrowserRouter as Router} from 'react-router-dom';
import Announcement from './components/Announcement';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Categories from './pages/Categories';
import NewsLetter from './components/Newsletter';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Announcement/>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Categories />} />
          {/* <Route path="/categoryPage" element={<h1>category page</h1>} /> */}
          <Route path="/contact" element={<h1>contact</h1>} />
          <Route path="/signup" element={<h1>Sign up</h1>} />
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/cart" element={<h1>Cart</h1>} />
          <Route path="/not-found" element={<h1>Not Found</h1>} />
        </Routes>
        <NewsLetter />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
