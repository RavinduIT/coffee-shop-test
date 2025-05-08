import "../assets/styles/navbar.css";
import { FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

function search() {
  console.log("Search clicked");
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." className="search-input" />
      <button className="search-button" onClick={search}>Search</button>
      
    </div>
  )
}

function Navbar() {
  return (
    <nav className="navbar">
      <img className="navbar__logo" src="/img/logo.png" alt="Logo" />

      <ul className="navbar__links">
        <li><a className="navbar__link" href="#home">HOME</a></li>
        <li><a className="navbar__link" href="#about">ABOUT US</a></li>
        <li><a className="navbar__link" href="#products">PRODUCTS</a></li>
        <li><a className="navbar__link" href="#customer">CUSTOMERS</a></li>
      </ul>


      <div className="navbar__icons">
        <FiShoppingCart className="navbar__icon" />
        <FaSearch className="navbar__icon" onClick={search}/>
      </div>
    </nav>
  );
}

export default Navbar;
