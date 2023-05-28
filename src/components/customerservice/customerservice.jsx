import "./customerservice.css";
import React from "react";
import { FaUserNinja,FaReact,FaImages } from "react-icons/fa";
import { BsWordpress } from "react-icons/bs";
const SkillsData = [
  {
    id: "1",
    icon: FaUserNinja,
    name: "web desig",
    description:
      "Web development is the process of creating websites and web applications. It involves designing, coding, and maintaining websites to meet specific requirements and deliver a seamless user experience. ",
  },
  {id: "3",
    icon: FaReact,
    name: "web desig",
    description:
      "Web development is the process of creating websites and web applications. It involves designing, coding, and maintaining websites to meet specific requirements and deliver a seamless user experience. ",
  },
  {id: "3",
  icon: BsWordpress,
  name: "web desig",
  description:
    "Web development is the process of creating websites and web applications. It involves designing, coding, and maintaining websites to meet specific requirements and deliver a seamless user experience. ",
}, 
{id: "3",
icon: FaImages,
name: "web desig",
description:
  "Web development is the process of creating websites and web applications. It involves designing, coding, and maintaining websites to meet specific requirements and deliver a seamless user experience. ",
},
];
const Customerservice = () => {
  return (
    <>
      <div className="container-customerservice">
        <h1>Experience your website </h1>
        <h2> Development here</h2>
        <h3>Web Development</h3>
      </div>
    </>
  );
};

export default Customerservice;
