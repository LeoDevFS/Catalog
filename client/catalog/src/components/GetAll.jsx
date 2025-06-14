/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import "../App.css"
import Modal from "./Modal"
import Loading from "../loading"

function GetAll({ filters }) {
  const [datos, setDatos] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getApi = async () => {
      try {
        const apiUrl = import.meta.env.VITE_APP_APIURL
        const response = await fetch(apiUrl)
        const datos = await response.json()
        console.log(datos)
        setDatos(datos)
      } catch (error) {
        console.error("error al acceder a la api", error)
      } finally {
        setLoading(false)
      }
    }
    getApi()
  }, [])

  const filteredProducts = datos
    ? datos.filter((product) => {
        return (
          (!filters.sae || product.sae === filters.sae) &&
          (!filters.brand || product.brand === filters.brand) &&
          (!filters.liters || String(product.liters) === String(filters.liters))
        )
      })
    : []

  const openModal = (product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  console.log(filteredProducts)

  if (loading) {
    return <Loading />
  }

  return (
    <div className="productListContainer">
      {filteredProducts &&
        filteredProducts.map((product) => (
          <div
            key={product._id}
            className={`productCard ${product.brand.toLowerCase()}`}
            onClick={() => openModal(product)}
          >
            <img
              className="aceiteIndividual"
              src="https://www.castrol.com/content/dam/castrol/country-sites-new/en_gb/united-kingdom/home/car-engine-oils/egde_0w20_ll_iv.jpg"
              alt="aceite"
            />
            <div className="card-body">
              <h2 className="card-title"> {product.brand} </h2>
              <p className="card-text"> {product.sae}</p>
              <p className="card-text">{product.gamma}</p>
              {product.subname && (
                <p className="card-text">{product.subname}</p>
              )}
            </div>
          </div>
        ))}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
      />
    </div>
  )
}

export default GetAll
