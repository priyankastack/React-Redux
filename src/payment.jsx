import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import Cart from './cart.jsx';

export default function Payment() {
  const cartItems = useSelector((state) => state.cart.cartItems); // ✅ Get cart items from Redux

  return (
    <div id="contact-section-form">
      <form id="form">
        <label>
          <b>Enter card number:</b><br/>
          <input type="text" placeholder="Enter card number" className="input" required />
        </label>
        <label>
          <b>Card Expiry date:</b><br/>
          <input type="date" className="input" required />
        </label>
        <label>
          <b>Enter CVV number:</b><br/>
          <input type="text" placeholder="Enter CVV number" className="input" required />
        </label>
        <button id="submit-btn">Submit</button>
      </form>
      <Cart isOnShopPage={false} />
    </div>
  );
}
