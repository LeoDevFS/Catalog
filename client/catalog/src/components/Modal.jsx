/* eslint-disable react/prop-types */

import "../App.css";

function Modal({ isOpen, onClose, product }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{product.brand}</h2>
        <p>{product.sae}</p>
        <p>{product.gamma}</p>
        {product.subname && <p>{product.subname}</p>}
        <p>{product.price}€</p>
        <img
          className="aceiteIndividual"
          src="https://www.castrol.com/content/dam/castrol/country-sites-new/en_gb/united-kingdom/home/car-engine-oils/egde_0w20_ll_iv.jpg"
          alt="aceite"
        />
        <button className="close-button" onClick={onClose}>x</button>
      </div>
    </div>
  );
}

export default Modal;
