import "./CSS/SignInPage.css";
import amazonLogo from "./Assets/amazonLogo.jpg";
import { useState } from "react";
import SignInPageFoot from "./SignInPageFoot.jsx";

function SignInPage() {
  const [needHelpIsActive, setNeedHelpIsActive] = useState(false);
  const handleNeedHelpBtnClick = () => {
    setNeedHelpIsActive((n) => !n);
  };

  return (
    <div className="signInPage">
      <a href="#">
        <img
          src={amazonLogo}
          alt="amazon logo"
          style={{
            width: "108px",
            height: "35px",
            objectFit: "cover",
            padding: "10px 0 0 0",
            margin: "0 0 10px 0",
          }}
        ></img>
      </a>
      <div className="signInFormBorder">
        <div className="signInFormContainer">
          <h1
            style={{
              fontSize: "28px",
              margin: "0 0 20px 0",
              fontWeight: "normal",
            }}
          >
            Sign in
          </h1>
          <label
            for="signInEmail"
            style={{
              fontSize: "13px",
              fontWeight: "bold",
              color: "#111111",
              padding: "0 0 1px 2px",
              margin: "0 0 3px 0",
            }}
          >
            Email or mobile phone number
          </label>
          <input
            type="text"
            id="signInEmail"
            className="signIn-emailInput"
          ></input>

          <a href="#" className="signIn-Continue">
            <span>Continue</span>
          </a>

          <div className="signIn-permissionText">
            <span>
              By continuing, you agree to Amazon's{" "}
              <a href="#" className="signIn-permissionText-Links">
                Conditions of
                <br />
                Use
              </a>{" "}
              and{" "}
              <a href="#" className="signIn-permissionText-Links">
                Privacy Notice.
              </a>
            </span>
          </div>

          <div className="signIn-needHelpContainer">
            <button
              onClick={handleNeedHelpBtnClick}
              style={{ margin: "0 0 0 5px" }}
              className={
                needHelpIsActive
                  ? "signIn-needHelp-arrowBottom"
                  : "signIn-needHelp-arrowRight"
              }
            >
              <span style={{ marginLeft: "-5px" }}>Need help?</span>
            </button>
            {needHelpIsActive && (
              <>
                <br />
                <a href="#" style={{ margin: "0 0 0 14px" }}>
                  Forgot your password?
                </a>
                <br />
                <a href="#" style={{ margin: "0 0 0 14px" }}>
                  Other issues with Sign-in
                </a>
              </>
            )}
          </div>

          <div className="signIn-menuDivider"></div>

          <div className="amazonBussinessLink">
            <b style={{ fontSize: "13px" }}>
              Buying for work?
              <br />
            </b>
            <a href="#" className="amazonBussinessLink-a">
              Shop on Amazon Business
            </a>
          </div>
        </div>
      </div>

      <div className="signIn-signUpLink">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: " 20px 0 0 0",
          }}
        >
          <div className="signIn-signUpLink-menuDivider"></div>
          <span className="signIn-signUpLink-text">New to Amazon?</span>
          <div className="signIn-signUpLink-menuDivider"></div>
        </div>
        <br />
        <a href="#" className="signIn-signUpLink-a">
          <span>Create your Amazon account</span>
        </a>
      </div>

      <SignInPageFoot />
    </div>
  );
}

export default SignInPage;
