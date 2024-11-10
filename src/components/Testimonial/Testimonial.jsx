import React, { useRef } from "react";
import backbtn from "../../assets/back-icon.png";
import nextbtn from "../../assets/next-icon.png";
import user_icon1 from "../../assets/user-1.png";
import user_icon2 from "../../assets/user-2.png";
import user_icon3 from "../../assets/user-3.png";
import user_icon4 from "../../assets/user-4.png";
import "./Testimonial.css";

const Testimonial = () => {
  const slideRef=useRef(null)
  let tx=0;
  const forward=()=>{
    if(tx>-50){
      tx-=25
      slideRef.current.style.transform=`translateX(${tx}%)`
    }
  }
  const backward=()=>{
    if(tx<0){
      tx+=25
      slideRef.current.style.transform=`translateX(${tx}%)`
    }
  }
  return (
    <div className="testimonial">
      <img onClick={()=>{
        backward()
      }} src={backbtn} alt="" className="backbtn" />
      <img onClick={()=>{
        forward()
      }} src={nextbtn} alt="" className="nextbtn" />
      <div  className="slider">
        <ul ref={slideRef}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_icon1} alt="" />
                <div className="user-data">
                  <h3>Maria Willson</h3>
                  <span>Edusity, U.S.A</span>
                </div>
              </div>
              <p>
                we believe in nurturing the leaders of tomorrow. With a
                commitment to academic excellence, innovative research, and a
                vibrant campus community, we provide our students with the tools
                and opportunities they need to succeed in an ever-changing
                world. Our world-class faculty, cutting-edge facilities, and
                diverse student body create an environment where learning
                thrives and dreams are realized.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_icon2} alt="" />
                <div className="user-data">
                  <h3>Rohan Tyagi</h3>
                  <span>Edusity, U.S.A</span>
                </div>
              </div>
              <p>
                we believe in nurturing the leaders of tomorrow. With a
                commitment to academic excellence, innovative research, and a
                vibrant campus community, we provide our students with the tools
                and opportunities they need to succeed in an ever-changing
                world. Our world-class faculty, cutting-edge facilities, and
                diverse student body create an environment where learning
                thrives and dreams are realized.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_icon3} alt="" />
                <div className="user-data">
                  <h3>Angelina Markus </h3>
                  <span>Edusity, U.S.A</span>
                </div>
              </div>
              <p>
                we believe in nurturing the leaders of tomorrow. With a
                commitment to academic excellence, innovative research, and a
                vibrant campus community, we provide our students with the tools
                and opportunities they need to succeed in an ever-changing
                world. Our world-class faculty, cutting-edge facilities, and
                diverse student body create an environment where learning
                thrives and dreams are realized.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_icon4} alt="" />
                <div className="user-data">
                  <h3>William Johnson</h3>
                  <span>Edusity, U.S.A</span>
                </div>
              </div>
              <p>
                we believe in nurturing the leaders of tomorrow. With a
                commitment to academic excellence, innovative research, and a
                vibrant campus community, we provide our students with the tools
                and opportunities they need to succeed in an ever-changing
                world. Our world-class faculty, cutting-edge facilities, and
                diverse student body create an environment where learning
                thrives and dreams are realized.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
