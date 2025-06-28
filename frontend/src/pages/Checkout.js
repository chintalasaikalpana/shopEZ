import React from 'react';

function Checkout({ cartItems }) {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
  };

  return (
    <div className="container">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <li key={item._id}>
                {item.name} - {item.quantity} x ${item.price} = ${item.price * item.quantity}
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
          <button onClick={handlePlaceOrder}>Place Order</button>
        </>
      )}
    </div>
  );
}

export default Checkout;
