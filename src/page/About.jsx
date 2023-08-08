import { useRef } from 'react';
import "./page.css";
import { useSearchParams } from "react-router-dom";

const About = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const formRef = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    console.log(formRef.current.name.value);
    console.log(formRef.current.age.value);
    setSearchParams({
      name: formRef.current.name.value,
      age: formRef.current.age.value,
    });
  };

  const handleGet = () => { 
    console.log(searchParams.get("name"), searchParams.get("age"));
  }

  return (
    <div className="container">
      <form ref={formRef} action="">
        <input type="text" name="name" placeholder="Enter name"/>
        <input type="number" name="age" placeholder="Enter age" />
        <button onClick={handleClick}>Click</button>
      </form>
      <button onClick={handleGet}>Get</button>
    </div>
  );
};

export default About;
