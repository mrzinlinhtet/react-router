import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Admin = () => {
  const nav = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      nav(-1);
    }
  },[]);
  return <div className="container">admin</div>;
};

export default Admin;
