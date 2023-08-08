import './page.css'
import { useParams } from 'react-router-dom'

const Contact = () => {
  const {name} = useParams()
  return (
    <div className='container'>
      contact
      <p>{name}</p>
    </div>
  )
}

export default Contact
