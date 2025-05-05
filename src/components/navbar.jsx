import "../assets/styles/navbar.css";
import { FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="navbar">
      <img className="navbar_logo" src="/img/logo.png" alt="Logo" />
      <ul className="navbar__links">
        <li className="navbar__link">Home</li>
        <li className="navbar__link">About</li>
        <li className="navbar__link">Services</li>
        <li className="navbar__link">Contact</li>
      </ul>
      <button className="navbar_cart"><FiShoppingCart /></button>
      <button className="navbar_search"><FaSearch /></button>
    </nav>
  );
}

export default Navbar;