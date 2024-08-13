import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <img src="./assets/IMAGE (38).png" alt="" />
      </div>
      <div className="right">
        <ul>
          <li>
            <a href="shop">shop</a>
          </li>
          <li>
            <a href="About us">About us</a>
          </li>
          <li>
            <a href="Our team">Our team</a>
          </li>
          <li>
            <a href="Buyer's guides">Buyer's guides</a>
          </li>
          <li>
            <a href="Categories">Categories</a>
          </li>
        </ul>
        <button>Buy template</button>
        <img src="./assets/Frame (64).png" alt="" />
      </div>
    </div>
  );
};

export default Header;
