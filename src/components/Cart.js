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
  if (orderPlaced) {
    return (
      <Container className="my-5 text-center">
        <div className="alert alert-success">
          <h2>Order Placed Successfully!</h2>
          <p>Redirecting to order tracking...</p>
        </div>
      </Container>
    );
  }

   if (cartItems.length === 0) {
    return (
      <Container className="my-5 text-center">
        <i 
          className="bi bi-cart-x mb-4" 
          style={{ fontSize: "150px", color: "#6c757d" }}
        ></i>
        <h2>Your Cart is Empty</h2>
        <p className="text-muted">Add some delicious items to get started!</p>
        <Button variant="primary" onClick={() => navigate("/menu")}>
          Browse Menu
        </Button>
      </Container>
    );
  }

export default Cart;
