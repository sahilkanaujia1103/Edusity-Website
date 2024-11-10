import React from 'react'
import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png"

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>
                We Ensure better education for better world
            </h1>
            <p>
             Our cutting-edge curricullum is design to empower the students 
             with the Knowledge ,skills and experience neededto excel in dynamic field of education
            </p>
            <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero