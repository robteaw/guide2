import {useState} from 'react';
import { Link } from "react-router-dom";
// imaages
import logo from "../images/logo.png";
// icons
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [click, setClick] = useState(false);

   // Close nav menu
   const handleClick = () => setClick(!click);
   const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav>
        <div className="container">
            <Link to="/"><img src={logo} alt="" className="logo" onClick={closeMobileMenu} /></Link>
            <div className={click ? "menu active" : "menu"}>
                <Link to="/" className="nav-item">HTML</Link>
                <Link to="/css" className="nav-item">CSS</Link>
                <Link to="/javascript" className="nav-item">JavaScript</Link>
                <Link to="/react" className="nav-item">React</Link>
                <Link to="/git" className="nav-item">Github</Link>
                <Link to="/terminal" className="nav-item">Terminal</Link>
            </div>
            <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>        
          </div>
      </nav>
    </>
  )
}
