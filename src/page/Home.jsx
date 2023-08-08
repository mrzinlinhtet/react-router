import './page.css'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'

const Home = () => {
    const nav = useNavigate()
    const inputRef = useRef()
    const handleClick = () => {
      console.log(inputRef.current.value);
      nav('/service',{state:{text:inputRef.current.value}})
    }
  return (
    <div className='container'>
      <h1>Home</h1>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Home
