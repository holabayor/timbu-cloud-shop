import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home.tsx';
import CartPage from './pages/CartPage.tsx';
import CheckoutPage from './pages/CheckoutPage.tsx';
import ProductDetailPage from './pages/ProductDetailPage.tsx';
import GoToTop from './components/GoToTop.tsx';
import PaymentPage from './pages/PaymentPage.tsx';
import { CartProvider } from './context/cartContext.tsx';
import SuccessPage from './pages/SuccessPage.tsx';

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout/:productId" element={<CheckoutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/print-receipt" element={<SuccessPage />} />
        </Routes>
        <GoToTop />
      </Router>
    </CartProvider>
  );
};

export default App;
