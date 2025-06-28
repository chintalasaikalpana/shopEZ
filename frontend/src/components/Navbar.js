import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ cartCount }) {
  return (
    <nav>
      <div className="nav-left">
        <Link to="/">ShopEZ</Link>
      </div>
      <div className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
}

export default Navbar;
