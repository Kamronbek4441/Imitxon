import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img src="./assets/IMAGE (39).png" alt="" />

      <div className="left">
        <div>
          <h3>Pages</h3>
          <p>Home</p>
          <p>Shop</p>
          <p>Categories</p>
          <p>Buyer's guides</p>
          <p>404</p>
          <p>Password</p>
        </div>
        <div>
          <h3>categories</h3>
          <p>Hiking Gear</p>
          <p>Climbing Gear</p>
          <p>Jackets</p>
          <p>Accessories</p>
          <p>Apparel</p>
          <p>Headwear</p>
        </div>
        <div>
          <h3>Company</h3>
          <p>About us</p>
          <p>Our team</p>
          <p>Contact</p>
          <p>Terms </p>
          <p>Style guide</p>
          <p>Licenses</p>
        </div>
        <div className="div">
          <h3>Newsletter</h3>
          <h4>
            Subscribe to our (infrequent) newsletter where we share news <br />{" "}
            about upcoming listings and projects.
          </h4>
        </div>
        <div className="input-btn">
          <input type="email" placeholder="Email" />
          <button>Submit</button>
        </div>
      </div>
      <div className="footerc">
        <p>© Outdoor Exploration, LLC. All rights reserved. Powered by</p>
        <img src="./assets/Frame (68).png" alt="" />
      </div>
    </div>
  );
};

export default Footer;
