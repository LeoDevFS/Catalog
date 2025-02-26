import { useEffect, useState } from "react";
import "../App.css";
import Modal from "./Modal";

function GetAll() {
  const [datos, setDatos] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await fetch("http://localhost:4000");
        const datos = await response.json();
        setDatos(datos);
      } catch (error) {
        console.error("error al acceder a la api", error);
      }
    };
    getApi();
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="productListContainer">
      {datos &&
        datos.map((product) => (
          <div key={product._id} className="productCard" onClick={() => openModal(product)}>
            <img
              className="aceiteIndividual"
              src="https://www.castrol.com/content/dam/castrol/country-sites-new/en_gb/united-kingdom/home/car-engine-oils/egde_0w20_ll_iv.jpg"
              alt="aceite"
            />
            <div className="card-body">
              <h2 className="card-title"> {product.brand} </h2>
              <p className="card-text"> {product.sae}</p>
              <p className="card-text">{product.gamma}</p>
              {product.subname && <p className="card-text">{product.subname}</p>}
            </div>
          </div>
        ))}
      <Modal isOpen={isModalOpen} onClose={closeModal} product={selectedProduct} />
    </div>
  );
}

export default GetAll;
