import { useState, useEffect } from "react";
import { Container, Card, ProgressBar } from "react-bootstrap";

function OrderTracking() {
  const [orderId] = useState(
    localStorage.getItem("currentOrderId") || "N/A"
  );
  const [orderStatus, setOrderStatus] = useState(0);

  const statuses = [
    "Order Received",
    "Preparing Your Food",
    "Out for Delivery",
    "Delivered",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setOrderStatus((prev) => {
        if (prev < statuses.length - 1) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container className="order-tracking-page my-5">
      <h1 className="text-center mb-5">Track Your Order</h1>

      <Card className="shadow mx-auto" style={{ maxWidth: "600px" }}>
        <Card.Body>
          <div className="text-center mb-4">
            <div style={{fontSize: '150px', marginBottom: '20px'}}>📦</div>
            <h4>Order ID: {orderId}</h4>
          </div>

          <ProgressBar
            now={((orderStatus + 1) / statuses.length) * 100}
            variant="success"
            className="mb-4"
            style={{ height: "25px" }}
          />

          <div className="status-list">
            {statuses.map((status, index) => (
              <div
                key={index}
                className={`status-item p-3 mb-2 rounded ${
                  index <= orderStatus ? "bg-success text-white" : "bg-light"
                }`}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <span>{status}</span>
                  {index <= orderStatus && (
                    <span style={{fontSize: '25px'}}>✅</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {orderStatus === statuses.length - 1 && (
            <div className="alert alert-success mt-4 text-center">
              <strong>Your order has been delivered!</strong>
              <p>Thank you for choosing Delicious Bites!</p>
            </div>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default OrderTracking;