import "./CSS/Navbar.css";

import logo from "./Assets/amazonLogo.jpeg";
import usFlag from "./Assets/UnitedStatesFlag.png";

function Navbar() {
  return (
    <>
      <div className="leftBarContainer">
        <a href="#">
          <img src={logo} alt="amazon logo" className="amazonLogo" />
        </a>
        <button className="deliveryButton">
          <span className="deliveryText"> Deliver to</span>
          <span className="delveryCountryText"> Pakistan </span>
        </button>
      </div>
      <div className="centerBarContainer">
        <button className="filterButton">All</button>
        <input className="searchInputField" placeholder="Search Amazon"></input>
        <button className="searchButton">Search</button>
      </div>
      <div className="rightBarContainer">
        <button className="languageButton">
          <img src={usFlag} alt="en lang" className="languageFlag"></img>
          <span className="langText">
            <b>EN</b>
          </span>
        </button>
        <button className="authButton">
          <p>
            Hello, sign in
            <br />
            <b style={{ fontSize: '0.875rem' }}>Account &amp; Lists</b>
          </p>
        </button>
        <div className="returnsAndOrdersText">
          <p>
            Returns
            <br />
            <b style={{ fontSize: "0.875rem"}}>&amp; Orders</b>
          </p>
        </div>
        <div className="cart">
          <p>Cart</p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
