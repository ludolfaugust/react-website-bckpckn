import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/video/video-2.mp4" autoPlay muted />
      <div className="header-title">
        <h1 className="header-title-pack">PACK </h1>{" "}
        <h1 className="header-title-your"> MY </h1>
        <h1 className="header-title-bags">BAGS</h1>
      </div>
      <div className="road-icon">
        <p>The road is waiting for you...</p>
        <i class="fas fa-road"></i>
      </div>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Let´s go
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Join us
        </Button>
      </div>
      <div>
        <img src="./images/872480.svg" className="airplane" alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
