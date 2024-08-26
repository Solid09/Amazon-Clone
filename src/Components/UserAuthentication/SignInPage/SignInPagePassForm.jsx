import "./CSS/SignInPage.css";
import { useState, useEffect } from "react";
import AuthPageFooter from "../AuthPageFooter";
import AuthPageTopLogo from "../AuthPageTopLogo";

function SignInPagePass(props) {
  useEffect(() => {
    document.title = "Amazon Sign-In";
  }, []);

  return (
    <div className="signInPagePass">
      <AuthPageTopLogo />
      <div className="signInFormBorder" style={{ margin: "0 0 30px 0" }}>
        <div className="signInFormContainer">
          <h1
            style={{
              fontSize: "28px",
              margin: "0 0 20px 0",
              fontWeight: "normal",
              width: "100%",
            }}
          >
            Sign in
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "100%",
            }}
          >
            <span style={{ fontSize: "13px", margin: "0 5px 0 0" }}>
              {props.userEmail}
            </span>
            <a href="#" className="signInPass-changeEmail">
              Change
            </a>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              margin: "20px 0 0 0",
            }}
          >
            <label
              htmlFor="signInPassword"
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                color: "#111111",
                padding: "0 0 1px 2px",
                margin: "0 0 3px 0",
              }}
            >
              Password
            </label>
            <a href="#" className="signInPass-recoverPass">
              Forgot password?
            </a>
          </div>
          <input
            type="password"
            id="signInPassword"
            className="signIn-passwordInput"
          ></input>

          <a
            href="#"
            className="signIn-SignIn"
            style={{ margin: "20px 0 20px 0" }}
          >
            <span>Sign in</span>
          </a>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input type="checkbox" />
            <span style={{ fontSize: "13px", margin: "0 5px 0 5px" }}>
              Keep me signed in.
            </span>
            <a href="#" className="signInPass-detailsInfo">
              Details
            </a>
          </div>
        </div>
      </div>

      <AuthPageFooter />
    </div>
  );
}

export default SignInPagePass;
