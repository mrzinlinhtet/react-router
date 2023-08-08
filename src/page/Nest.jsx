import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"

const Nest = () => {
  return (
    <div className='container'>
        <p>nest</p>
        <ul>
            <li><Link to={"/nest"}>One</Link></li>
            <li><Link to={"/nest/two"}>Two</Link></li>
            <li><Link to={"/nest/three"}>Three</Link></li>
        </ul>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Nest
