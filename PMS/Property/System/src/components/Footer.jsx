import React from "react";
import "../css/Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* About Section */}
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            At Property Management Solutions, we specialize in providing top-tier real estate services. 
            Our goal is to make property investment effortless, transparent, and rewarding.
          </p>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section newsletter">
          <h3>Stay Connected</h3>
          <p>Subscribe to receive exclusive property insights and investment opportunities.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" aria-label="Email Address" />
            <button className="signup-btn">Subscribe</button>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Our Properties</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <p>Stay updated on our latest offerings and industry news.</p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>
        
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 Property Management Solutions | 1234 Main St, New York, NY 10001 | Support: (123) 456-7890</p>
        <div className="footer-policy">
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> | <a href="#">Sitemap</a>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;
