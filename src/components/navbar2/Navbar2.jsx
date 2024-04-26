import React from "react";
import "./Navbar2.css";
import { NavLink } from "react-router-dom";
import cart from "../../assets/cart.png";
import down from "../../assets/down.png";
import heart from "../../assets/heart.png";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import user from "../../assets/user.png";
function Navbar2() {
  let isLogin = localStorage.getItem("token");
  let check = isLogin ? "/admin" : "/register";
  let change = isLogin ? "Admin" : "Account";
  return (
    <div className="container">
      <div className="b">
        <NavLink to={"/"}>
          {" "}
          <img src={logo} alt="" />
        </NavLink>
        <div className="b1">
          <input type="search" placeholder="Search For items..." />
          <button>
            <p>All Categories</p>
            <img src={down} alt="" />
          </button>
          <img className="b4" src={search} alt="" />
        </div>
        <div className="b2">
          <div className="b3">
            <img src={user} alt="" />
            <NavLink to={check}>{change}</NavLink>
          </div>
          <div className="b3">
            <img src={heart} alt="" />
            <p>Wishlist</p>
          </div>
          <div className="b3">
            <img src={cart} alt="" />
            <p>Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar2;
