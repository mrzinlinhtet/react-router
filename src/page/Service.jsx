import "./page.css";
import { useNavigate,useLocation } from "react-router-dom";

const Service = () => {
  const nav = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    nav(-1);
  };
  return (
    <div className="container">
      <p>{location.state?.text}</p>
      <h1>Service</h1>
      <button onClick={handleClick}>Back</button>
    </div>
  );
};

export default Service;
