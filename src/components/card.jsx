import React from "react";
 
const Card = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price: ₹{product.Price}</p>
      <p>Rating: {product.rating} ★</p>
    </div>
  );
};
 
export default Card;