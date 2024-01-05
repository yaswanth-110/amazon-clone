import React from "react";
import "./Home.css";
import Product from "./Products";
import banner_img from "./assets/primevideo-banner.jpg";
import startup_logo from "./assets/learn_start_up.png";
function Home() {
  return (
    <>
      <div className="home">
        <img className="home_img" src={banner_img} alt="amazon-banner" />
        <div className="home_row">
          <Product
            id="344434"
            title="The Learn Statup:How constant innovation radically increases business."
            image={startup_logo}
            price={11.96}
            rating={5}
          />
          <Product
            id="34434"
            title="The Learn Statup:How constant innovation radically increases business."
            image={startup_logo}
            price={11.96}
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="3444"
            title="The Learn Statup:How constant innovation radically increases business."
            image={startup_logo}
            price={11.96}
            rating={5}
          />
          <Product
            id="34"
            title="The Learn Statup:How constant innovation radically increases business."
            image={startup_logo}
            price={11.96}
            rating={5}
          />
          <Product
            id="56577"
            title="The Learn Statup:How constant innovation radically increases business."
            image={startup_logo}
            price={11.96}
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="344434"
            title="The Learn Statup:How constant innovation radically increases business."
            image={startup_logo}
            price={11.96}
            rating={5}
          />
        </div>
      </div>
    </>
  );
}

export default Home;

// product => id,price,title,rating,image
