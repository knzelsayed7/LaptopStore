// src/pages/Cart.js
import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  if (!cart || cart.length === 0) {
    return (
      <div className="cart-page" style={{ textAlign: "center", padding: "50px" }}>
        <h2>Your Cart is Empty 🛒</h2>
      </div>
    );
  }

  return (
    <div className="cart-page" style={{ padding: "20px" }}>
      <h2>Your Shopping Cart</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {cart.map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              borderBottom: "1px solid #ccc",
            }}
          >
            <span>{item.title}</span>
            <span>${item.price}</span>
            <button
              onClick={() => removeFromCart(index)}
              style={{
                marginLeft: "20px",
                padding: "5px 10px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <h3 style={{ marginTop: "20px" }}>
        Total: $
        {cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
      </h3>
    </div>
  );
};

export default Cart;
