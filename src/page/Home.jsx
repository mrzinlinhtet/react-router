import './page.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const nav = useNavigate()

    const handleClick = () => {
        nav('/service')
    }
  return (
    <div className='container'>
      <h1>Home</h1>
      <button onClick={handleClick}>goto Service</button>
    </div>
  )
}

export default Home
