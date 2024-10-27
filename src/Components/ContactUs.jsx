import React from 'react'
import './contactus.css'
import Profile from '../assets/contactProfile.jpeg'
import Map from '../assets/contactMap.png'
import location from '../assets/location.png'
const ContactUs = () => {
  return (
    <>
    <div className='banner d-flex align-items-center'>
<h1 className='mediaTitle'>Contact Us</h1>
    </div>

    <div className='sectionOne'>
      <div className='sectionOne-left'>
        <div>
        <h1>Get in touch with us</h1>
        <div style={{display:'flex', justifyContent:'space-between'}} className='mt-5 mb-5'>
          <img src={Profile} alt="" width={80} height={70} className='profile'/>
          <p className='desc'>Hi, We’re Vaishnavi Constructions. Need help? Use the form below or email me at hello@vaishnaviconstructions.com</p>
        </div>
        <form action="">
          <label htmlFor="">Name</label> <br/>
          <input type="text" placeholder='Rachel Joe'/> <br/>
          <label htmlFor="">Email</label> <br/>
          <input type="email" placeholder='Rachel@domain.com'/> <br/>
          <label htmlFor="">Phone</label> <br/>
          <input type="tel" placeholder='+91 9956783422'/> <br/>
          <label htmlFor="">Message</label> <br/>
          <input type="textarea" placeholder='Type your query here....'/> <br/>
          <button> Send my message </button>
        </form>
        </div>
      </div>
      <div className='sectionOne-right'>
        <div className='locate'>
          <img src={location} alt="" />
          <div style={{backgroundColor:'#ffffff80',color:'black',padding:'10px',borderRadius:'5px'}}>
          844 W Orange Ave, South San Francisco, CA 94080, United States
          </div>
        </div>
      </div>
    </div>

    <div className="sectionTwo">
      <div className='sectionTwo-left'>
        <img src={Map} alt="" width={800} height={600} style={{objectFit:'cover'}}/>
      </div>
      <div className="sectionTwo-right">
        <div style={{width:'80%',margin:'auto'}}>
          <h2>Let&apos;s talk with us</h2>
          <p>Questions, comments, or suggestions? Simply fill in the form and we’ll be in touch shortly.</p>
          <p><i className='fa fa-location-dot'></i><span>8-2-248/A/5/25, Venkateshwara Hills, Beside Tata Capital Road, RD No-3 Banjarahills</span></p>
          <p><i className='fa fa-phone'></i><span>+91 7093320405</span></p>
          <p><i className='fa fa-envelope'></i><span>Vaishnavireadymix@gmail.com</span></p>
        </div>
      </div>
    </div>
    </>
  )
}

export default ContactUs
