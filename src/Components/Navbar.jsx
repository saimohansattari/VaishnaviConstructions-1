// import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";
import  Logo  from '../assets/vaishnaviLogo.png'
import { useState } from "react";
const Navbar = () => {

  let [activeItem,setActiveItem]=useState('home')

  let [isMobile,setMobile] = useState(false)

  function handleMobileNav(){
    setMobile(!isMobile)
  }
  function handleActiveNav(active){
    setActiveItem(active)
  }

  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
            <img src={Logo} alt="" width={250} height={90}/>
        </div>
        <div className="navbar-right">
            <Link to='/'><span  className={activeItem === 'home'?'active-nav navItem':'navItem'} onClick={()=>{
              handleActiveNav('home')
            }}>Home</span></Link>
          <Link to="/aboutus"><span  className={activeItem === 'about'?'active-nav navItem':'navItem'} onClick={()=>{
              handleActiveNav('about')
            }}>About Us</span></Link>
          <Link to="/services"><span  className={activeItem === 'services'?'active-nav navItem':'navItem'} onClick={()=>{
              handleActiveNav('services')
            }}>Services</span></Link>

          <Link to="/media"><span className={activeItem === 'media'?'active-nav navItem':'navItem'} onClick={()=>{
              handleActiveNav('media')
            }}>Media</span></Link>

          <Link to="/contactus"><span className={activeItem === 'contact'?'active-nav navItem':'navItem'} onClick={()=>{
              handleActiveNav('contact')
            }}>Contact Us</span></Link>

           <a href="../assets/VaishnaviConstructionsBrochure.pdf" download='VaishnaviConstructionsBrochure.pdf'><button>Download Brochure</button></a>
        </div>
            <div className="nav-mobile-handle" onClick={handleMobileNav}>
              <i className="fa-solid fa-bars"></i>
            </div>

        <div className={isMobile ? 'navbar-mobile':'d-none navbar-mobile'}>
            <Link to='/'><span  className={activeItem === 'home'?'active-nav navItem':'navItem'} onClick={()=>{
              handleActiveNav('home')
            }}>Home</span></Link>
          <Link to="/aboutus"><span  className={activeItem === 'about'?'active-nav navItem':'navItem'} onClick={()=>{
              handleActiveNav('about')
            }}>About Us</span></Link>
          <Link to="/services"><span  className={activeItem === 'services'?'active-nav navItem':'navItem'} onClick={()=>{
              handleActiveNav('services')
            }}>Services</span></Link>

          <Link to="/media"><span className={activeItem === 'media'?'active-nav navItem':'navItem'} onClick={()=>{
              handleActiveNav('media')
            }}>Media</span></Link>

          <Link to="/contactus"><span className={activeItem === 'contact'?'active-nav navItem':'navItem'} onClick={()=>{
              handleActiveNav('contact')
            }}>Contact Us</span></Link>

          <Link to="/brochure"><button>Download Brochure</button></Link>
        </div>
        
      </div>
    </>
  );
};

export default Navbar;
