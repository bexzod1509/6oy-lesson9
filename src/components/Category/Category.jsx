import React from "react";
import "./Category.css";
import banner1 from "../../assets/banner-1.png";
import banner2 from "../../assets/banner-2.png";
import banner3 from "../../assets/banner-3.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon1.png";
import icon3 from "../../assets/icon1.png";
import icon4 from "../../assets/icon1.png";
import icon5 from "../../assets/icon1.png";
function Category() {
  return (
    <div className="container">
      <div className="d">
        <div className="d1">
          <img src={banner1} alt="" />
          <div className="d2">
            <p>Everyday Fresh & Clean with Our Products</p>
            <button>Shop Now</button>
          </div>
        </div>
        <div className="d1">
          <img src={banner2} alt="" />
          <div className="d2">
            <p>Make your Breakfast Healthy and Easy</p>
            <button>Shop Now</button>
          </div>
        </div>
        <div className="d1">
          <img src={banner3} alt="" />
          <div className="d2">
            <p>The best Organic Products Online</p>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
      <div className="f2">
        <div className="f3">
          <img src={icon1} alt="" />
          <div>
            <h1>Best prices & offers</h1>
            <p>Orders $50 or more</p>
          </div>
        </div>
        <div className="f3">
          <img src={icon2} alt="" />
          <div>
            <h1>Best prices & offers</h1>
            <p>Orders $50 or more</p>
          </div>
        </div>
        <div className="f3">
          <img src={icon3} alt="" />
          <div>
            <h1>Best prices & offers</h1>
            <p>Orders $50 or more</p>
          </div>
        </div>
        <div className="f3">
          <img src={icon4} alt="" />
          <div>
            <h1>Best prices & offers</h1>
            <p>Orders $50 or more</p>
          </div>
        </div>
        <div className="f3">
          <img src={icon5} alt="" />
          <div>
            <h1>Best prices & offers</h1>
            <p>Orders $50 or more</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
