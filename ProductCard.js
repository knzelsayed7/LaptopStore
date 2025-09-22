// src/components/ProductCard.js
import React from "react";

const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="product-card">
            <img 
                src={product.thumbnail} 
                alt={product.title} 
                className="product-img" 
                style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;
