import "./customercard.css"
import { FaUserNinja,FaReact,FaImages } from "react-icons/fa";
import { BsWordpress } from "react-icons/bs";
const SkillsData = [
    {
      id: "1", icon: FaUserNinja, name: "Digital Production", description:"Web development is the process of creating websites and web applications. It involves desig. ",
    },
    {
      id: "2", icon: FaReact, name: "Project", description:"Web development is the process of creating websites and web applications. It involves designing, ",
    },
    { 
      id: "3",icon: BsWordpress, name: "wordpress", description:"Web development is the process of creating websites and web applications. It involves designing, ",
  }, 
  { 
    id: "3", icon: FaImages,name: "theme development",description: "Web development is the process of creating websites and web applications. It involves designing, ",
  },
  ];
const Customerservicecard = () => {
  return (
    <>
      
        {SkillsData.map((data, index) => (
          <div className="card-container"> 
             <div className="card-skills-container"> 
             <p>{<data.icon size={30}   className="icon-customercard"/>}</p>
             <h1>{data.name}</h1>
             <p>{data.description}</p>
             
             
        
             </div>
           </div>
           ))}
    </>
  )
}

export default Customerservicecard
