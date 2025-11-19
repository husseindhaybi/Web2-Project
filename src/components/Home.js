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

      <Container className="my-5">
        <h2 className="text-center mb-5">Featured Dishes</h2>
        <Row>
          {featuredDishes.map((dish) => (
            <Col md={4} key={dish.id} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={dish.image}
                  alt={dish.name}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{dish.name}</Card.Title>  
                  <Card.Text>{dish.description}</Card.Text>
                  <h5 className="text-warning">${dish.price}</h5>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <Button as={Link} to="/menu" variant="primary" size="lg">
            See Full Menu
          </Button>
        </div>
      </Container>
          
          

           <div className="bg-light py-5">
        <Container>
          <Row className="text-center">
            <Col md={4}>
              <i className="bi bi-star-fill text-warning mb-3" style={{ fontSize: "80px" }}></i>
              <h4>Premium Quality</h4>
              <p>Fresh ingredients sourced daily</p>
            </Col>
            <Col md={4}>
              <i className="bi bi-truck text-primary mb-3" style={{ fontSize: "80px" }}></i>
              <h4>Fast Delivery</h4>
              <p>Hot food delivered to your door</p>
            </Col>
            <Col md={4}>
              <i className="bi bi-person-badge text-success mb-3" style={{ fontSize: "80px" }}></i>
              <h4>Expert Chefs</h4>
              <p>Prepared by culinary masters</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default Home;