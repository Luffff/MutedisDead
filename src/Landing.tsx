import "./Landing.css";
import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

function Landing() {
  return (
    <div className="landing">
      <div className="navbar">
        <button className="left-rounded">Shop</button>
        <button className="no-rounded">Muted</button>
        <button className="right-rounded">Contact</button>
      </div>

      <div className="title">
        <h1>MUTED</h1>
      </div>

      <div className="email-system">
        <input type="email" className="email"></input>
        <button className="submit">Submit</button>
      </div>

      <div className="socials-container">
        <RiInstagramFill className="icon" />
        <FaYoutube className="icon" />
        <AiFillTikTok className="icon" />
      </div>
    </div>
  );
}

export default Landing;
