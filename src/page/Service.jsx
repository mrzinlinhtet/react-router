import "./page.css";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const nav = useNavigate();

  const handleClick = () => {
    nav(-1);
  };
  return (
    <div className="container">
      <h1>Service</h1>
      <button onClick={handleClick}>Back</button>
    </div>
  );
};

export default Service;
