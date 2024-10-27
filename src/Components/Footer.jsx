// import React from 'react'
import './Footer.css'
// import { Link } from 'react-router-dom'
import Logo from '../assets/TransparentLogo.png'
const Footer = () => {
 
  
  return (
    <>
    <div className="footer">
        <div className='footer-top'>
            <div>
                <img src={Logo} alt="Vishnavi Constructions" />
            </div>
            <div>
                <p className='text-2xl text-red'>Clients can specify their preferred method of communication, to <br /> be precise - in person or via telephone / email. individual.</p>
            </div>
            <div className='social'>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-instagram"></i>
            </div>
        </div>
        <div className='footer-mid'>
          <div>
          <div>
            <h5>Get in touch</h5>
            <p>8-2-248/A/5/25, Venkateshwara Hills, Beside Tata Capital Road, RD No-3 Banjarahills, Hyderabad</p>
          </div>
          <div>
            <ul style={{listStyleType:'none'}}>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About Us</a></li>
                <li><a href='#'>Projects</a></li>
                <li><a href='#'>Awards & Recognition</a></li>
                <li><a href='#'>Media</a></li>
                <li><a href='#'>Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h5>Company Info</h5>
            <p><i className='fa fa-phone'></i> <span>+91 7093320405</span></p>
            <p><i className='fa-regular fa-envelope'></i> <span><a href="mailto:vaishnavireadymix@gmail.com">vaishnavireadymix@gmail.com</a></span></p>
          </div>
          <div>
            <h5>Enquire Now</h5>
            <input type="text" placeholder='Name'/> <br/>
            <input type="email" placeholder='Email'/> <br/>
            <input type="phone" placeholder='Phone'/> <br/>
        <button >Submit Now <i className='fa fa-arrow-right'></i></button>
            </div> 
            </div> 
        </div>
        <div className='footer-down'>
            <p>2024 - Vaishnavi RMC. All rights reserved.</p>
        </div>
    </div>
    
    </>
  )
}

export default Footer
