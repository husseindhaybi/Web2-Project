import 'bootstrap-icons/font/bootstrap-icons.css';
import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/navBar.css";

function NavBar({ cartCount }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <i className="bi bi-shop text-warning me-2" style={{ fontSize: '32px' }}></i>
          Delicious Bites
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">
              <i className="bi bi-house-fill me-1"></i>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/menu">
              <i className="bi bi-book-fill me-1"></i>
              Menu
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              <i className="bi bi-info-circle-fill me-1"></i>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              <i className="bi bi-telephone-fill me-1"></i>
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className="cart-link">
              <i className="bi bi-cart-fill me-1"></i>
              Cart
              {cartCount > 0 && (
                <Badge bg="danger" className="ms-2">
                  {cartCount}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;