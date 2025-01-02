import "./Landing.css";
import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import Navbar from "./Conponents/NavBar";

function Landing() {
  return (
    <>
      <div className="background"></div>
      <div className="landing-background">
        <Navbar />

        <div className="glitch">
          <h1 title="MUTED">MUTED</h1>
        </div>

        <div className="email-system">
          <input type="email" className="email"></input>
          <button className="submit">Submit</button>
        </div>


        <div className="socials-container">
          <RiInstagramFill
            className="icon"
            onClick={() =>
              window.open(
                "https://www.instagram.com/challenge/?next=https%3A%2F%2Fwww.instagram.com%2Fmutedisdead%2Fprofilecard%2F%3Figsh%3DZngzYnpkMnZrbjlw%26__coig_challenged%3D1#"
              )
            }
          />
          <FaYoutube
            className="icon"
            onClick={() => window.open("https://www.youtube.com/@mutedisdead")}
          />
          <AiFillTikTok
            className="icon"
            onClick={() =>
              window.open(
                "https://www.tiktok.com/@mutedisdead?_t=8raneRzx04U&_r=1"
              )
            }
          />
        </div>
      </div>

      <div className="scroll-container">
          <div className="scroll-text">
            MUTED IS DEAD IS AN FASHION AND CAR BRAND.
          </div>
          <div className="scroll-text">
            MUTED IS DEAD IS AN FASHION AND CAR BRAND.
          </div>
        </div>

      <div className="youtube-embed">
        <iframe
          src="https://www.youtube.com/embed/2h9CqRlHzrc"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="quote-box">
        <h2 className="quote">
          "You can run from your dreams, but the regret of not chasing them will
          be faster"
        </h2>
      </div>

      <h3 className="take-a-look"> Take A Look.</h3>
    </>
  );
}

export default Landing;
