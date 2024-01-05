import startup_logo from "./assets/learn_start_up.png";

export const initialState = {
  Cart: [
    {
      id: "344434",
      title:
        "The Learn Statup:How constant innovation radically increases business.",
      image: startup_logo,
      price: 11.96,
      rating: 5,
    },
  ],
  user: null,
};

export const getCartTotal = (Cart) =>
  Cart?.reduce((amount, item) => item.price + amount, 0);

export const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        Cart: [...state.Cart, action.item],
      };
      break;
    case "REMOVE_FROM_CART":
      let newCart = [...state.Cart];
      const index = state.Cart.findIndex((item) => item.id === action.id);
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.log("Can't remove item from this Cart");
      }
      return { ...state, Cart: newCart };
      break;
    default:
      return state;
  }
};
