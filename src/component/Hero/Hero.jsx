import React from 'react'
import "./hero.css"
import CabBook from '../CabBooking/CabBook'
import HeroBanner from '../HeroBanner/HeroBanner'

const Hero = () => {
  return (
    <div className="hero-section-wrapper">

      <div className="hero-section-content">

        <div className="hero-section-text">
          INDIA'S <span className="hero-section-highlight">LEADING</span> <br/>
          <span className="hero-section-highlight">ONE WAY INTERCITY</span> <br/>
          CAB SERVICE PROVIDER
        </div>

        <div className="hero-section-form-wrapper">
          <CabBook/>
        </div>

      </div>

      <div className="hero-section-banner-wrapper">
        <HeroBanner/>
      </div>

    </div>
  )
}

export default Hero