import React from 'react'
import About_hero_image from '../assets/AboutAsserts/About_hero_image.png'
import About_Vaishnavi from '../assets/AboutAsserts/About_Vaishnavi.png'
import dot from '../assets/AboutAsserts/dot.svg'
import Founder from '../assets/AboutAsserts/Founder.png'
import IndustryImg from '../assets/AboutAsserts/IndustryImg.png'
import { HeroSection, NormalText, SmallText, TextContent, TheameBtn, TheameText, VisionSection, WheatImg, WheatSection, WhiteDiv, XlText } from './styledComponents'





function AboutPage
() {
  
  return (
    <>
     <HeroSection bgImage={About_hero_image}>
        <p className='heroTitle' style={{textAlign:'left',fontFamily:'Kumbh Sans',fontSize:'24px',fontWeight:'400',lineHeight:'90px',letterSpacing:'3px'}}>About Us</p>
     </HeroSection>

      <WheatSection>
      <div className='resContentV'>
          <TheameText>Why Us</TheameText>
          <XlText>Our Company</XlText>
          </div>
        <div className="ImageSection">
          <WheatImg src={About_Vaishnavi} alt="" />
        </div>
        <div className="textSection">
          <div className='resContent'>
          <TheameText>Why Us</TheameText>
          <XlText>Our Company</XlText>
          </div>

          <NormalText>
          RMC is high on quality and versatility and, more importantly, saves time. It also contributes to the desired sophistication and finishes that mark new-age constructions. 
          </NormalText>

          <NormalText>
          Vaishnavi Ready Mix has built a reputation for delivering reliable and consistent concrete solutions. Whether it’s for roads, bridges, or residential buildings, we ensure our products meet the toughest construction requirements. With a focus on quality, efficiency, and sustainability, we aim to be your trusted partner in every build.
          </NormalText>
          <TheameBtn>Download brochure</TheameBtn>
        </div>
      </WheatSection>

      <WhiteDiv>
      Strength, Reliability, and Quality in Every Pour.
      </WhiteDiv>

      <VisionSection>
        <div className="header">
          <TheameText>Our Contempt</TheameText>
          <XlText>Vision & Mission</XlText>
        </div>

        <div className='VisionSection'>
          <div className="ImageSection">
            <WheatImg src={IndustryImg} />
            <div className="textSection">
                <div className="textSection">
                <XlText>Vision</XlText>
                <SmallText>To be a leading provider of sustainable and high-quality concrete solutions, setting new benchmarks in the construction industry through innovation, reliability, and customer satisfaction</SmallText>
                </div>

                <div className="textSection">
                  <XlText>Mission</XlText>
                 <div style={{display:'flex', flexDirection:'column', gap:'0.5rem', textAlign:'left'}}>
                  <div style={{display:'flex',  gap:'1rem', alignItems:'top'}}>
                      <img src={dot} style={{marginBottom:'1.9rem', width:'8px',}} />
                      <SmallText>To deliver top-grade ready-mix concrete and cement mixers that meet the highest industry standards.</SmallText>
                  </div>
                  <div style={{display:'flex',  gap:'1rem', alignItems:'top'}}>
                      <img src={dot} style={{marginBottom:'1.9rem', width:'8px',}} />
                      <SmallText>To ensure timely and cost-effective solutions tailored to the specific needs of our clients</SmallText>
                  </div>
                  <div style={{display:'flex',  gap:'1rem', alignItems:'top'}}>
                      <img src={dot} style={{marginBottom:'1.9rem', width:'8px',}} />
                      <SmallText>To foster long-term relationships with customers by prioritizing quality, service, and trust.</SmallText>
                  </div>
                  <div style={{display:'flex',  gap:'1rem', alignItems:'top'}}>
                      <img src={dot} style={{marginBottom:'1.9rem', width:'8px',}} />
                      <SmallText>To adopt sustainable practices that minimize environmental impact and promote eco-friendly construction.</SmallText>
                  </div>
                 
                 </div>
                </div>
              
            </div>
          </div>

        </div>




      </VisionSection>


      <div className="founderSection">
        <TextContent>
          <div>
          <TheameText>Our Leader</TheameText>
          <XlText>Founder</XlText>
          </div>

          <div style={{display:'flex', flexDirection:'column', gap:'2rem'}}>
            <SmallText>
            approach combines traditional craftsmanship with modern engineering techniques. His commitment to quality, integrity, and customer satisfaction has been the cornerstone of the company’s growth and reputation in the market.
            </SmallText>
            <hr  />

            <div>
            <SmallText>Madhusudan Reddy Nimma</SmallText>
            <SmallText>Managing Director.</SmallText>
            </div>
          </div>
        </TextContent>
        <WheatImg src={Founder} />
      </div>





      
      

     


    </>
  )
}

export default AboutPage

