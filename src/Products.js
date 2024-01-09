import { useContext, useEffect } from "react";
import rating_logo from "./assets/star.png";
import "./Products.css";
import { StateContext } from "./StateProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({ id, title, image, price, rating }) => {
  const [{ Cart }, dispatch] = useContext(StateContext);
  const addtoCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    console.log("hi");
    toast.success(`${title}    item is added to Cart`, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  return (
    <>
      <div className="product">
        <div className="product_info">
          <p>{title}</p>
          <p className="product_price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product_rating">
            {Array(rating)
              .fill()
              .map((_) => {
                return <img style={{ width: "15px" }} src={rating_logo} />;
              })}
          </div>
        </div>
        <img src={image} alt="" />
        <button onClick={addtoCart}>Add to Cart</button>
      </div>
    </>
  );
};

export default Product;
