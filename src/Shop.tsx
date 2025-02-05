import React from "react";
import "./Shop.css";
import Navbar from "./Conponents/NavBar";


function Shop() {
  return (
    <div>
      <Navbar />
      <div className="shop-container">
        <h2 className="shop-title">Shop</h2>
        <text className="nothing-yet">Coming Soon...</text>
      </div>
    </div>
  );
}

export default Shop;
