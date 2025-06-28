import React from 'react';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: 20, margin: 10, width: 250 }}>
      <img src={product.image} alt={product.name} width="200" />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}
