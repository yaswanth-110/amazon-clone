import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import LoginPage from "./LoginPage";
import { useContext, useEffect } from "react";
import { auth } from "./Firebase";
import { StateContext } from "./StateProvider";
import Aos from "aos";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51OWaiPSJTvmiOZYuUsBfQTlKEaU8xlbcq3LvktnJryxDag5eFoimWJ6iBRmmbZGPMkOmiOUYVlxc3nCOqI14BYAd00dkxck7zN"
);
function App() {
  const [{ Cart }, dispatch] = useContext(StateContext);
  useEffect(() => {
    Aos.init();
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          ></Route>
          <Route path="/login" element={<LoginPage />} />

          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          ></Route>
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
