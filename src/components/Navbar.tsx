import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
  <>
    <nav>
        <div className="container">
            <Link to="index.html"><img src="./images/logo.png" alt="" className="logo" /></Link>
            <div className="menu">
                <Link to="/" className="is-active">HTML</Link>
                <Link to="/css">CSS</Link>
                <Link to="/javascript">JavaScript</Link>
                <Link to="/react">React</Link>
                <Link to="/git">Github</Link>
            </div>
            {/* <img onClick={bgChange} src="images/sun.png" alt="" id="bgChange" /> */}
            <img src="./images/sun.png" alt="" id="bgChange" />

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
