import "./CSS/NavBar.css";

import logo from "./Assets/amazonLogo.jpeg";
import usFlag from "./Assets/UnitedStatesFlag.png";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="leftBarContainer">
        <Link to="/">
          <img src={logo} alt="amazon logo" className="amazonLogo" />
        </Link>
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
        <Link className="authButton" to="/signin-email">
          <p>
            Hello, sign in
            <br />
            <b style={{ fontSize: '0.875rem' }}>Account &amp; Lists</b>
          </p>
        </Link>
        <div className="returnsAndOrdersText">
          <p>
            Returns
            <br />
            <b style={{ fontSize: "0.875rem"}}>&amp; Orders</b>
          </p>
        </div>
        <Link className="cart" to="/cart">
          <p>Cart</p>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
