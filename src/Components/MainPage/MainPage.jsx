import { useState } from "react";

import kitchenItems from "./Assets/kitchenFav.jpg";
import books from "./Assets/Books.jpg";
import toys from "./Assets/Toys.jpg";
import gamingItems from "./Assets/GamingItems.jpg";
import beautyProducts from "./Assets/BeautyProducts.jpg";

import productPlaceHolderImg from "./Assets/productsPlaceHolderImg.jpeg";
import "./CSS/MainPage.css";

function MainPage() {
  const [imgIndex, setImgIndex] = useState(0);
  let bgImages = [kitchenItems, books, toys, gamingItems, beautyProducts];

  const handleForwardClick = () => {
    setImgIndex((i) => (1 + i) % bgImages.length);
  };
  const handleBackClick = () => {
    if (imgIndex > 0) {
      setImgIndex((i) => i - 1);
    } else {
      setImgIndex((i) => 4);
    }
  };

  return (
    <>
      <div className="bgImg" style={{ width: "1500px" }}>
        <img
          src={bgImages[imgIndex]}
          alt="background image"
          className="bgImg_img"
        ></img>

        <div
          className="bgImg_btns"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button
            className="imgForwardBtn"
            onClick={handleForwardClick}
          ></button>
          <button className="imgBackBtn" onClick={handleBackClick}></button>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(2, 1fr)",
          gap: "20px",
          padding: "0 20px",
        }}
      >
        <div className="productContainer">
          <h2>Gaming accessories</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "repeat(2, 1fr)",
              gap: "20px",
            }}
          >
            <a href="#">
              <img src={productPlaceHolderImg}></img>
              <span>Headsets</span>
            </a>
            <a href="#">
              <img src={productPlaceHolderImg}></img>
              <span>Keyboards</span>
            </a>
            <a href="#">
              <img src={productPlaceHolderImg}></img>
              <span>Computer mice</span>
            </a>
            <a href="#">
              <img src={productPlaceHolderImg}></img>
              <span>Chairs</span>
            </a>
          </div>
          <a href="#" className="seeMoreLink">
            See More
          </a>
        </div>

        <div className="productContainer">
          <h2>Refresh your space</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "repeat(2, 1fr)",
              gap: "20px",
            }}
          >
            <a href="#">
              <img src={productPlaceHolderImg}></img>
              <span>Dining</span>
            </a>
            <a href="#">
              <img src={productPlaceHolderImg}></img>
              <span>Home</span>
            </a>
            <a href="#">
              <img src={productPlaceHolderImg}></img>
              <span>Kitchen</span>
            </a>
            <a href="#">
              <img src={productPlaceHolderImg}></img>
              <span>Health and Beauty</span>
            </a>
          </div>
          <a href="#" className="seeMoreLink">
            See More
          </a>
        </div>

        <div className="productContainer">
          <h2>Shop deals in Fashion</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "repeat(2, 1fr)",
              gap: "20px",
            }}
          >
            <a href="#">
              <img src={productPlaceHolderImg}></img>
              <span>Jeans under $50</span>
            </a>
            <a href="#">
              <img src={productPlaceHolderImg}></img>
              <span>Tops under $25</span>
            </a>
            <a href="#">
              <img src={productPlaceHolderImg}></img>
              <span>Dresses under $30</span>
            </a>
            <a href="#">
              <img src={productPlaceHolderImg}></img>
              <span>Shoes under $50</span>
            </a>
          </div>
          <a href="#" className="seeMoreLink">
            See all deals
          </a>
        </div>

        <div className="productContainer" style={{ flex: "1" }}>
          <h2>Deals in PCs</h2>
          <a href="#">
            <img
              src={productPlaceHolderImg}
              style={{
                width: "100%",
                height: "100%",
              }}
            ></img>
          </a>
          <a href="#" className="seeMoreLink">
            See all deals
          </a>
        </div>

        <div className="productContainer" style={{ flex: "1" }}>
          <h2>Deals in PCs</h2>
          <a href="#">
            <img
              src={productPlaceHolderImg}
              style={{
                width: "100%",
                height: "100%",
              }}
            ></img>
          </a>
          <a href="#" className="seeMoreLink">
            See all deals
          </a>
        </div>

        <div className="productContainer">
          <h2>Gaming accessories</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "repeat(2, 1fr)",
              gap: "20px",
            }}
          >
            <a href="#">
              <img src={productPlaceHolderImg}></img>
              <span>Headsets</span>
            </a>
            <a href="#">
              <img src={productPlaceHolderImg}></img>
              <span>Keyboards</span>
            </a>
            <a href="#">
              <img src={productPlaceHolderImg}></img>
              <span>Computer mice</span>
            </a>
            <a href="#">
              <img src={productPlaceHolderImg}></img>
              <span>Chairs</span>
            </a>
          </div>
          <a href="#" className="seeMoreLink">
            See More
          </a>
        </div>

        <div className="productContainer" style={{ flex: "1" }}>
          <h2>Deals in PCs</h2>
          <a href="#">
            <img
              src={productPlaceHolderImg}
              style={{
                width: "100%",
                height: "100%",
              }}
            ></img>
          </a>
          <a href="#" className="seeMoreLink">
            See all deals
          </a>
        </div>

        <div className="productContainer" style={{ flex: "1" }}>
          <h2>Deals in PCs</h2>
          <a href="#">
            <img
              src={productPlaceHolderImg}
              style={{
                width: "100%",
                height: "100%",
              }}
            ></img>
          </a>
          <a href="#" className="seeMoreLink">
            See all deals
          </a>
        </div>
      </div>
    </>
  );
}

export default MainPage;
