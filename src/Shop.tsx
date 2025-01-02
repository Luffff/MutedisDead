import React from "react";
import "./Shop.css";
import Navbar from "./Conponents/NavBar";

function Shop() {
  return (
    <div className="shop-container">
      <Navbar/>
      <h2 className="shop-title">Shop</h2>
      <text className="nothing-yet">Coming Soon...</text>
    </div>
  );
}

export default Shop;
