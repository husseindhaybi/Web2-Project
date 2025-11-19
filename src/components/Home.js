import 'bootstrap-icons/font/bootstrap-icons.css';
import BeefBurger from '../data/assets/BeefBurger.jpg';
import salad from '../data/assets/Salad.jpg';
import Salamon from '../data/assets/Salamon.jpg';
import "../styles/home.css";

function Home() {
  const featuredDishes = [
    {
      id: 1,
      name: "Grilled Salmon",
      image: Salamon,
      price: 24.99,
      description: "Fresh Atlantic salmon with herbs",
    },
    {
      id: 2,
      name: "Beef Burger",
      image: BeefBurger,
      price: 15.99,
      description: "Juicy beef patty with cheese",
    },
    {
      id: 3,
      name: "Caesar Salad",
      image: salad,
      price: 12.99,
      description: "Crispy lettuce with parmesan",
    },
  ];

  return(
    <div className="home-page">
        <div className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-50">
            <Col lg={6}>
              <h1 className="display-3 fw-bold text-white">
                Welcome to Delicious Bites
              </h1>
              <p className="lead text-white mb-4">
                Experience the finest cuisine in town. Fresh ingredients,
                authentic flavors, and exceptional service.
              </p>
              <Button
                as={Link}
                to="/menu"
                variant="warning"
                size="lg"
                className="me-3"
              >
                View Menu
              </Button>
              <Button
                as={Link}
                to="/contact"
                variant="outline-light"
                size="lg"
              >
                Reserve Table
              </Button>
            </Col>
            <Col lg={6}>
              <img
                src={restaurent}
                alt="Restaurant Interior"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default Home;