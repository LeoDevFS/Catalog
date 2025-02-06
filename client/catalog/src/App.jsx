

import { useEffect, useState } from 'react'
import './App.css'

function App() {
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
    <div>
      {datos && datos.map((product, index) => (
        <div key={index}>
          <span>Brand: {product.brand}</span><br />
          <span>SAE: {product.sae}</span><br />
          <span>Gamma: {product.gamma}</span><br />
          {product.subname && <span>Subname: {product.subname}</span>}
          <hr />
        </div>
      ))}
    </div>
  )
  

};

export default App
