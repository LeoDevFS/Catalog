import { Link } from "react-router-dom";
import "../App.css";
import GetAll from "../components/GetAll";

function Home() {
  return (
    <>
    <div className="bodyHome">
    <h1 className="namePage">Home</h1>
      <nav className="navBar">
        <button>FILTERS</button>
        <input type="text" placeholder="search" />
        <Link to={"/dashboard"}>Dashboard</Link>
      </nav>
      <GetAll />
    </div>

    </>
  );
}

export default Home;
