import React from 'react';
import { FaInstagram,FaFacebookSquare ,FaLinkedin,FaYoutube} from "react-icons/fa";
import './footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-column">
          <h3>Follow Me</h3>
          <ul>
            <li><a href="https://www.facebook.com/jiten.bhattarai.18/" target="blank"><FaFacebookSquare color="white" size={20}/></a></li>
            <li><a href="https://www.instagram.com/bikram_bhattaraii/" target="blank"><FaInstagram color="white" size={20}/></a></li>
            <li><a href="https://www.linkedin.com/in/bikram-bhattarai-68718423a/" target="blank"><FaLinkedin color="white" size={20}/></a></li>
            <li><a href="" target="blank"><FaYoutube color="white" size={20}/></a></li>
           </ul>
        </div>
        <div className="footer-column">
          <h3>Hire Me</h3>
          <p>If you're interested in working with me, feel free to get in touch.</p>
          <a href="#" className="hire-button">Hire Me</a>
        </div>
        <div className="footer-column">
          <h3>More Links</h3>
          <ul className="footer-links">
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
