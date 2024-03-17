import React from "react";
import { useNavigate } from "react-router-dom";

const UseNavigation = () => {
  const navigate = useNavigate();
  const link = () => {
    navigate("/");
  }
  return <div className="container"> 
    <p>Тестування useNavigation з посиланням на головну сторінку.</p>
    <button className="btn" onClick={link}>Клац сюди</button>
  </div>
}
export default UseNavigation; 