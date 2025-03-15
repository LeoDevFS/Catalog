import "../App.css";
import { Link } from "react-router-dom";
import FormCreateProduct from "../components/FormCreateProduct";
import square from "../assets/square.png";

function Dashboard() {
  return (
    <>
      <div>Dashboard</div>
      <Link to={"/"}>
        <img src={square} className="homeIcon" alt="house Icon"  style={{margin:"30px",width:"2%"}}/>
      </Link>
      <FormCreateProduct />
    </>
  );
}

export default Dashboard;
