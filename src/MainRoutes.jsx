import {Routes , Route , BrowserRouter as Router} from 'react-router-dom';
import { API } from './config';
import Announcement from './components/Announcement';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import SearchPage from './pages/Search';
import Login from './pages/user/Login';
import Signup from './pages/user/Signup';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Checkout from './components/Checkout';
import NewsLetter from './components/Newsletter';
import Footer from './components/Footer';
import Contact from './pages/Contact';
const MainRoutes = () => {
  return (
    <Router>
        <Announcement/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          {/* <Route path={`/product/${id}`} element={<Product  />} /> */}
          <Route path="/search" element={<SearchPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path='*'  element={<h1>Not Found</h1>} />
        </Routes>
        <NewsLetter />
        <Footer />
    </Router>
  )
}

export default MainRoutes