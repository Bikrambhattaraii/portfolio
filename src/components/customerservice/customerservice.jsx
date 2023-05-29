import "./customerservice.css";
import { FaUserNinja,FaReact,FaImages } from "react-icons/fa";
import { BsWordpress } from "react-icons/bs";
const SkillsData = [
  {
    id: "1", icon: FaUserNinja, name: "web desig", description:"Web development is the process of creating websites and web applications. It involves desig. ",
  },
  {
    id: "2", icon: FaReact, name: "web desig", description:"Web development is the process of creating websites and web applications. It involves designing, ",
  },
  { 
    id: "3",icon: BsWordpress, name: "web desig", description:"Web development is the process of creating websites and web applications. It involves designing, ",
}, 
{ 
  id: "3", icon: FaImages,name: "web desig",description: "Web development is the process of creating websites and web applications. It involves designing, ",
},
];
const Customerservice = () => {
  return (
    <>
      <div className="container-customerservice">
        <h1>Experience your website </h1>
        <h2> Development here</h2>
        <h3>Web Development</h3>
       
        {SkillsData.map((data, index) => (
       <div className="card-container"> 
          <div className="card-skills-container"> 
          <p>{<data.icon size={30} />}</p>
          <h1>{data.name}</h1>
          <p>{data.description}</p>
          
          

          </div>
        </div>
        ))}
      </div>
    </>
  );
};
export default Customerservice;

