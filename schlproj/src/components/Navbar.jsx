import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <div>

      <div className="top-box">
        <span>Admissions Open 2026-27</span>
        <span>Call: +91 6304899452</span>
      </div>

      <nav className="navbar">
        <h2 className="logo">Open Minds</h2>

        <ul className="menu">
        <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/programs">Programs</Link></li>
          <li><Link to="/admissions">Admissions</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <button className="enroll">Enroll Now</button>
      </nav>

    </div>
  );
}

export default Navbar;