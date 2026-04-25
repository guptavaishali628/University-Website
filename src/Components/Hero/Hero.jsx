import React from 'react'
//import css file
import './Hero.css'

//importing assets
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <>
    <div className='hero container' id='hero'>
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>Our Cutting-edge curriculum is designed to empower students
          with the knowledge, experiences and skills they need to succeed in a rapidly changing world.</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="Dark Arrow"/></button>
      </div>
    </div>
    </>
  )
}

export default Hero
