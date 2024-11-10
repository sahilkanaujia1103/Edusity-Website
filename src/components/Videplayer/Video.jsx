import React, { useRef } from 'react'
import college from "../../assets/college.mp4.mp4"
import "./Video.css"

const Video = ({playvideo,setPlayvideo}) => {
    const playref=useRef(null)
    const videoRef=useRef(null)
    const closeplayer=(e)=>{
          if(e.target==playref.current){
            setPlayvideo(false)
            videoRef.current.pause(); // Pause the video
            videoRef.current.currentTime = 0;
          }
        
    }
    
  return (
    <div className={`video ${playvideo?"":"hide"}`} ref={playref} onClick={(e)=>{
        closeplayer(e)
    }}>
   
    <video ref={videoRef} src={college} autoPlay  muted controls>

    </video>

    </div>
  )
}

export default Video