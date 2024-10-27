import React, { useState } from 'react';
import Ok from '../assets/ServiceAsserts/Ok.png';
import RMCImg from '../assets/ServiceAsserts/RMCImg.png';
import serNavImg1 from '../assets/ServiceAsserts/serNavImg1.png';
import serNavImg2 from '../assets/ServiceAsserts/serNavImg2.png';
import serNavImg3 from '../assets/ServiceAsserts/serNavImg3.png';
import serNavImg4 from '../assets/ServiceAsserts/serNavImg4.png';
import serNavImg5 from '../assets/ServiceAsserts/serNavImg5.png';
import serNavImg6 from '../assets/ServiceAsserts/serNavImg6.png';
import serNavImg7 from '../assets/ServiceAsserts/serNavImg7.png';
import service_hero from '../assets/ServiceAsserts/service_hero.png';
import FormCard from './FormCard';
import {
  Container,
  HeroSection,
  LightGreenSmallText,
  NavLink,
  NormalText,
  SecondNav,
  SecondNavContent,
  SmallText,
  WhiteDiv,
  XlText,
} from './styledComponents';













// Navigation data with images and text
const navData = {
  Residential: {
    imageSrc: serNavImg1,
    text: 'Ready Mix Concrete is an ideal solution for varied applications in residential constructions such as apartments, villas and independent houses. From building walls to foundations to sidewalks and driveways, RMC is high on quality and versatility and, more importantly, saves time. It also contributes to the desired sophistication and finishes that mark new-age constructions. Depending on your project’s scale and scope, Vaishnavi Concrete provides customization with the help of additives and colourants to meet specifi design requirements.',
  },
  Infrastructure: {
    imageSrc: serNavImg2,
    text: 'The infrastructure sector has undergone a sea of transformation in recent years. Rapid urbanization and the need for faster connectivity have significantly elevated quality standards and expectations. RMC aligns with today’s dynamic construction needs and helps achieve more substantial outcomes at par with the best in the world right here in India. Vaishnavi RMC brings in the innovation and scope needed to match the grand vision of these infrastructure projects, such as roads, highways, airports, metro projects, bridges and more. From providing need based customized grades and the required volumes according to the timelines, Vaishnavi RMC is the partner of choice to accomplish landmark projects successfully while saving significant time and costs.',
  },
  Industries: {
    imageSrc: serNavImg3,
    text: 'Industrial structures like Pharmaceuticals, Manufacturing plants, Mobile manufacturing, Data centers, etc.. are specialized constructions that can significantly benefit from RMC’s core characteristics of compressive strength, proportioning of ingredients, workability and water-cement ratio, all configured per the project specifications. Manufactured under controlled conditions, high quality Vaishnavi RMC comes with the highest precision that directly impacts structural strength, thus helping the organization achieve uninterrupted workflow and long-term goals.',
  },
  Transport: {
    imageSrc: serNavImg4,
    text: 'Transporting the concrete mix is defined as the transferring of concrete from the mixing plant to the construction site. And Around 50+ Own vehicles For Uninterrupted Supply of RMC & Cement Bricks',
  },
  'Concrete Additive': {
    imageSrc: serNavImg5,
    text: 'Concrete additives enhance the performance and durability of concrete mixes. They can improve workability, reduce water content, and accelerate curing times. Some additives provide resistance to environmental factors like freeze-thaw cycles and chemical attacks. Others may include fibers for increased tensile strength and reduced cracking. Utilizing the right additives can significantly extend the lifespan and structural integrity of concrete applications.',
  },
  'Ready Mix': {
    imageSrc: serNavImg6,
    text: 'At Vaishnavi RMC is produced in its fully automated and computerized concrete batching plants at multiple locations across India.',
  },
  'Commercial Delivery': {
    imageSrc: serNavImg7,
    text: 'Commercial concrete can be broadly defined as concrete used to build or enhance business facilities, such as industrial buildings, warehouses, retail stores and even restaurants.',
  },
};

function Service() {
  const [activeNav, setActiveNav] = useState('Residential');

  const { imageSrc, text } = navData[activeNav];

  
  return (
    <>
      {/* Hero Section */}
      <HeroSection bgImage={service_hero}>
        <p className='heroTitle'>Services</p>
      </HeroSection>

      {/* Intro Section */}
      <div className='ServiceWhiteDiv'>
      <WhiteDiv>
        Providing specialized cement mixtures designed to meet unique application
        needs, maximizing performance and efficiency for your construction projects.
      </WhiteDiv>
      </div>
      

      {/* Navigation and Content Section */}
      <Container>
        <SecondNav>
          {Object.keys(navData).map((navItem) => (
            <NavLink
              key={navItem}
              active={activeNav === navItem}
              onClick={() => setActiveNav(navItem)}
            >
              {navItem}
            </NavLink>
          ))}
        </SecondNav>

        <SecondNavContent>
          <img style={{width:'96vw'}} src={imageSrc} alt={activeNav} />
          <NormalText>{text}</NormalText>
        </SecondNavContent>
      </Container>



      {/* RMC Section */}
      <div className="RMCSection">
        <img src={RMCImg} />
        <div className="contentCard">
          <XlText >What is RMC ?</XlText>
          <SmallText style={{color:'rgba(255, 255, 255, 0.822)'}}>RMC‘s full form is Ready Mixed Concrete. It is manufactured in a batching plant or factory according to the standard specifications that are required. After being prepared it is delivered to the construction location in two different ways. The first way is using in-transit mixers which deliver the concrete mixture in a plastic state to the location. The second way is by using volumetric concrete mixer which delivers the material in the dry state and mixes it on the site.</SmallText>
          
            <div className='listCard'>
              <div style={{display:'flex', gap:'1rem', alignItems:'center'}}>
                  <img src={Ok} alt="" style={{width:'20px', height:'20px'}}/>
                  <SmallText style={{color:'rgba(255, 255, 255, 0.822)', fontSize:'1.5rem'}}>Customer Centricity</SmallText>
                </div>

                <div style={{display:'flex', gap:'1rem', alignItems:'center'}}>
                  <img src={Ok} alt="" style={{width:'20px', height:'20px'}}/>
                  <SmallText style={{color:'rgba(255, 255, 255, 0.822)', fontSize:'1.5rem'}}>High Quality Specifications</SmallText>
                </div>
            </div>


           <div className='listCard'>
            <div style={{display:'flex', gap:'1rem', alignItems:'center'}}>
              <img src={Ok} alt="" style={{width:'20px', height:'20px'}}/>
              <SmallText style={{color:'rgba(255, 255, 255, 0.822)', fontSize:'1.5rem'}}>Transparent Communication with Stakeholders</SmallText>
            </div>

            <div style={{display:'flex', gap:'1rem', alignItems:'center'}}>
              <img src={Ok} alt="" style={{width:'20px', height:'20px'}}/>
              <SmallText style={{color:'rgba(255, 255, 255, 0.822)', fontSize:'1.5rem'}}>Environmental Sustainability</SmallText>
            </div>
            </div>

            <NormalText><u style={{color:'white'}}>Our other range of RMCs</u></NormalText>
          
            <div style={{display:'flex', gap:'1rem', flexWrap:'wrap', lineHeight:'5px'}}>
             <LightGreenSmallText>. High grade Concrete </LightGreenSmallText>
             <LightGreenSmallText> . Slab Concrete for IHB / Residential </LightGreenSmallText>
             <LightGreenSmallText>  . Self-Compacting Concrete</LightGreenSmallText>
             <LightGreenSmallText> . Smart Dynamic Concrete </LightGreenSmallText>
             <LightGreenSmallText>  . Green Concrete </LightGreenSmallText>
             <LightGreenSmallText>. Colour Concrete </LightGreenSmallText>
             <LightGreenSmallText>. Stamp Concrete </LightGreenSmallText>
             <LightGreenSmallText>  . Light weight Concrete</LightGreenSmallText>
             <LightGreenSmallText>   . Bag Concrete </LightGreenSmallText>
             <LightGreenSmallText> . Fiber Reinforced Concrete (PPFiber) </LightGreenSmallText>
             <LightGreenSmallText>. Fiber Reinforced Concrete (Steel Fiber) </LightGreenSmallText>
             <LightGreenSmallText> . Temperature Control Concrete</LightGreenSmallText>
            </div>
         
        </div>
      </div>



      <div className="formSection">
        <FormCard />
      </div>



    </>
  );
}

export default Service;

