import React from 'react';
import { FaGithubSquare,FaFacebook, FaInstagram,FaLinkedin } from "react-icons/fa";
import './header.css'
const Header = () => {
  return (
    <div>
      <nav className='portfolio-navbar'>
        <p>logo</p>
        <div className='main-navbar'>
        <ul className='menu-items'>
            <li><a href=""> Home </a></li>
            <li> <a href=""> About</a></li>
            <li><a href="">
                Portfolio</a></li>
            <li><a href=""> Contact</a></li>
            <li><a href=""> Hire Me</a></li>

        </ul>
        <ul className='icons'>
            <li><a href=""> <FaFacebook  size={30} /></a></li>
            <li><a href=""> <FaLinkedin size={30}/> </a></li>
            <li><a href=""> <FaInstagram size={30}/></a></li>
            <li> <a href=""><FaGithubSquare size={30}/></a></li>
        </ul>
     </div> 
     </nav>
    </div>
  )
}

export default Header
