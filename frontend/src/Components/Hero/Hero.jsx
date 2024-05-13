import React from 'react'
import './Hero_module.css'
import hand_icon from "../Assets/hand_icon.png" 
import arrow_icon from "../Assets/arrow.png"
import hero_img from "../Assets/newHero-removebg-preview.png"

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero_left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className='hero-hand-icon'>
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className="hero-left-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero_right">
        {/* hero image */}
        <img src={hero_img} alt="" />
      </div>
    </div>
  )
}

export default Hero
