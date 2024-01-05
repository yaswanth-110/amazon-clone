import React, { useContext } from "react";
import { StateContext } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import amazon_ad from "./assets/amazon_ad.png";
function Checkout() {
  const [{ Cart }, dispatch] = useContext(StateContext);
  console.log(useContext(StateContext));
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout_ad " src={amazon_ad} alt="amazon_ad" />
        {Cart?.length == 0 ? (
          <div>
            <h2>Yout Cart is Empty..</h2>
          </div>
        ) : (
          <div>
            <h2 style={{ marginBottom: "10px" }}>Your Shopping Cart</h2>
            {Cart?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {Cart.length > 0 && (
        <div className="checkout_subtotal">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
