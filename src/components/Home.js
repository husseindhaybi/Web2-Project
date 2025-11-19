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
    <div>

    </div>
  );
}
export default Home;