import React, { useContext } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { CardTravel } from "@mui/icons-material";
import { getCartTotal } from "./Reducer";
import { StateContext } from "./StateProvider";
function Subtotal() {
  const [{ Cart }, dispatch] = useContext(StateContext);
  return (
    <div className="subTotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({Cart.length} items):<strong>{`${value}`}</strong>
            </p>
            <small className="subTotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(Cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
