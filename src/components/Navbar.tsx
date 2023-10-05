import { Link } from "react-router-dom";
// imaages
import logo from "../images/logo.png";
import sun from "../images/sun.png";

export default function Navbar() {
  return (
  <>
    <nav>
        <div className="container">
            <Link to="/"><img src={logo} alt="" className="logo" /></Link>
            <div className="menu">
                <Link to="/" className="is-active">HTML</Link>
                <Link to="/css">CSS</Link>
                <Link to="/javascript">JavaScript</Link>
                <Link to="/react">React</Link>
                <Link to="/git">Github</Link>
                <Link to="/terminal">Terminal</Link>
            </div>
            {/* <img src={sun} alt="sun" id="bgChange" /> */}
            {/* onClick={bgChange}  */}

            <button className="hamburger is-active">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>
  </>
  )
}