import Header from "./Components/Header/Header.jsx";
import MainPage from "./Components/MainPage/MainPage.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import BottomOfMainPage from './Components/BottomOfMainPage/BottomOfMainPage.jsx'

import "./App.css";


function App() {
  


  return (
    <div className="container">
      <div className="headerNav" style={{ maxHeight: "99px" }}>
        <Header />
      </div>

      <div
        className="backgroundColor"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "#E3E6E6",
          zIndex: "-2",
          margin: "0",
          padding: "0",
          top: "0",
        }}
      ></div>

      <div className="mainPage">
        <MainPage />
      </div>

      <BottomOfMainPage />

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
