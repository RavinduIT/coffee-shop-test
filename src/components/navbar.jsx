import "../assets/styles/navbar.css";
import { FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      const productsSection = document.getElementById('products');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
        alert(`Searching for: ${searchTerm}`);
      }
    } else {
      setShowSearch(!showSearch);
    }
  };

  const handleCart = () => {
    const phoneNumber = "+94701234567";
    const message = "Hi! I'd like to place an order from your coffee shop menu.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

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
        <FiShoppingCart className="navbar__icon" onClick={handleCart} title="View Cart" />
        <FaSearch className="navbar__icon" onClick={handleSearch} title="Search Products" />
      </div>

      {showSearch && (
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search products..." 
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button className="search-button" onClick={handleSearch}>Search</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;