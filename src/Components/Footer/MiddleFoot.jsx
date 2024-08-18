import "./CSS/MiddleFoot.css";
import logo from "./Assets/amazonLogo.jpeg";
import usFlag from "./Assets/UnitedStatesFlag.png";

function MiddleFoot() {
  return (
    <div className="middleFoot">
      <a href="#">
        <img src={logo} alt="amazon logo" className="amazonLogoMiddle" />
      </a>

      <div className="threeItems">
        <a href="#">
          &#x1F30D;
          <span style={{ padding: "0 .5rem" }}> English</span>
        </a>
        <a href="#">
          <b style={{color:'white'}}>$</b>
          <span style={{ padding: "0 .5rem" }}>
            USD - U.S. Dollar
          </span>
        </a>
        <a href="#">
          <img
            src={usFlag}
            alt="en lang"
            style={{ height: "1rem", width: "1rem" }}
          ></img>
          <span style={{ padding: "0 .5rem" }}>United States</span>
        </a>
      </div>
    </div>
  );
}

export default MiddleFoot;
