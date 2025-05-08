import "../assets/styles/footer.css";

function Footer() {
  return (
    <div className="footer">
        <div className="footer_content">
            <div className = "footer_container">
                <a href = "#about">About Us</a>
                <p>We are a company dedicated to providing the best products and services to our customers.</p>
            </div>
            <div className = "footer_container">
                <h2>Contact Us</h2>
                <p>No91, Galle Road, Matara.</p>
                <p>Phone: +94 76 546 6894</p>
                <p>Email:  rav.coffeeshop@gmail.com  </p>
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