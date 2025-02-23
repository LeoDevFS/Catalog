import { Link } from "react-router-dom";
import "../App.css";
import GetAll from "../components/GetAll";
import {allSae, allBrands} from "../assets/gnrlData";
import Modal from "../components/Modal";



function Home() {
   console.log(allBrands)
   console.log(allSae)
   
  return (
    <>
    <div className="bodyHome">
    <h1 className="namePage">Home</h1>
      <nav className="navBar">
        <button>FILTERS</button>
        <input type="text" placeholder="search" />
        <Link to={"/dashboard"}>Dashboard</Link>
        <Link to={"/id/:_id"}>ProductDetails</Link>
        <button><Modal></Modal></button>
        
        
      </nav>
      <GetAll />
    </div>

    </>
  );
}

export default Home;
