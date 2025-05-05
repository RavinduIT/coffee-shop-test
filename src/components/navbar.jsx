import "../assets/styles/navbar.css";
import { FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="navbar">
      <img className="navbar__logo" src="/img/logo.png" alt="Logo" />

      <ul className="navbar__links">
        <li className="navbar__link">HOME</li>
        <li className="navbar__link">ABOUT US</li>
        <li className="navbar__link">PRODUCTS</li>
        <li className="navbar__link">CUSTORMERS</li>
      </ul>

      <div className="navbar__icons">
        <FiShoppingCart className="navbar__icon" />
        <FaSearch className="navbar__icon" />
      </div>
    </nav>
  );
}

export default Navbar;
