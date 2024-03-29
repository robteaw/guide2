import React from "react";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes, // Switch has been replaced with Routes
  Route,
} from "react-router-dom"; // npm i react-router-dom
import Home from "./pages/Home/Home";
import Css from "./pages/Css/Css";
import Javascript from "./pages/Javascript/Javascript";
import React1 from "./pages/React/React1";
import Git from "./pages/GIt/Git";
import Terminal from "./pages/Terminal/Terminal";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop"; // Page stays on top when link clicked

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/css" element={<Css />} />
        <Route path="/javascript" element={<Javascript />} />
        <Route path="/react" element={<React1 />} />
        <Route path="/git" element={<Git />} />
        <Route path="/terminal" element={<Terminal />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}
