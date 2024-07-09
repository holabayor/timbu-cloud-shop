import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home.tsx';
import CartPage from './pages/CartPage.tsx';
import CheckoutPage from './pages/CheckoutPage.tsx';
import ProductDetailPage from './pages/ProductDetailPage.tsx';
import GoToTop from './components/GoToTop.tsx';
import PaymentPage from './pages/PaymentPage.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product" element={<ProductDetailPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
      <GoToTop />
    </Router>
  );
};

export default App;
