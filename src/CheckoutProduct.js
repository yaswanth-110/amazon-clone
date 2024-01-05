import React, { useContext } from "react";
import rating_logo from "./assets/star.png";
import classes from "./CheckoutProduct.module.css";
import { StateContext } from "./StateProvider";
const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const [{ Cart }, dispatch] = useContext(StateContext);
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <div className={classes.checkoutProduct}>
      <img className={classes.checkoutProduct_image} src={image} />
      <div className={classes.checkoutProduct_info}>
        <p className={classes.checkoutProduct_title}>{title}</p>
        <p className={classes.checkoutProduct_price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={classes.checkoutProduct_rating}>
          {Array(rating)
            .fill()
            .map((_) => (
              <img style={{ width: "10px" }} src={rating_logo} alt="" />
            ))}
        </div>
        <button onClick={removeFromCart}>Remove from the Cart</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
