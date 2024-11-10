import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import { useActionData } from 'react-router-dom'
import {Link}  from "react-scroll"
import menu_icon from "../../assets/menu-icon.png"

const Navbar = () => {
    const [sticky,setSticky]=useState(false)
    const [hidemenu,setHidemenu]=useState(false)
     useEffect(()=>{
        window.addEventListener("scroll",()=>{
            scrollY>50?setSticky(true):setSticky(false)

            
        })
     })
     const togglemenu=()=>{
        hidemenu?setHidemenu(false):setHidemenu(true)
     }
  return (
    <nav id="nav" className={`container ${sticky?"dark-nav":""}`}>
        <img src={logo} alt="" className='logo'/>
        <ul className={`${hidemenu?"":"hide-menu"}`}>
            <li><Link to={"hero"} smooth={true} offset={-240} duration={500}>Hero</Link></li>
            <li><Link to={"programs"} smooth={true} offset={-180} duration={500}>Programs</Link></li>
            <li><Link to={"about"} smooth={true} offset={-240} duration={500}>About Us</Link></li>
            <li><Link to={"campus"} smooth={true} offset={-240} duration={500}>Campus</Link></li>
            <li><Link to={"testimonial"} smooth={true} offset={-240} duration={500}>Testimonial</Link></li>
            <li ><Link to={"contact"} smooth={true} offset={-240} duration={500} ><button className='btn'>Contact Us</button></Link></li>
        </ul>
        <img onClick={()=>{
            togglemenu()
        }} className="menu-icon" src={menu_icon} alt="" />
    </nav>
  )
}

export default Navbar