 import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Product from './components/ProductPage/ProductPage';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Container } from 'react-bootstrap';

function App() {
  return (
    <div >
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
