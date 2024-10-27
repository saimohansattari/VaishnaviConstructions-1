import React from 'react'
import DarkMap from '../assets/DarkMap.png'
import VB_hero from '../assets/ServiceAsserts/VBricks/VB_hero.png'
import VBG1 from '../assets/ServiceAsserts/VBricks/VBG1.png'
import VBG2 from '../assets/ServiceAsserts/VBricks/VBG2.png'
import VBG3 from '../assets/ServiceAsserts/VBricks/VBG3.png'
import VBricks from '../assets/ServiceAsserts/VBricks/VBricks.png'
import whatsappImg from '../assets/whatsappImg.png'
import { FormComponent, InputComponent } from './Form'
import { ContentIntro, ExtraSmallText, GalleryImg, GallerySection, HeroSection, LocationCard, SmallText, TheameBtn, TheameLargeText, WhatsappIcon, WhiteDiv, XlText } from './styledComponents'



function VaishnaviBricks() {
  return (
    <>
    <HeroSection style={{height:'auto', padding:'10rem'}} bgImage={VB_hero} >
       <div style={{display:'flex', flexDirection:'column', gap:'2rem'}}>
       <p >Strength You Can Rely On</p>
       <SmallText style={{color:'whitesmoke'}}> RMC‘s full form is Ready Mixed Concrete. It is manufactured in a batching plant or factory according to the standard specifications that are required. After being prepared it is delivered to the construction location in two different ways. </SmallText>
       </div>
       <div>
        <FormComponent style={{width:'fit-content', alignItems:'flex-start', border:'1px solid #9d9797', boxShadow: '#fdfdfd5e -1rem -1rem 0px'}}>
            <XlText>Get In Touch</XlText>
            <SmallText style={{fontSize:'14px'}}>Leave us your details and we’ll call you</SmallText>
            <InputComponent placeholder='Enter Your Name' />
            <InputComponent placeholder='Enter Your Email' style={{border:'none'}} />
            <InputComponent placeholder='Enter Your Number' />
            <TheameBtn style={{borderRadius:'5px', fontSize:'1rem',width:'100%'}}>Submit</TheameBtn>
        </FormComponent>

       </div>

       <WhatsappIcon src={whatsappImg} onClick={() =>
        window.open(
            'https://wa.me/917093320405?text=Hi,%20I%20would%20like%20to%20inquire%20about%20your%20services.',
            '_blank'
        )
        } />


    </HeroSection>


    {/* 2nd section  */}
    <div className='ContentSection'>
        <ContentIntro>
            <XlText style={{}} >About Vaishnavi Bricks</XlText>
            <SmallText>Vaishnavi Cement Bricks is committed to producing high-quality cement bricks with a focus on sustainability. With advanced manufacturing techniques, we ensure reliable and long-lasting building materials for every project.</SmallText>
            <SmallText>We manufacture and supply premium cement bricks that are ideal for all types of construction projects. Our focus on quality ensures that each brick delivers unmatched durability and performance.</SmallText>
            <div style={{display:'flex', gap:'9rem'}}>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <TheameLargeText>2K</TheameLargeText>
                    <ExtraSmallText>Happy Clients</ExtraSmallText>
                </div>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <TheameLargeText>75</TheameLargeText>
                    <ExtraSmallText>Projects Completed</ExtraSmallText>
                </div>
            </div>

            <div style={{display:'flex', gap:'7rem', }}>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <TheameLargeText>2 L</TheameLargeText>
                    <ExtraSmallText>Cubic MTRS Extract</ExtraSmallText>
                </div>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <TheameLargeText>5 M</TheameLargeText>
                    <ExtraSmallText style={{textAlign:'center', lineHeight:'19px'}}>Soft Upcomming <br></br> Project</ExtraSmallText>
                </div>
            </div>
        </ContentIntro>
        
        <img src={VBricks} className='IntoImg'  />
    </div>


    {/* 3rd Section */}
    <WhiteDiv>
    Our Locations
    </WhiteDiv>
    <div style={{padding:'2rem 0rem'}}>

        <div className='LocationContentSection' >
            <LocationCard>
                <XlText>Step 1</XlText>
                <div style={{display:'flex', alignItems:'center', gap:"1rem"}}>
                    < i style={{color:'#9734A6', fontSize:'20px'}} class="fa-solid fa-location-dot"></i>
                    <SmallText style={{fontWeight:'bold'}}>Survey No 548/2/1/1 Gowdavelli Village, Medchal , malkajgiri.
                    Pin : 501401</SmallText>
                </div>
                <div style={{display:'flex', alignItems:'center', gap:"1rem"}}>
                    < i style={{color:'#9734A6', fontSize:'20px'}} class="fa-solid fa-phone-volume"></i>
                    <SmallText style={{fontWeight:'bold'}}>+91 7674830405</SmallText>
                </div>
                <div style={{display:'flex', alignItems:'center', gap:"1rem"}}>
                    < i style={{color:'#9734A6', fontSize:'20px'}} class="fa-regular fa-envelope"></i>
                    <SmallText style={{fontWeight:'bold'}}>Vaishnavibricks2023@gmail.com</SmallText>
                </div>
                <TheameBtn style={{width:'100%', borderRadius:"5px"}}>Get In Touch</TheameBtn>
                </LocationCard>
            <img src={DarkMap} className='LocationMap'/>
        </div>


        
    </div>

    {/* Gallery Section */}
    <div style={{marginBottom:'4rem'}}>
    <WhiteDiv>
        Site Gallery
    </WhiteDiv>
    <GallerySection>
        <GalleryImg src={VBG1} />
        <GalleryImg src={VBG2} />
        <GalleryImg src={VBG3} />
    
    </GallerySection>
    </div>
    





    </>
  )
}

export default VaishnaviBricks