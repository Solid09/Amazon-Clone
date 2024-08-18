import TopOfFoot from "./TopOfFoot.jsx";
import MiddleFoot from "./MiddleFoot.jsx";
import BottomFoot from "./BottomFoot.jsx";

import "./CSS/Footer.css";

function Footer() {
  return (
    <>
      <a href="#" className="backToTop">
        Back to top
      </a>

      <TopOfFoot />

      <div className="topMenuDivider"></div>

      <MiddleFoot />

      <BottomFoot />

      <div className="footOfFooter">
        <div>
          <a href="#" className="footText">Condition of Use</a>
          <a href="#" className="footText">Privacy Notice</a>
          <a href="#" className="footText">Consumer Health Data Privacy Disclosure</a>
          <a href="#" className="footText">Your Ads Privacy Choices</a>
        </div>
        <span className="copyrigthText">&#169; 1996-2024, Amazon.com, Inc. or its affiliates</span>
      </div>
    </>
  );
}

export default Footer;
