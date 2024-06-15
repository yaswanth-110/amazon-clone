import React, { useEffect } from "react";
import "./Home.css";
import Product from "./Products";
import banner_img from "./assets/ama_banner.webp";
import startup_logo from "./assets/learn_start_up.png";
import apiData from "./Api";
import Footer from "./Footer";
function Home() {
  // const [product, setProduct] = useState([]);
  useEffect(() => {
    apiData();
  }, []);
  return (
    <>
      <div className="home">
        <img className="home_img" src={banner_img} alt="amazon-banner" />
        <div className="home_row">
          <Product
            key="DSF"
            id="344434"
            title="The Learn Statup:How constant innovation radically increases business."
            image={startup_logo}
            price={11.96}
            rating={5}
          />
          <Product
            key="df"
            id="34434"
            title="Chef Boyardee Spaghetti and Meatballs, 14.5 oz, 24 Pack"
            image="https://m.media-amazon.com/images/I/71LP8bRJEVL._AC_SX444_SY639_QL65_.jpg"
            price={23.94}
            rating={2}
          />
        </div>
        <div className="home_row">
          <Product
            key="afdf"
            id="3444"
            title="Chef Boyardee Mini-Bites ABC&#x27;s &amp; 123&#x27;s Pasta with Meatballs, 7.5 Ounce (Pack of 12)"
            image="https://m.media-amazon.com/images/I/71aH9dKNJ2L._AC_SX444_SY639_QL65_.jpg"
            price={15.6}
            rating={3}
          />
          <Product
            key="adffd"
            id="34"
            title="The Learn Statup:How constant innovation radically increases business."
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Op4iNRqLL._AC_SX466_.jpg"
            price={30.98}
            rating={4}
          />
          <Product
            key="a"
            id="56577"
            title="The Learn Statup:How constant innovation radically increases business."
            image={startup_logo}
            price={21.5}
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="344434"
            title="2020 Apple MacBook Air (13.3-inch/33.78 cm, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 512GB SSD) - Space Grey"
            image="https://m.media-amazon.com/images/I/316ArzLeJ2L.jpg"
            price={40.96}
            rating={5}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;

// product => id,price,title,rating,image
