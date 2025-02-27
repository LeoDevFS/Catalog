import { Link } from "react-router-dom";
import "../App.css";
import GetAll from "../components/GetAll";
import { useState } from "react";
import FilterSelector from "../components/FilterSelector";




function Home() {
   const [filters,setFilters]=useState({
    sae:"",
    brand:"",
    litres:""
   })

   const handleFiltersChange =(e)=>{
    const {name,value}= e.target 
    setFilters({
      ...filters,
      [name]:value
    })
   }
  return (
    <>
    <div className="bodyHome">
    <h1 className="namePage">Home</h1>
      <nav className="navBar">
        <FilterSelector filters={filters} onFilterChange={handleFiltersChange}/>
        <input type="text" placeholder="search" />
        <Link to={"/dashboard"}>Dashboard</Link>
        {/*<Link to={"/id/:_id"}>ProductDetails</Link>*/}
        
      </nav>
      <GetAll filters={filters} />
    </div>

    </>
  );
}

export default Home;
