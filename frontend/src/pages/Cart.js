import React from 'react';

export default function Cart({ cartItems, onRemoveFromCart }) {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item._id}>
              <h3>{item.name}</h3>
              <p>Qty: {item.quantity}</p>
              <p>Price: ₹{item.price}</p>
              <button onClick={() => onRemoveFromCart(item._id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ₹{total}</h3>
    </div>
  );
}
