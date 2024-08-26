import amazonLogo from './Assets/amazonlogo.jpg'

function AuthPageTopLogo() {
  return (
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
  );
}

export default AuthPageTopLogo;
