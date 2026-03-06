import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Open Minds</h2>

      <ul className="menu">
        <li>Home</li>
        <li>About</li>
        <li>Programs</li>
        <li>Admissions</li>
        <li>Contact</li>
      </ul>

      <button className="enroll">Enroll Now</button>
    </nav>
  );
}

export default Navbar;