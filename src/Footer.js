import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { click } from "@testing-library/user-event/dist/click";

function Footer() {
  const scrollhandle = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="footer">
      <button className="footer_button" onClick={scrollhandle}>
        Home
      </button>
      <div className="footer_info">
        <div className="footer_about">
          <strong>Get to Konw Us</strong>
          <span>About Us</span>
          <span>Careers</span>
          <span>Press Releases</span>
          <span>Amazon Science</span>
        </div>
        <div className="footer_connect">
          <strong>Connect with Us</strong>

          <Link className="footer_link" to="https://www.facebook.com/AmazonIN">
            Facebook
          </Link>
          <Link className="footer_link" to="https://twitter.com/AmazonIN">
            Twitter
          </Link>
          <Link
            className="footer_link"
            to="https://www.instagram.com/amazondotin"
          >
            Instagram
          </Link>
        </div>
        <div className="footer_money">
          <strong>Make Money with Us</strong>
          <span>Sell on Amazon</span>
          <span>Sell under Amazon Accelerator</span>
          <span> Protect and Build Your Brand</span>
          <span>Amazon Global Selling</span>
          <span>Become an Affiliate</span>
          <span>Fulfilment by Amazon</span>
          <span>Advertise Your Products</span>
          <span>Amazon Pay on Merchants</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
