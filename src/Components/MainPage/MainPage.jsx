import { useEffect, useState } from "react";
import UnorderedProductsList from "./UnorderedProductsList.jsx";
import ProductCard from "./ProductCard.jsx";

import kitchenItems from "./Assets/kitchenFav.jpg";
import books from "./Assets/Books.jpg";
import toys from "./Assets/Toys.jpg";
import gamingItems from "./Assets/GamingItems.jpg";
import beautyProducts from "./Assets/BeautyProducts.jpg";

import productPlaceHolderImg from "./Assets/productsPlaceHolderImg.jpg";
import "./CSS/MainPage.css";

function MainPage() {
  const [imgIndex, setImgIndex] = useState(0);
  let bgImages = [kitchenItems, books, toys, gamingItems, beautyProducts];
  const [bgImgCounter, setBgImgCouner] = useState(0);

  const handleForwardClick = () => {
    setImgIndex((i) => (1 + i) % bgImages.length);
  };
  const handleBackClick = () => {
    setImgIndex((i) => (i - 1 + bgImages.length) % bgImages.length);
  };

  // timer to change bg images automatically
  useEffect(() => {
    let timer;
    if (bgImgCounter < 5) {
      timer = setTimeout(() => {
        setImgIndex((i) => (1 + i) % bgImages.length);
        setBgImgCouner((b) => b + 1);
      }, 5000);
    } else {
      clearTimeout(timer);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [imgIndex]);

  return (
    <>
      <div className="bgImg" style={{ width: "1500px" }}>
        <div className="bgImgGradient"></div>
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
          gridTemplateColumns: "1fr",
          gridTemplateRows: "1fr 1fr",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "0 20px 20px 20px",
          }}
        >
          <ProductCard
            cardType="multipleProducts"
            Header="Gaming accessories"
            productPlaceHolderImg={productPlaceHolderImg}
            productImgTextPlaceHolder="Image PH Text"
            moreProductText="See All"
          />

          <ProductCard
            cardType="multipleProducts"
            Header="Shop deals in Fashion"
            productPlaceHolderImg={productPlaceHolderImg}
            productImgTextPlaceHolder="Image PH Text"
            moreProductText="See All"
          />

          <ProductCard
            cardType="multipleProducts"
            Header="Refresh your space"
            productPlaceHolderImg={productPlaceHolderImg}
            productImgTextPlaceHolder="Image PH Text"
            moreProductText="See All"
          />

          <ProductCard
            cardType="singleProduct"
            Header="Deals in PCs"
            productPlaceHolderImg={productPlaceHolderImg}
            productImgTextPlaceHolder="Image PH Text"
            moreProductText="See All"
            style={{ margin: "0" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            padding: "0 20px 20px 20px",
          }}
        >
          <ProductCard
            cardType="singleProduct"
            Header="Toys under $25"
            productPlaceHolderImg={productPlaceHolderImg}
            productImgTextPlaceHolder="Image PH Text"
            moreProductText="See All"
          />

          <ProductCard
            cardType="multipleProducts"
            Header="Fashion trends you like"
            productPlaceHolderImg={productPlaceHolderImg}
            productImgTextPlaceHolder="Image PH Text"
            moreProductText="See All"
          />

          <ProductCard
            cardType="singleProduct"
            Header="Beauty steals under $25"
            productPlaceHolderImg={productPlaceHolderImg}
            productImgTextPlaceHolder="Image PH Text"
            moreProductText="See All"
          />

          <ProductCard
            cardType="singleProduct"
            Header="Home décor under $50"
            productPlaceHolderImg={productPlaceHolderImg}
            productImgTextPlaceHolder="Image PH Text"
            moreProductText="See All"
            style={{ margin: "0" }}
          />
        </div>
      </div>

      <UnorderedProductsList
        header="Top Sellers in Baby Products for you"
        listSize={21}
        placeHolderImg={productPlaceHolderImg}
      />

      <UnorderedProductsList
        header="Best Sellers in Toys & Games"
        listSize={23}
        placeHolderImg={productPlaceHolderImg}
      />

      <div
        style={{
          display: "flex",
          padding: "0 20px 20px 20px",
        }}
      >
        <ProductCard
          cardType="multipleProducts"
          Header="Gift ideas in Toddler Cups"
          productPlaceHolderImg={productPlaceHolderImg}
          productImgTextPlaceHolder="Image PH Text"
          moreProductText="See All"
        />

        <ProductCard
          cardType="multipleProducts"
          Header="Gaming merchandise"
          productPlaceHolderImg={productPlaceHolderImg}
          productImgTextPlaceHolder="Image PH Text"
          moreProductText="See All"
        />

        <ProductCard
          cardType="singleProduct"
          Header="Shop activity trackers and smartwatches"
          productPlaceHolderImg={productPlaceHolderImg}
          productImgTextPlaceHolder="Image PH Text"
          moreProductText="See All"
        />

        <ProductCard
          cardType="multipleProducts"
          Header="Warm & welcoming decor"
          productPlaceHolderImg={productPlaceHolderImg}
          productImgTextPlaceHolder="Image PH Text"
          moreProductText="See All"
          style={{ margin: "0" }}
        />
      </div>

      <UnorderedProductsList
        header="Best Sellers in Sports & Outdoors"
        listSize={19}
        placeHolderImg={productPlaceHolderImg}
      />

      <UnorderedProductsList
        header="Popular products in PC internationally"
        listSize={19}
        placeHolderImg={productPlaceHolderImg}
      />

      <div
        style={{
          display: "flex",
          padding: "0 20px 20px 20px",
        }}
      >
        <ProductCard
          cardType="singleProduct"
          Header="Great prices on shoes"
          productPlaceHolderImg={productPlaceHolderImg}
          productImgTextPlaceHolder="Image PH Text"
          moreProductText="See All"
        />

        <ProductCard
          cardType="multipleProducts"
          Header="Level up your gaming"
          productPlaceHolderImg={productPlaceHolderImg}
          productImgTextPlaceHolder="Image PH Text"
          moreProductText="See All"
        />

        <ProductCard
          cardType="multipleProducts"
          Header="Have more fun with family"
          productPlaceHolderImg={productPlaceHolderImg}
          productImgTextPlaceHolder="Image PH Text"
          moreProductText="See All"
        />

        <ProductCard
          cardType="multipleProducts"
          Header="Fantastic Finds for Home"
          productPlaceHolderImg={productPlaceHolderImg}
          productImgTextPlaceHolder="Image PH Text"
          moreProductText="See All"
          style={{ margin: "0" }}
        />
      </div>

      <UnorderedProductsList
        header="Most wished for in Movies & TV"
        listSize={29}
        placeHolderImg={productPlaceHolderImg}
      />

      <UnorderedProductsList
        header="Best Sellers in Books"
        listSize={29}
        placeHolderImg={productPlaceHolderImg}
      />

      <div
        style={{
          display: "flex",
          padding: "0 20px 20px 20px",
        }}
      >
        <ProductCard
          cardType="multipleProducts"
          Header="Look your best this season"
          productPlaceHolderImg={productPlaceHolderImg}
          productImgTextPlaceHolder="Image PH Text"
          moreProductText="See All"
        />

        <ProductCard
          cardType="singleProduct"
          Header="Player's paradise starts here"
          productPlaceHolderImg={productPlaceHolderImg}
          productImgTextPlaceHolder="Image PH Text"
          moreProductText="See All"
        />

        <ProductCard
          cardType="singleProduct"
          Header="A whole new way to work"
          productPlaceHolderImg={productPlaceHolderImg}
          productImgTextPlaceHolder="Image PH Text"
          moreProductText="See All"
        />

        <ProductCard
          cardType="singleProduct"
          Header="Upgrade your office furniture"
          productPlaceHolderImg={productPlaceHolderImg}
          productImgTextPlaceHolder="Image PH Text"
          moreProductText="See All"
          style={{ margin: "0" }}
        />
      </div>

      <UnorderedProductsList
        header="Top Sellers in Books for you"
        listSize={29}
        placeHolderImg={productPlaceHolderImg}
      />
    </>
  );
}

export default MainPage;
