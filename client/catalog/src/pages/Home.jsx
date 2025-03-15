import { Link } from "react-router-dom"
import "../App.css"
import GetAll from "../components/GetAll"
import { useState } from "react"
import FilterSelector from "../components/FilterSelector"




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
        <div className="linkDashboard">
        <Link  to={"/dashboard"}>Dashboard</Link>
        </div>
      
        
      </nav>
      <GetAll filters={filters} />
    </div>

    </>
  );
}

export default Home;
