import React, { useState } from "react";
import Logo from "../../assets/nikeLogo.png";
import "./navbar.css";
function Navbar() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <div className="nav-container">
        <nav className="nav-menu">
          <div className="logo">
            <img className="nike-logo" src={Logo} alt="" />
          </div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search"
              value={inputValue}
              onChange={handleInputChange}
            />
            <i className="fa-solid fa-magnifying-glass search"></i>
          </div>
          <div className="shop-cart">
            <i class="fa-regular fa-heart" style={{ color: "#ffffff" }}></i>
            <i
              className="fa-solid fa-cart-shopping"
              style={{ color: "#ffffff" }}
            ></i>
          </div>
        </nav>
      </div>
      <div className="title-container">
        <div className="title-box">
          <h1 data-aos="fade-right" className="">
            SNEAKERS
          </h1>
          <h1 data-aos="fade-left" className="name">
            SNEAKERS
          </h1>
          <h1 data-aos="fade-right" className="">
            SNEAKERS
          </h1>
          <div data-aos="fade-up" className="text-info">
            <p>Built to run the floor, our‘Fundamental’ white, black</p>
            <p>colorway keeps the newest AJ true tour Jordan Brand DNA.</p>
            <button className="btn">Shop</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
