import React from 'react'
import DarkMap from '../assets/DarkMap.png'
import MRK_Bricks from '../assets/ServiceAsserts/MRKBricks/MRK_Bricks.png'
import MRK_hero from '../assets/ServiceAsserts/MRKBricks/MRK_hero.png'
import { default as MRKG1, default as MRKG3 } from '../assets/ServiceAsserts/MRKBricks/MRKG1.png'
import MRKG2 from '../assets/ServiceAsserts/MRKBricks/MRKG2.png'
import whatsappImg from '../assets/whatsappImg.png'
import { FormComponent, InputComponent } from './Form'
import { ContentIntro, ExtraSmallText, GalleryImg, GallerySection, HeroSection, LocationCard, SmallText, TheameBtn, TheameLargeText, WhatsappIcon, WhiteDiv, XlText } from './styledComponents'



function MrkBricks() {
  return (
    <>
    <HeroSection style={{height:'auto', padding:'10rem'}} bgImage={MRK_hero} >
       <div style={{display:'flex', flexDirection:'column', gap:'2rem'}}>
       <p >Shaping the Future, One Brick at a Time</p>
       <SmallText style={{color:'whitesmoke'}}>RMC‘s full form is Ready Mixed Concrete. It is manufactured in a batching plant or factory according to the standard specifications that are required. After being prepared it is delivered to the construction location in two different ways.  </SmallText>
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
            <XlText style={{}} >About MRK Bricks</XlText>
            <SmallText>MRK Cement Brick is committed to producing high-quality building materials that enhance the strength and aesthetics of any construction project. With years of industry experience, we are a trusted supplier for builders, architects, and developers. </SmallText>
            <SmallText>We specialize in the manufacturing of top-quality cement bricks designed to meet the needs of modern construction. Our products provide exceptional durability and sustainability for all kinds of projects.</SmallText>
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
        
        <img src={MRK_Bricks} className='IntoImg'  />
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
                    <SmallText style={{fontWeight:'bold'}}>Survey No - 578/2 Rachaloor Village,
                    Thukkuguda, Kandukur, RR Dist, Pin: 501359</SmallText>
                </div>
                <div style={{display:'flex', alignItems:'center', gap:"1rem"}}>
                    < i style={{color:'#9734A6', fontSize:'20px'}} class="fa-solid fa-phone-volume"></i>
                    <SmallText style={{fontWeight:'bold'}}>+91 7396040405</SmallText>
                </div>
                <div style={{display:'flex', alignItems:'center', gap:"1rem"}}>
                    < i style={{color:'#9734A6', fontSize:'20px'}} class="fa-regular fa-envelope"></i>
                    <SmallText style={{fontWeight:'bold'}}>vaishnavireadymix@gmail.com</SmallText>
                </div>
                <TheameBtn style={{width:'100%', borderRadius:"5px"}}>Get In Touch</TheameBtn>
                </LocationCard>
            <img src={DarkMap} className='LocationMap'/>
        </div>


        <div className='LocationContentSection' >
            <LocationCard>
                <XlText>Step 2</XlText>
                <div style={{display:'flex', alignItems:'center', gap:"1rem"}}>
                    < i style={{color:'#9734A6', fontSize:'20px'}} class="fa-solid fa-location-dot"></i>
                    <SmallText style={{fontWeight:'bold'}}>Survey No - 585 Pati Ghanpur Village, Pathancheru Mandal, Sagareddy Dist. Pin: 502300</SmallText>
                </div>
                <div style={{display:'flex', alignItems:'center', gap:"1rem"}}>
                    < i style={{color:'#9734A6', fontSize:'20px'}} class="fa-solid fa-phone-volume"></i>
                    <SmallText style={{fontWeight:'bold'}}>+91 7331120405</SmallText>
                </div>
                <div style={{display:'flex', alignItems:'center', gap:"1rem"}}>
                    < i style={{color:'#9734A6', fontSize:'20px'}} class="fa-regular fa-envelope"></i>
                    <SmallText style={{fontWeight:'bold'}}>vaishnavireadymix@gmail.com</SmallText>
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
        <GalleryImg src={MRKG1} />
        <GalleryImg src={MRKG2} />
        <GalleryImg src={MRKG3} />
    
    </GallerySection>
    </div>
    





    </>
  )
}

export default MrkBricks