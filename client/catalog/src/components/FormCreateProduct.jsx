import { useState } from "react"
import approvals from "../assets/approvals"


function FormCreateProduct() {
  const [brand, setBrand] = useState("")
  const [sae, setSae] = useState("")
  const [gamma, setGammma] = useState("")
  const [subname, setSubname] = useState("")
  const [liters, setLiters] = useState("")
  const [price,setPrice] = useState("")
  const [selectedApprovals, setSelectedApprovals] = useState([])
  const [expandedKey, setExpandedKey] = useState(null)

  const urlApiCreate = `${import.meta.env.VITE_APP_APIURL}/create`
  const [res, setRes] = useState(null)


  const handleSubmit = async (e) => {
    
    e.preventDefault()
    setRes("");
    const payload = {
      brand,
      sae,
      gamma,
      subname,
      liters: Number(liters),
      price: Number(price),
      approval: selectedApprovals,
    };
    console.log(payload)
    try {
      const response = await fetch(urlApiCreate, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      console.log("Response status:", response.status)
      if (response.ok) {
        const data = await response.json()
        setRes(` ${data.brand} ${data.sae}`)
        setBrand("")
        setGammma("")
        setSae("")
        setSubname("")
        setLiters("")
        setPrice("")
        setSelectedApprovals([])
      }else{
        console.error("Error in response:", response.statusText)
      }
    } catch (error) {
      console.error(error)
    }
  }
  const handleApprovalChange = (approval) => {
    setSelectedApprovals((prevState) =>
      prevState.includes(approval)
        ? prevState.filter((a) => a !== approval)
        : [...prevState, approval]
    )
  }
  const handleKeyClick = (key) => {
    setExpandedKey(expandedKey === key ? null : key)
  }


  return (
    <>
      <form className="formCreateProduct" onSubmit={handleSubmit}>
        <div className="textInputs">
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            id="inputBrand"
            placeholder="BRAND"
            required
          />
          <br />
          <input
            type="text"
            value={sae}
            onChange={(e) => setSae(e.target.value)}
            id="inputSae"
            placeholder="SAE/DENSIDAD"
            required
          />
          <br />
          <input
            type="text"
            value={gamma}
            id="inputGamma"
            placeholder="GAMMA"
            onChange={(e) => setGammma(e.target.value)}
            required
          />
          <br />
          <input
            type="text"
            value={subname}
            id="inputSubname"
            placeholder="SUBNAME"
            onChange={(e) => setSubname(e.target.value)}
          />
          <br />
          <input
            type="number"
            value={liters}
            id="inputLiters"
            placeholder="LITERS"
            onChange={(e) => setLiters(e.target.value)}
            required
          />
          <br />
          <input
            type="number"
            value={price}
            id="inputPrice"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="approvalAdder">
          
          <div className="allApprovals" >
            {Object.entries(approvals).map(([key, values]) => (
              <div key={key} >
                <div onClick={() => handleKeyClick(key)} style={{ cursor: "pointer", fontWeight: "bold" }}>
                  {key}
                </div>
                {expandedKey === key && (
                  <div style={{ marginLeft: "20px" }}>
                    {values.map((value, index) => (
                      <div key={index}>
                        <input
                          type="checkbox"
                          id={`approval-${key}-${index}`}
                          value={`${key}: ${value}`}
                          onChange={() => handleApprovalChange(`${key}: ${value}`)}
                          checked={selectedApprovals.includes(`${key}: ${value}`)}
                        />
                        <label htmlFor={`approval-${key}-${index}`}>{value}</label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div>
            <div className="selectedApprovals">
            <h4>Selected Approvals</h4>
              {selectedApprovals.map((approval, index) => (
                <div  key={index}>{approval}</div >
              ))}
            </div>
          </div>
        </div>
        <br />
        <button type="submit"> Crear</button>
      </form>
      {res && <h2>Se ha creado el producto : {res}</h2>}
    </>
  )
}

export default FormCreateProduct
