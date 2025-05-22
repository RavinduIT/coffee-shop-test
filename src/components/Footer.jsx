import "../assets/styles/footer.css";
import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim() && email.includes('@')) {
      const subject = "Newsletter Subscription - Rav's Coffee Shop";
      const body = `Hi,\n\nI would like to subscribe to your newsletter.\n\nMy email: ${email}\n\nThank you!`;
      const mailtoLink = `mailto:coffeeshop@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
      setSubscribed(true);
      setEmail("");
    } else {
      alert("Please enter a valid email address");
    }
  };

  const handleSocialClick = (platform) => {
    const phoneNumber = "+94701234567";
    let message = "";
    
    switch(platform) {
      case 'facebook':
        message = "Hi! I found you through your website. I'd like to follow your Facebook page.";
        break;
      case 'twitter':
        message = "Hi! I found you through your website. I'd like to follow your Twitter account.";
        break;
      case 'instagram':
        message = "Hi! I found you through your website. I'd like to follow your Instagram account.";
        break;
      default:
        message = "Hi! I found you through your website.";
    }
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="footer">
        <div className="footer_content">
            <div className="footer_container">
                <a href="#about" style={{textDecoration: 'none', color: 'inherit', fontSize: '20px', fontWeight: 'bold'}}>About Us</a>
                <p>We are a company dedicated to providing the best products and services to our customers.</p>
            </div>
            <div className="footer_container">
                <h2>Contact Us</h2>
                <p>No91, Galle Road, Matara.</p>
                <p>Phone: +94 70 123 4567</p>
                <p>Email: coffeeshop@gmail.com</p>
            </div>
            <div className="footer_container">
                <h2>Follow Us</h2>
                <p style={{cursor: 'pointer', color: '#1877F2'}} onClick={() => handleSocialClick('facebook')}>Facebook</p>
                <p style={{cursor: 'pointer', color: '#1DA1F2'}} onClick={() => handleSocialClick('twitter')}>Twitter</p>
                <p style={{cursor: 'pointer', color: '#E4405F'}} onClick={() => handleSocialClick('instagram')}>Instagram</p>
            </div>
            <div className="footer_container">
                <h2>Subscribe to our Newsletter</h2>
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
                    style={{padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px'}}
                />
                <button onClick={handleSubscribe} style={{
                    padding: '10px 20px',
                    backgroundColor: '#a1856a',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}>
                    {subscribed ? 'Subscribed!' : 'Subscribe'}
                </button>
            </div>
        </div>
        <div className="footer_bottom">
            <p>© 2025 Rav's Coffee Shop. All rights reserved.</p>
        </div>
    </div>
  );
}

export default Footer;