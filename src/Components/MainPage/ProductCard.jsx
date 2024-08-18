import "./CSS/ProductCard.css";

function ProductCardList(props) {
  const Card = () => {
    if (props.cardType == "multipleProducts") {
      return (
        <div className="multipleProducts" style={props.style}>
          <h2>{props.Header}</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(2, 1fr)`,
              gridTemplateRows: `repeat(2, 1fr)`,
              paddingBottom: "20px",
              gap: "20px",
            }}
          >
            {Array(4)
              .fill()
              .map((_, index) => (
                <a key={index} href="#">
                  <img src={props.productPlaceHolderImg} />
                  <span>{props.productImgTextPlaceHolder}</span>
                </a>
              ))}
          </div>
          <a href="#" className="seeMoreLink">
            {props.moreProductText}
          </a>
        </div>
      );
    } else if (props.cardType == "singleProduct") {
      return (
        <div className="singleProduct" style={props.style}>
          <h2>{props.Header}</h2>
          <a href="#">
            <img
              src={props.productPlaceHolderImg}
              style={{
                height: "300px",
                width: "100%",
              }}
            ></img>
          </a>
          <a href="#" className="seeMoreLink">
            {props.moreProductText}
          </a>
        </div>
      );
    } else {
      throw new Error("Wrong Card Type!");
    }
  };
  return <Card />;
}

export default ProductCardList;
