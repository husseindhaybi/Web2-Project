import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/cart.css";

function Cart({ cartItems, updateQuantity, removeFromCart, clearCart }) {
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);
}
  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };
  
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    
    const orderId = Math.random().toString(36).substring(2, 10).toUpperCase();
    localStorage.setItem("currentOrderId", orderId);
    clearCart();
    setOrderPlaced(true);
    
    setTimeout(() => {
      navigate("/order-tracking");
    }, 2000);
  };
return (
    <div></div>
);
export default Cart;
