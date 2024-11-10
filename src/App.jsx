import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Video from './components/Videplayer/Video'

function App() {

    const [playvideo,setPlayvideo]=useState(false)
  return (
    <div>
        <Navbar/>
        <Hero/>
        <div className="container">
        <Title subtitle="our program" title="What we offer"/>
        <Programs/>
        <About playvideo={playvideo} setPlayvideo={setPlayvideo}/>
        <Title subtitle="Gallery" title="Campus Photos"/>
        <Campus/>
        <Title subtitle="Testimonial" title="What student says"/>
        <Testimonial/>
        <Title subtitle="Contact Us" title="Get in Touch"/>
        <Contact/>
        <Footer/>
      
        </div>
        <Video playvideo={playvideo} setPlayvideo={setPlayvideo}/>
        
    </div>
  )
}

export default App
