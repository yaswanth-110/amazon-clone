import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { StateContext, useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
function Header() {
  const [{ Cart, user }, dispatch] = useContext(StateContext);
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <>
      <nav className="header">
        <Link to="/login">
          <img
            className="header_logo"
            src="https://www.flexgigzz.com/wp-content/uploads/2020/12/amazon-banner.png"
            alt="amazon-logo"
          />
        </Link>
        <div className="header_search">
          <input className="header_searchInput" type="search" />
          <SearchIcon className="header_searchIcon" />
        </div>

        <div onClick={handleAuthentication} className="header_nav">
          <Link to={!user && "/login"} className="header_link">
            <div className="header_option">
              <span className="header_optionLineOne">
                {!user ? "Hello Guest" : user.email}
              </span>
              <span className="header_optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <Link to="/" className="header_link">
            <div className="header_option">
              <span className="header_optionLineOne">Return</span>
              <span className="header_optionLineTwo">& Orders</span>
            </div>
          </Link>
          <Link to="/" className="header_link">
            <div className="header_option">
              <span className="header_optionLineOne">Your</span>
              <span className="header_optionLineTwo">Prime</span>
            </div>
          </Link>
          <Link to="/checkout" className="header_link">
            <div className="header_optionBasket">
              <ShoppingBasketIcon />
              <span className="header_optionTwo header_optionBasketcount">
                {`Cart ${Cart?.length}`}
              </span>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
