import React from "react";
import "./HeroBanner.css";
import playStore from "../../../public/IMAGES/image6.png"
import appStore from "../../../public/IMAGES/image7.png"
import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="hero-banner-wrapper">

      <div className="hero-banner-section">
        <h2 className="hero-banner-section-title">Transparent Billing</h2>
        <p className="hero-banner-section-text">GPS Based Billing | No Km Tampering</p>
      </div>

      <div className="hero-banner-divider"></div>

      <div className="hero-banner-section">
        <h3 className="hero-banner-center-title">Download Now!</h3>
        <div className="hero-banner-stores">
          <Image src={playStore} alt="Google Play"/>
          <Image src={appStore} alt="App Store"/>
        </div>
      </div>

      <div className="hero-banner-divider"></div>

      <div className="hero-banner-section">
        <h2 className="hero-banner-section-title">No return fare</h2>
        <p className="hero-banner-section-text">Oneway Cab Fare | No Hidden Charges</p>
      </div>

    </div>
  );
};

export default HeroBanner;