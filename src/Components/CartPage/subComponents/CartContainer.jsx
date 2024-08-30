import { useState } from "react";

import "./CartContainer.css";
import signedOutImage from "../Assets/cartPageSignedOutImg.svg";

import MenuDivider from "../../UserAuthentication/AuthPageMenuDivider";

function CartContainer(props) {
  const [secondBoxIsFirstOptionSelected, setSecondBoxIsFirstOptionSelected] =
    useState(false);

  return (
    <div className="cartContainer">
      <div className={props.isSignedIn ? "cartBox" : "cartBoxSignedOut"}>
        {props.isSignedIn ? (
          <>
            <h2
              style={{
                margin: "0 0 5px 0",
                padding: "0",
                fontSize: "28px",
                fontWeight: "200",
              }}
            >
              Your Amazon Cart is empty.
            </h2>
            <span style={{ margin: "0", padding: "0", fontSize: "14px" }}>
              Your Shopping Cart lives to serve. Give it purpose — fill it with
              groceries, clothing, household supplies, electronics, and more.
              <br />
              Continue shopping on the{" "}
              <a href="#" className="cartPage-link">
                Amazon.com homepage
              </a>
              , learn about{" "}
              <a href="#" className="cartPage-link">
                today's deals
              </a>
              , or visit your{" "}
              <a href="#" className="cartPage-link">
                Wish List.
              </a>
            </span>
          </>
        ) : (
          <>
            <img src={signedOutImage} className="cartBoxSignedOut-img" />
            <div className="cartBoxSignedOut-rightPart">
              <h2 className="cartBoxSignedOut-header">
                Your Amazon Cart is empty
              </h2>
              <a href="#" className="cartBoxSignedOut-todaySDeals">
                Shop today's deals
              </a>
              <div className="cartBoxSignedOut-authLinksContainer">
                <a href="#" className="cartBoxSignedOut-signInLink">
                  Sign in to your account
                </a>
                <a href="#" className="cartBoxSignedOut-signUpLink">
                  Sign up now
                </a>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="SecondBox">
        {props.isSignedIn && (
          <>
            <h2
              style={{
                margin: "0 0 14px 0",
                padding: "0",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              Your Items
            </h2>
            <button
              className={
                secondBoxIsFirstOptionSelected
                  ? "SecondBox-firstBtnSelected"
                  : "SecondBox-firstBtn"
              }
              style={{ margin: "0 5px 0 18px" }}
              onClick={() => {
                setSecondBoxIsFirstOptionSelected(true);
              }}
            >
              No items saved for later
            </button>
            <button
              className={
                secondBoxIsFirstOptionSelected
                  ? "SecondBox-secondBtn"
                  : "SecondBox-secondBtnSelected"
              }
              onClick={() => {
                setSecondBoxIsFirstOptionSelected(false);
              }}
            >
              Buy it again
            </button>

            <MenuDivider />

            {secondBoxIsFirstOptionSelected ? (
              <div
                className="SecondBox-savedLaterItemsList"
                style={{ marginBottom: "40px" }}
              ></div>
            ) : (
              <div className="SecondBox-buyAgainItemsList">
                <span style={{ fontSize: "14px" }}>No items to Buy again.</span>
              </div>
            )}
          </>
        )}
      </div>

      <span style={{ fontSize: "12px" }}>
        The price and availability of items at Amazon.com are subject to change.
        The Cart is a temporary place to store a list of your items and reflects
        each item's most recent price.{" "}
        <a href="#" className="cartPage-link" style={{ fontSize: "12px" }}>
          Learn more
        </a>{" "}
        <br />
        Do you have a gift card or promotional code? We'll ask you to enter your
        claim code when it's time to pay.
      </span>
    </div>
  );
}

export default CartContainer;
