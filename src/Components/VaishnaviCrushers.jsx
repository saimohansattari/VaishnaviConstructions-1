import React from 'react'
import LightMap from '../assets/LightMap.png'
import VC_hero from '../assets/ServiceAsserts/VCrushers/VC_hero.png'
import VCG1 from '../assets/ServiceAsserts/VCrushers/VCG1.png'
import VCG2 from '../assets/ServiceAsserts/VCrushers/VCG2.png'
import VCG3 from '../assets/ServiceAsserts/VCrushers/VCG3.png'
import vCImg from '../assets/ServiceAsserts/VCrushers/VCImg.png'
import whatsappImg from '../assets/whatsappImg.png'
import { FormComponent, InputComponent } from './Form'
import { ContentIntro, ExtraSmallText, GalleryImg, GallerySection, HeroSection, LocationCard, SmallText, TheameBtn, TheameLargeText, WhatsappIcon, WhiteDiv, XlText } from './styledComponents'



function VaishnaviCrushers() {
  return (
    <>
    <HeroSection style={{height:'auto', padding:'10rem'}} bgImage={VC_hero} >
       <div style={{display:'flex', flexDirection:'column', gap:'2rem'}}>
       <p >Crushing It with Precision and Power</p>
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
            <XlText style={{}} >About Vaishnavi Crushers</XlText>
            <SmallText>At Vaishnavi Crushers, we are committed to supplying premium aggregates for construction projects of any size. Our reliable processes and experienced team set us apart in the industry.</SmallText>
            <SmallText>We specialize in producing top-grade aggregates and stones for the construction industry. Our cutting-edge crushing units ensure the finest quality material for roads, bridges, and buildings.</SmallText>
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
        
        <img src={vCImg} className='IntoImg'  />
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
                    <SmallText style={{fontWeight:'bold'}}>Hyderabad</SmallText>
                </div>
                <div style={{display:'flex', alignItems:'center', gap:"1rem"}}>
                    < i style={{color:'#9734A6', fontSize:'20px'}} class="fa-solid fa-phone-volume"></i>
                    <SmallText style={{fontWeight:'bold'}}>+91 7331130405</SmallText>
                </div>
                <div style={{display:'flex', alignItems:'center', gap:"1rem"}}>
                    < i style={{color:'#9734A6', fontSize:'20px'}} class="fa-regular fa-envelope"></i>
                    <SmallText style={{fontWeight:'bold'}}>vaishnavicrushers2024@gmail.com</SmallText>
                </div>
                <TheameBtn style={{width:'100%', borderRadius:"5px"}}>Get In Touch</TheameBtn>
                </LocationCard>
            <img src={LightMap} className='LocationMap'/>
        </div>


        
    </div>

    {/* Gallery Section */}
    <div style={{marginBottom:'4rem'}}>
    <WhiteDiv>
        Site Gallery
    </WhiteDiv>
    <GallerySection>
        <GalleryImg src={VCG1} />
        <GalleryImg src={VCG2} />
        <GalleryImg src={VCG3} />
    
    </GallerySection>
    </div>
    





    </>

)
}

export default VaishnaviCrushers