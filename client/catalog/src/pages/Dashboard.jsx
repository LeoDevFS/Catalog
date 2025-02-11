import '../App.css'
import { Link } from 'react-router-dom'
import FormCreateProduct from '../components/FormCreateProduct'


function Dashboard() {
  return (
    <>
    
    <div>Dashboard</div>
    <Link to={('/')}>Home</Link>
    <FormCreateProduct/>
    </>
  )
}

export default Dashboard