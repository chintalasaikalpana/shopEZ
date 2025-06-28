import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import AdminDashboard from './pages/AdminDashboard';
import Navbar from './components/Navbar';
import AuthProvider from './context/AuthContext';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const exist = cartItems.find(p => p._id === product._id);
    if (exist) {
      setCartItems(cartItems.map(p => p._id === product._id ? { ...p, quantity: p.quantity + 1 } : p));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter(p => p._id !== id));
  };

  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar cartCount={cartItems.length} />
        <Routes>
          <Route path="/" element={<Home onAddToCart={handleAddToCart} cartItems={cartItems} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
