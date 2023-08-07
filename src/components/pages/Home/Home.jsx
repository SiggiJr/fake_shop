import { Link } from "react-router-dom";
import './Home.scss'

const Home = () => {
  return ( 
    <div className="home">
      <h1>Wilkommen im Shop</h1>
      <Link to={"/shop"}>Zum Shop</Link>
    </div>
  );
}

export default Home;