import React from "react";
import "./information.css";
import image144 from '../../assest/image2.jpg';
const Information = () => {
  return (
    <div className="main-container-information-section">
      <div className="information-left-container">
        <h1>Hello, I’m Freelancer <br /> & <br /> Web Developer</h1>
        <p>
          Hello! I’m Bikram Bhattarai. st
          udent of Nagarjuna College of IT.
          Recently I'm learning React Js and have Few knowledge about Computer
          Science. Im passionate about learning Information and Technology .
          currently im Web Developer with little knowlegde of HTML CSS
          JavaScript, C-programming ,C++, PHP, MySQL and Asp .net
        </p>
      <button className="information-button">Download CV</button>
      </div>
      <div className="information-right-container">
        <img src={image144} alt="" className="image-information"/>
    
      </div>
    </div>
  );
};

export default Information;
