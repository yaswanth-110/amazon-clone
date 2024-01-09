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
            title="The Learn Statup:How constant innovation radically increases business."
            image={startup_logo}
            price={11.96}
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            key="afdf"
            id="3444"
            title="The Learn Statup:How constant innovation radically increases business."
            image={startup_logo}
            price={11.96}
            rating={5}
          />
          <Product
            key="adffd"
            id="34"
            title="The Learn Statup:How constant innovation radically increases business."
            image={startup_logo}
            price={11.96}
            rating={5}
          />
          <Product
            key="a"
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
        <Footer />
      </div>
    </>
  );
}

export default Home;

// product => id,price,title,rating,image
