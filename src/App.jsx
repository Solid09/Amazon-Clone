import HomePage from "./Components/MainPage/HomePage.jsx";
import SignInPageEmailForm from "./Components/UserAuthentication/SignInPage/SignInPageEmailForm.jsx";
import SignInPagePassForm from "./Components/UserAuthentication/SignInPage/SignInPagePassForm.jsx";
import SignUpPage from "./Components/UserAuthentication/SignUpPage/SignUpPage.jsx";
import CartPage from "./Components/CartPage/CartPage.jsx";

import useFetchProductData from "./Hooks/useFetchProductData.jsx";

import "./App.css";
import { useState } from "react";

function App() {
  const { productData } = useFetchProductData(); //getting data from custom hook
  const [userSignInEmail, setUserSignInEmail] = useState("name@email.com");

  const handleSignInEmail = (value) => {
    setUserSignInEmail(value);
  };

  return <CartPage />;
}

export default App;
