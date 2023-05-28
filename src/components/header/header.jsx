import React from 'react';
import { FaGithubSquare,FaFacebook, FaInstagram,FaLinkedin } from "react-icons/fa";
import './header.css'
import imageee from '../../assest/Screenshot 2023-05-28 224035.jpg'
const Header = () => {
  return (
    <div>
      <nav className='portfolio-navbar'>
        <div className='logo'>
          <img src={imageee} alt="" />
        </div>
        <div className='main-navbar'>
        <ul className='menu-items'>
            <li><a href=""> Home </a></li>
            <li> <a href=""> About</a></li>
            <li><a href="">
                Portfolio</a></li>
            <li><a href=""> Contact</a></li>
            <li><a href=""> Hire Me</a></li>
            <li><a href=""> Sign in</a></li>

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
