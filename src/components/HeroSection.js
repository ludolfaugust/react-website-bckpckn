import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/video/video-2.mp4" autoPlay loop muted />
      <h1>PACK YOUR BAGS</h1>
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
          Meet us
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
