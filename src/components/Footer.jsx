import "../assets/styles/footer.css";

function Footer() {
  return (
    <div className="footer">
        <div className="footer_content">
            <div className = "footer_container">
                <h2>About Us</h2>
                <p>We are a company dedicated to providing the best products and services to our customers.</p>
            </div>
            <div className = "footer_container">
                <h2>Contact Us</h2>
                <p>1234 Street Name, City, State, 12345</p>
                <p>Phone: (123) 456-7890</p>
                <p>Email:   </p>
            </div>
            <div className = "footer_container">
                <h2>Follow Us</h2>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
            <div className="footer_container">
                <h2>Subscribe to our Newsletter</h2>
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
            </div>
        </div>
        <div className="footer_bottom">
            <p>© 2025 Rav's Coffee Shop. All rights reserved.</p>
        </div>
    </div>
  );
}

export default Footer;