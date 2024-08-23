import Header from "./Components/Header/Header.jsx";
import MainPage from "./Components/MainPage/MainPage.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import BottomOfMainPage from "./Components/BottomOfMainPage/BottomOfMainPage.jsx";
import SignInPage1stForm from "./Components/SignInPage/SignInPage1stForm.jsx";
import SignInPage2ndForm from "./Components/SignInPage/SignInPage2ndForm.jsx";

import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [data, setData] = useState([, []]);
  const productData = useRef(null);
  const [userSignInEmail, setUserSignInEmail] = useState("name@email.com");

  //getting product data from json file
  const loadData = async () => {
    try {
      const data = await import("./Product.json");
      setData(data.default);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    //data ready to process
    if (data) {
      productData.current = getCategoriesData();
    } else {
      console.log("Not yet loaded!");
    }
  }, [data]);

  //arranging data into categories
  const getCategoriesData = () => {
    let _productData = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i]) {
        const categoryIndex = _productData.findIndex(
          (p) => p.category === data[i].category
        );

        if (categoryIndex !== -1) {
          //looks for that category to append to its data
          _productData[categoryIndex] = {
            ..._productData[categoryIndex],
            details: [..._productData[categoryIndex].details, data[i]],
          };
        } else {
          // If the category does not exist then adds a new category
          _productData.push({
            category: data[i].category,
            details: [data[i]],
          });
        }
      }
    }
    return _productData;
  };
  /*<div className="container">
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
        <MainPage productData = {productData}/>
      </div>

      <BottomOfMainPage />

      <div className="footer">
        <Footer />
      </div>
    </div> */

  return <SignInPage2ndForm userEmail={userSignInEmail} />;
}

export default App;
