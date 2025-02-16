import { useState } from "react";

function FormCreateProduct() {
  const [brand, setBrand] = useState('')
  const [sae, setSae] = useState('')
  const [gamma, setGammma] = useState('')
  const [subname,setSubname]= useState('')
  const [liters,setLiters] = useState('')

  const urlApiCreate = "http://localhost:3000/create"
  const [res,setRes]=useState(null)
  const payload = {brand,sae,gamma,subname,liters}

  const handleSubmit = async(e)=>{
    e.preventDefault()
    setRes('')
    try {
      const response = await fetch(urlApiCreate,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(payload)
      })
      if(response.ok){
        const data = await response.json()
        setRes(` ${data.brand} ${data.sae}`)
        setBrand('')
        setGammma('')
        setSae('')
        setSubname('')
        setLiters('')
      }

    } catch (error) {
      console.error(error)
    }
  }



  return (
    <>
      <form className="formCreateProduct" onSubmit={handleSubmit}>
        <input
          type="text"
          value={brand}
          onChange={(e)=>setBrand(e.target.value)}
          id="inputBrand"
          placeholder="BRAND"
        />
        <br />
        <input
          type="text"
          value={sae}
          onChange={(e)=>setSae(e.target.value)}
          id="inputSae"
          placeholder="SAE/DENSIDAD"
        />
        <br />
        <input
          type="text"
          value={gamma}
          id="inputGamma"
          placeholder="GAMMA"
          onChange={(e)=>setGammma(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={subname}
          id="inputSubname"
          placeholder="SUBNAME"
          onChange={(e)=>setSubname(e.target.value)}
        />
        <br />
        <input
          type="number"
          value={liters}
          id="inputLiters"
          placeholder="LITERS"
          onChange={(e)=>setLiters(e.target.value)}
        />
        <br />
        <button type="submit"> Crear</button>
      </form>
      {res && <h2>Se ha creado el producto : {res}</h2>}
      
    </>
  );
}

export default FormCreateProduct;
