import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import BackGroundTheme from "../BackGroundTheme/BackGroundTheme";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import MenuDivider from "../UserAuthentication/AuthPageMenuDivider.jsx";
import BottomOfCartPage from "../BottomOfMainPage/BottomOfMainPage.jsx";

import "./CSS/CartPage.css";

import CartContainer from "./subComponents/CartContainer.jsx";
import CartPageRightContainer from "./subComponents/CartPageRightContainer.jsx";

function CartPage(props) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    document.title = "Amazon.com Shopping Cart";
  }, []);

  return (
    <div className="cartPageContainer">
      <Header />
      <BackGroundTheme />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="cartPage">
          <CartContainer isSignedIn={false} cartItems={cartItems} />

          <CartPageRightContainer isSignedIn={false} cartItems={cartItems} />
        </div>
      </div>

      <BottomOfCartPage />
      <Footer />
    </div>
  );
}

export default CartPage;
