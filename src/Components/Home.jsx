// import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import companyOne from '../assets/company1.png'
import companyTwo from '../assets/company2.png'
import companyThree from '../assets/company3.png'
import companyFour from '../assets/company4.png'
import companyFive from '../assets/company5.png'
import companySix from '../assets/company6.png'
import companySeven from '../assets/company7.png'
import companyEight from '../assets/company8.png'
import completedOne from '../assets/completed1.png'
import completedTwo from '../assets/completed2.png'
import completedThree from '../assets/completed3.png'
import isoImg from '../assets/isoImg.png'
import lastSec from '../assets/last-section.png'
import listType from '../assets/listType.png'
import Testimony from '../assets/require.png'
import site1 from '../assets/site1.png'
import site2 from '../assets/site2.png'
import site3 from '../assets/site3.png'
import site4 from '../assets/site4.png'
import sustainabilityImage from '../assets/sustainabilityImage.png'
import testimonyImg from '../assets/testimonyImg.png'
import vehicleOne from '../assets/vehicleOne.png'
import vehicleThree from '../assets/vehicleThree.png'
import vehicleTwo from '../assets/vehicleTwo.png'
import Whatsapp from '../assets/whatsapp.png'
import './Home.css'
import './HomeMediaQueries.css'
function Home() {

  let [activeItem,setActiveItem]=useState('Premiere Mix')

  function handleActiveItem(active){
    setActiveItem(active)
  }
  return (
    <>
    <div className="home-hero">
      <div className='home-desc'>
        <h2>Specialty concrete solutions 
        for the most demanding projects</h2>
        <p>
        RMC‘s full form is Ready Mixed Concrete. It is manufactured in a batching plant or factory according to the standard specifications that are required. After being prepared it is delivered to the construction location in two different ways. 
        </p>
      </div>
      <div className="iso" >
        <img src={isoImg} alt="" />
      </div>
<div className='enquire'>
  <p>Enquire Now</p>
</div>

    <div className='whatsapp'>
    <a href="https://wa.me/7093320405?text=I am interested in your Projects. I want to know more details."><img src={Whatsapp} alt="" /></a>

    </div>

      <div className="contact-home">
        <input type="text" placeholder='Name'/> 
        <input type="tel" placeholder='Phone' /> 
        <input type="email" placeholder='Email' /> 
        <button>Submit <i className='fa-solid fa-right-long ms-2'></i></button>
      </div>
    </div>

<div className="section-one">
  <div className="section-one-left">
    <h3>About Us</h3>
    <h1>
    WHY CHOOSE US FOR PROJECTS!
    </h1>
    <hr />
    <p>
    Vaishnavi RMC manufactures and develops customized solutions based on thorough research and extensive knowledge of concrete technology..
    At Vaishnavi Ready Mix, we specialize in producing top-grade concrete and cement mixtures tailored for commercial, residential, and industrial projects. With our state-of-the-art equipment, skilled team, and commitment to excellence, we ensure every batch meets industry standards and customer expectations.
    </p>
    <div className='testimonials'>
      <div>
        <p>2K</p>
        <p>Happy Clients</p>
      </div>
      <div>
        <p>75</p>
        <p>PROJECTS COMPLETED</p>
      </div>
      <div>
        <p>2 L</p>
        <p>Cubic MTR Extract</p>
      </div>
      <div>
        <p>5 M</p>
        <p>SQFT UPCOMING PROJECTS</p>
      </div>
    </div>

  </div>
  <div className="section-one-right">

  </div>
  <div className="section-one-img">
    <div>
        <i className='fa-solid fa-chevron-left'></i>
        <i className='fa-solid fa-chevron-right'></i>
    </div>
  </div>
</div>

<h1 className='homeTitle'> We Are...</h1>

<div className="section-two">

</div>

<div className="section-desc">
  <div>
    <h1>The pride of Vaishnavi</h1>
    <p>Ultra-luxe, self-sustaining apartments that combine prime location, sound infrastructure, and best-in-class amenities, bringing economic prosperity and tremendous value to the residents.    </p>
  </div>
  <div className='buttonGrp'>
    <button>Vaishnavi MRC</button>
    <button>RMK Bricks</button>
    <button>Vaishnavi Bricks</button>
    <button>Vaishnavi Crushers</button>
  </div>
</div>

<div className="line">

</div>

<div className="section-three">
<Link to='/vaishnavi-rmc' className='section-three-card'>
  <div>
<div>
<h2>Vaishnavi RMC</h2>
<p>All types of Concrete Grades <br /> Rachaloor, Thukkuguda / Pati ghanpur,Patancheru </p>
</div>
<div>
<i className='fa-solid fa-arrow-right'></i>
</div>
    </div>
  </Link>
  <Link to='/mrk-bricks' className='section-three-card'>
<div>
<div>
<h2>MRK Bricks</h2>
<p>All types of Material Bricks <br /> Rachaloor, Thukkuguda / Pati ghanpur,Patancheru </p>
</div>
<div>
<i className='fa-solid fa-arrow-right'></i>
</div>
    </div>
  </Link>
  <Link to='/vaishnavi-bricks' className='section-three-card'>
  <div>
  <div>
<h2>Vaishnavi Bricks</h2>
<p>All types of Cement Bricks (CC Blocks)<br /> GOWDAVELLI , MEDCHAL </p>
</div>
<div>
<i className='fa-solid fa-arrow-right'></i>
</div>
      </div>
  </Link>
  <Link to='/vaishnavi-crushers' className='section-three-card'>
  <div>
  <div>
<h2>Vaishnavi Crushers</h2>
<p>All types of Aggregates<br /> Hyderabad </p>
</div>
<div>
<i className='fa-solid fa-arrow-right'></i>
</div>
      </div>
  </Link>
</div>

<div className="section-four">
  <div className='section-four-left '>

  </div>
  <div className='section-four-right '>
    <h2>
    What Is RMC ?
    </h2>
<p>
RMC‘s full form is Ready Mixed Concrete. It is manufactured in a batching plant or factory according to the standard specifications that are required. After being prepared it is delivered to the construction location in two different ways. The first way is using in-transit mixers which deliver the concrete mixture in a plastic state to the location. The second way is by using volumetric concrete mixer which delivers the material in the dry state and mixes it on the site.
</p>
<ul className='rmcBene'>
  <li> <img src={listType} alt="listType" width={35}/> <span className='ms-1'>Customer Centricity</span> </li>
  <li><img src={listType} alt="listType" width={35}/> <span className='ms-1'>High Quality Specifications</span> </li>
  <li><img src={listType} alt="listType" width={35}/> <span className='ms-1'>Transparent Communication with Stakeholders</span> </li>
  <li><img src={listType} alt="listType" width={35}/><span className='ms-1'>Environmental Sustainability</span></li>
</ul>
<h3>Our other range of RMCs</h3>
<ul className='rmcAdv'>
<li>High grade Concrete</li> <li>Slab Concrete for IHB / Residential</li> <li>Self-Compacting Concrete </li> <li>Smart Dynamic Concrete</li>  <li>GreenConcrete</li> <li>Colour Concrete</li> <li>Stamp Concrete</li> <li>Light weight Concrete</li> <li>Bag Concrete</li> <li>Fiber Reinforced Concrete (PP Fiber)</li> <li>Fiber Reinforced Concrete (Steel Fiber)</li> <li>Temperature Control Concrete</li>
</ul>
  </div>
</div>

<h1 className='homeTitle'>Our Vehicles</h1>

<div className="section-five">
<div>
    <img src={vehicleThree} alt="" className='Img1' />
  </div>
  <div>
    <img src={vehicleOne} alt="" className='Img2' />
  </div>
  <div>
    <img src={vehicleTwo} alt="" className='Img3' />
  </div>
</div>

<div className='Testimony'>
  <img src={Testimony} alt="" />
</div>

<div className="sustainability">
  <div className="sustainability-left">
<img src={sustainabilityImage} alt="Sustainability Image" />
  </div>
  <div className="sustainability-right">
<h1>Running Towards Sustainability</h1>
<p>RMC‘s full form is Ready Mixed Concrete. It is manufactured in a batching plant or factory according to the standard specifications that are required. After being prepared it is delivered to the construction location in two different ways. The first way is using in-transit mixers which deliver the concrete mixture in a plastic state to the location. The second way is by using volumetric concrete mixer which delivers the material in the dry state and mixes it on the site.</p>
<div className='collaborate'>
<img src={companyOne} alt="Client Logo" />
<img src={companyTwo} alt="Client Logo" />
<img src={companyThree} alt="Client Logo" />
<img src={companyFour} alt="Client Logo" />
<img src={companyFive} alt="Client Logo" />
<img src={companySix} alt="Client Logo" />
<img src={companySeven} alt="Client Logo" />
<img src={companyEight} alt="Client Logo" />
</div>
  </div>
</div>

<h1 className='homeTitle'>COMPLETED PROJECTS</h1>

<div className="completed-projects">
  <img src={completedOne} alt="Completed Projects Image" />
  <img src={completedTwo} alt="Completed Projects Image" />
  <img src={completedThree} alt="Completed Projects Image" />
</div>

<h1 className='homeTitle'>PRODUCTS GRADE</h1>

<div className="projects-grade">
  <div>
  <div className="projects-grade-left">
    <h3>Mixers</h3>
    <ul>
      <li onClick={()=>{
        handleActiveItem('Premiere Mix')
      }} className={activeItem === 'Premiere Mix' ? 'activeList':''}>Premiere Mix</li>
      <li onClick={()=>{
        handleActiveItem('Residential Mix')
      }} className={activeItem === 'Residential Mix' ? 'activeList':''}>Residential Mix</li>
      <li onClick={()=>{
        handleActiveItem('Micro Tech Mix')
      }} className={activeItem === 'Micro Tech Mix' ? 'activeList':''}>Micro Tech Mix</li>
      <li onClick={()=>{
        handleActiveItem('Special Products')
      }} className={activeItem === 'Special Products' ? 'activeList':''}>Special Products</li>
    </ul>
</div>
<div className={activeItem === 'Premiere Mix'?'projects-grade-right':'d-none projects-grade-right'}>
  <div>
    <h1>M10 GRADE</h1>
    <p><strong>Mix Ratio:</strong> 1:3:6 (1 cement, 3 sand and 6 aggregate)</p>
    <p><strong>Suitability:</strong> Used as PCC (Plain Cement Concrete) in the construction of levelling course, bedding for footing, concrete roads, etc.</p>
  </div>
  <div>
    <h1>M15 GRADE</h1>
    <p><strong>Mix Ratio:</strong> 1:2:4 (1 cement, 2 sand and 4 aggregate)</p>
    <p><strong>Suitability:</strong> Used as PCC (Plain Cement Concrete) in the construction of levelling course, bedding for footing, concrete roads, etc.</p>
  </div>
  <div>
    <h1>M20 GRADE</h1>
    <p><strong>Mix Ratio:</strong> 1:2:4 (1 cement, 3 sand and 6 aggregate)</p>
    <p><strong>Suitability:</strong> Used as PCC (Plain Cement Concrete) in the construction of levelling course, bedding for footing, concrete roads, etc.</p>
  </div>
</div>


<div className={activeItem === 'Residential Mix'?'projects-grade-right':'d-none projects-grade-right'}>
  <div>
    <h1>M25 GRADE</h1>
    <p><strong>Mix Ratio:</strong> 1:1:2 (1 cement, 1 sand and 2 aggregate)</p>
    <p><strong>Suitability:</strong>  Used as RCC (Reinforced Cement Concrete) in the construction of slabs, beams, columns, footings, etc.</p>
  </div>
  <div>
    <h1>M30 GRADE</h1>
    <p><strong>Mix Ratio:</strong>Moderate Mix Designs as per IS-10262-2009</p>
    <p><strong>Suitability:</strong>   Used as RCC (Reinforced Cement Concrete) in the construction of slabs, beams, columns, footings, etc.</p>
  </div>
  <div>
    <h1>M35 GRADE</h1>
    <p><strong>Mix Ratio:</strong> Moderate Mix Designs as per IS-10262-2009</p>
    <p><strong>Suitability:</strong> Used as RCC (Reinforced Cement Concrete) in the construction of slabs, beams, columns, footings, etc.</p>
  </div>
</div>

  
  
<div className={activeItem === 'Micro Tech Mix'?'projects-grade-right':'d-none projects-grade-right'}>
 <div className='mt-5'>
  <p>A-MIX’s high-strength concrete has high compressive strength and is appropriate for high-rise buildings, long-span bridges, ultra-thin white topping and constructions in coastal areas, etc.
  </p>
  <p className='mt-5'>The concrete exhibits superior mechanical properties, including strength, durability, resistance to chemical attack and workability. It is achieved by adding higher but calibrated concentrations of mineral admixtures as compared to conventional concrete.</p>
 </div>
</div>
  

 
 
<div className={activeItem === 'Special Products'?'projects-grade-right':'d-none projects-grade-right'}>
 <div className='mt-5'>
  <p>A-MIX’s high-performance concrete with superior mechanical properties, including strength, durability, resistance to chemical attack and workability, is most suited for specialised applications.
  </p>
<ul style={{listStyleType:'disc'}} className='ms-5 fw-bold'>
  <li>Floor Nation Mix</li>
  <li>Fiber Mix</li>
  <li>Enviro Mix</li>
  <li>Poro Foam Mix</li>
  <li>Waterproof Mix</li></ul> 
</div>
</div>


  </div>

{/* <div>
  <div className="projects-grade-left">
    <h3>Mixers</h3>
    <ul>
      <li>Premiere Mix</li>
      <li>Residential Mix</li>
      <li>Micro Tech Mix</li>
      <li>Special Products</li>
    </ul>
</div>
<div className="projects-grade-right">
  <div>
    <h1>M25 GRADE</h1>
    <p><strong>Mix Ratio:</strong> 1:1:2 (1 cement, 1 sand and 2 aggregate)</p>
    <p><strong>Suitability:</strong>  Used as RCC (Reinforced Cement Concrete) in the construction of slabs, beams, columns, footings, etc.</p>
  </div>
  <div>
    <h1>M30 GRADE</h1>
    <p><strong>Mix Ratio:</strong>Moderate Mix Designs as per IS-10262-2009</p>
    <p><strong>Suitability:</strong>   Used as RCC (Reinforced Cement Concrete) in the construction of slabs, beams, columns, footings, etc.</p>
  </div>
  <div>
    <h1>M35 GRADE</h1>
    <p><strong>Mix Ratio:</strong> Moderate Mix Designs as per IS-10262-2009</p>
    <p><strong>Suitability:</strong> Used as RCC (Reinforced Cement Concrete) in the construction of slabs, beams, columns, footings, etc.</p>
  </div>
</div>
  </div> */}

{/* <div>
  <div className="projects-grade-left">
    <h3>Mixers</h3>
    <ul>
      <li>Premiere Mix</li>
      <li>Residential Mix</li>
      <li>Micro Tech Mix</li>
      <li>Special Products</li>
    </ul>
</div>
<div className="projects-grade-right">
 <div className='mt-5'>
  <p>A-MIX’s high-strength concrete has high compressive strength and is appropriate for high-rise buildings, long-span bridges, ultra-thin white topping and constructions in coastal areas, etc.
  </p>
  <p className='mt-5'>The concrete exhibits superior mechanical properties, including strength, durability, resistance to chemical attack and workability. It is achieved by adding higher but calibrated concentrations of mineral admixtures as compared to conventional concrete.</p>
 </div>
</div>
  </div> */}

{/* <div>
  <div className="projects-grade-left">
    <h3>Mixers</h3>
    <ul>
      <li>Premiere Mix</li>
      <li>Residential Mix</li>
      <li>Micro Tech Mix</li>
      <li>Special Products</li>
    </ul>
</div>
<div className="projects-grade-right">
 <div className='mt-5'>
  <p>A-MIX’s high-performance concrete with superior mechanical properties, including strength, durability, resistance to chemical attack and workability, is most suited for specialised applications.
  </p>
<ul style={{listStyleType:'disc'}} className='ms-5 fw-bold'>
  <li>Floor Nation Mix</li>
  <li>Fiber Mix</li>
  <li>Enviro Mix</li>
  <li>Poro Foam Mix</li>
  <li>Waterproof Mix</li></ul> 
</div>
</div>
  </div> */}
  


</div>

{/* <h1 className='homeTitle'>Our Site Gallery</h1> */}

<div className='site-gallery relative mt-3'>
<div className='gallery'>
<img src={site1} alt="Site Gallery Image" />
<img src={site2} alt="Site Gallery Image" />
<img src={site3} alt="Site Gallery Image" />
<img src={site4} alt="Site Gallery Image" />
</div>
<div className='upper-ellipse'>
<h1 className='homeTitle'>Our Site Gallery</h1>
</div>
<div className="lower-ellipse">
  <button>Watch All Videos</button>
</div>
</div>

<div className="section-testimonials">
  <div className="testimonials-desc">
    <p>I couldn&apos;t have asked for a better place to call home than Vaishnavi RMC. From the moment I Connected into this vibrant community, I knew I had made the right choice. Everything here exceeded all my expectations, offering a perfect blend of Working. What truly sets Vaishnavi RMC One apart is the sense of belonging it provides – the friendly neighbours, the top-notch Machinery, and the beautifully Site surroundings. </p>
  </div>
  <img src={testimonyImg} alt="Testimonials Image" />
  <div className='testimony-logo'>
    <div>
      <h1>Excellecy of Quality Standards</h1>
      <h3>Ridhira Sheik</h3>
      <p>Product Manager</p>
    </div>
  </div>
</div>

    <div className="last-section">
      <img src={lastSec} alt="" />
      <div className='last-info absolute'>
        <h2>
        Ready to Work With Us?
        </h2>
        <p>
        Visit our Site Location and get in touch with us!
        </p>
      </div>
    </div>
    </>
  )
}

export default Home
