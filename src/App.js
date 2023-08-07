import Nav from "./components/Nav";
import About from "./page/About"
import Contact from "./page/Contact"
import Home from "./page/Home"
import Service from "./page/Service"
import Error from "./page/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />"
      </Routes>
    </Router>
  )
}

export default App
