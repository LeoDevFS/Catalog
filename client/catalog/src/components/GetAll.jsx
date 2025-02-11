

import { useEffect, useState } from 'react'
import '../App.css'

function GetAll() {
const [datos,setDatos]=useState(null)

  useEffect(()=>{
    const getApi=async()=>{
      try {
        const response = await fetch("http://localhost:3000")
        const datos= await response.json()
        console.log(datos)
        setDatos(datos)
      } catch (error) {
        console.error("error al acceder a la api",error)
      }
    }
    getApi();
  },[])
    
  return (
    <div className='productListContainer'>
      {datos && datos.map((product) => (
        <div key={product._id} className='productCard'>
          <img className='aceiteIndividual' src="https://www.castrol.com/content/dam/castrol/country-sites-new/en_gb/united-kingdom/home/car-engine-oils/egde_0w20_ll_iv.jpg" alt="aceite" /><br />
          <span>Brand: {product.brand}</span><br />
          <span>SAE: {product.sae}</span><br />
          <span>Gamma: {product.gamma}</span><br />
          {product.subname && <span>Subname: {product.subname}</span>}
          
        </div>
      ))}
    </div>
  )
  

};

export default GetAll
