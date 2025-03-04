import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
  const [datos, setDatos] = useState(null)
  const { _id } = useParams()

  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await fetch(`http://localhost:3000/id/${_id}`)
        if (!response.ok) {
          throw new Error('API not ok')
        }
        const res = await response.json()
        setDatos(res)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    };
    if (_id) {
      getApi()
    }
  }, [_id]);

  return (
    <>
      <div>ProductDetails</div>
      {datos ? (
        <div>
          <h1>{datos.brand}</h1>
          <p>SAE: {datos.sae}</p>
          <p>Gamma: {datos.gamma}</p>
          <p>Price: {datos.price}</p>
          {datos.subname && <p>Subname: {datos.subname}</p>}
          <button>DELETE</button>
          <button>EDIT</button>
        </div>

      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default ProductDetails;