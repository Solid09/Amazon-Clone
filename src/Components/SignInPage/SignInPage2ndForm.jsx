import "./CSS/SignInPage.css";
import amazonLogo from "./Assets/amazonLogo.jpg";
import { useState } from "react";
import SignInPageFoot from "./SignInPageFoot.jsx";

function SignInPage2ndForm(props) {
  return (
    <div className="signInPage2ndForm">
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
      <div className="signInFormBorder" style={{margin:'0 0 30px 0'}}>
        <div className="signInFormContainer">
          <h1
            style={{
              fontSize: "28px",
              margin: "0 0 20px 0",
              fontWeight: "normal",
              width:"100%",
            }}
          >
            Sign in
          </h1>
          <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center', width:'100%',}}>
            <span style={{fontSize:'13px', margin:'0 5px 0 0'}}>{props.userEmail}</span>
            <a href="#" className="signIn2ndForm-changeEmail">Change</a>
          </div>
          <div style={{
            display:'flex',
            justifyContent:'space-between',
            width:'100%',
            margin:'20px 0 0 0',
          }}>
            <label
              for="signInPassword"
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
            <a href="#" className="signIn2ndForm-recoverPass">
              Forgot password?
            </a>
          </div>
          <input
            type="password"
            id="signInPassword"
            className="signIn-passwordInput"
          ></input>

          <a href="#" className="signIn-SignIn" style={{margin:'20px 0 20px 0'}}>
            <span>Sign in</span>
          </a>

          <div style={{display:'flex', justifyContent:"center", alignItems:'center'}}>
            <input type="checkbox"/>
            <span style={{fontSize:'13px', margin:'0 5px 0 5px'}}>Keep me signed in.</span>
            <a href="#" className="signIn2ndForm-detailsInfo">Details</a>
          </div>
        </div>
      </div>

      <SignInPageFoot />
    </div>
  );
}

export default SignInPage2ndForm;
