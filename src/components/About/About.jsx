import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_btn from "../../assets/play-icon.png";

const About = ({playvideo,setPlayvideo}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img onClick={()=>{
          setPlayvideo(true)
        }} src={play_btn} alt="" className="play" />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leader Today</h2>
        <p>
          Empowering tomorrow's leaders with cutting-edge knowledge, innovation,
          and a global perspective—your future begins here{" "}
        </p>
        <p>
          Your journey to greatness begins here—where knowledge, opportunity,
          and inspiration converge
        </p>
      </div>
    </div>
  );
};

export default About;
