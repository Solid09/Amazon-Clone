import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import BackGroundTheme from "../BackGroundTheme/BackGroundTheme";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import BottomOfCartPage from "../BottomOfMainPage/BottomOfMainPage.jsx";

import "./CSS/CartPage.css";

import CartContainer from "./subComponents/CartContainer.jsx";
import CartPageRightContainer from "./subComponents/CartPageRightContainer.jsx";
import { useAuth } from "../../auth.js";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const { userDoc, isSignedIn } = useAuth();

  const addItemsToCart = (item) => {
    setCartItems(cartItems.concat(item));
  };

  const removeCartItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  useEffect(() => {
    document.title = "Amazon.com Shopping Cart";
  }, []);

  return (
    <div className="cartPageContainer">
      <Header />
      <BackGroundTheme />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="cartPage">
          <CartContainer
            isSignedIn={isSignedIn}
            cartItems={cartItems}
            removeCartItem={removeCartItem}
          />

          <CartPageRightContainer
            isSignedIn={isSignedIn}
            cartItems={cartItems}
            addItemsToCart={addItemsToCart}
          />
        </div>
      </div>

      <BottomOfCartPage />
      <Footer />
    </div>
  );
}

export default CartPage;
