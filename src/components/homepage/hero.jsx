import Button from "../reusablebutton/button";
import "./home.css";
import React from "react";
import Bikram from "../../assest/bikram.png"

const Home = () => {
  return (
    <div className="home-main-container">
      <div className="home-left-container">
        <h1> Bikram <br></br> Bhattarai</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, non.
        </p>
        <button className="hero-buttons">Contact Me</button>
        <button className="hero-buttons">Hire Me</button>
      </div>
      <div className="home-right-container">
        <div className="image-container">
            <img src={Bikram} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
