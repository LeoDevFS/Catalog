import { Link } from 'react-router-dom'
import '../App.css'
import GetAll from '../components/GetAll'


function Home() {
  return (

      <>
    <div>Home</div>
    <Link to={('/dashboard')}>Dashboard</Link>
    <GetAll/>
    </>
    )
  
}

export default Home