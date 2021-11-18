import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Join the Newsletter</p>
        <p className="footer-subscription-text">You can unsubscribe anytime</p>
        <div className="input-areas">
          <form>
            <input
              type="Email"
              name="email"
              placeholder="Your E-Mail"
              className="footer-input"
            />
            <Button buttonStyle="btn--ouline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/joinus">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Contact us</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Facebook</Link>
            <Link to="/">Instagram</Link>
            <Link to="/">Twitter</Link>
            <Link to="/">Pinterest</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              BCKPCKN
              <i class="fas fa-atom" />
            </Link>
          </div>
          <small className="website-rights">BCKPCKN 2021</small>

          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link pinterest"
              to="/"
              target="blank"
              aria-label="Pinteres"
            >
              <i className="fab fa-pinterest" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
