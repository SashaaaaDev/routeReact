import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {BrowserRouter, NavLink, Routes, Route} from "react-router-dom"
import "./App.css";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import UseNavigation from "./components/UseNavigation.jsx";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <h1 className="title">Main page</h1>
      <nav className="navigation">
        <NavLink className="navigation-element" to="/">Home</NavLink>
        <NavLink className="navigation-element" to="/about">About</NavLink>
        <NavLink className="navigation-element" to="/contact">Contact</NavLink>
        <NavLink className="navigation-element" to="/use-navigation">UseNavigation</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/use-navigation" element={<UseNavigation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
