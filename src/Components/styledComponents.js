import styled from 'styled-components';
import AboutBg1 from '../assets/AboutAsserts/AboutBg1.png';
import FSImg1 from '../assets/AboutAsserts/FSImg1.png';

export const HeroSection = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  position: relative;
  height: 35vh;
  display: flex;
  gap: 3rem;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 4rem;

  @media screen and (max-width: 1024px) {  
      flex-wrap:wrap;
      padding: 2rem !important;
  }

  @media screen and (max-width: 600px) {  
      justify-content: center;
      padding: 2rem !important;
  }
`;


export const WheatSection = styled.div`
  background-color: #f2eadf;
  padding: 6rem 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media screen and (min-width: 600px) {
    .resContentV{
      display: none;
    }
  }

  @media screen and (max-width: 600px) { 
      padding: 1rem;
      text-align: center;
      justify-content: center;

      .resContent{
        display: none;
      }
  }

`;

export const WheatImg = styled.img`
padding-right: 2rem;
float: right;
height: 70vh;

@media screen and (max-width: 600px) { 
      padding-right: 0px;
  }
`

export const XlText = styled.text`
font-size: xx-large;
font-weight: 200;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
@media screen and (max-width: 600px) { 
        padding: 1rem;
        text-align: center;
      }
`

export const TheameText = styled.p`
color: rgba(191, 150, 94, 1);
font-size: 18px;
margin-bottom: 0.2rem;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

export const TheameLargeText =styled.p`
color: rgba(191, 150, 94, 1);
font-size: 44px;
margin-bottom: 0.2rem;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

export const ExtraSmallText =styled.p`
font-size: 14px;
line-height: 30px;
font-weight: 400;
color: rgba(0, 0, 0, 1);
`

export const SmallText = styled.p`
font-size: 1.2rem;
line-height: 30px;
font-weight: 400;
color: rgba(0, 0, 0, 1);

@media screen and (max-width: 600px) { 
        padding: 1rem;
        text-align: center;
      }
`;

export const NormalText = styled.p`
font-size: 1.5rem;
line-height: 35px;
font-weight: 400;
color: rgba(0, 0, 0, 1);

@media screen and (max-width: 600px) { 
       text-align: center;
      }
`

export const TheameBtn = styled.button`
width: fit-content;
cursor: pointer;
padding: 1rem;
background-color: rgba(191, 150, 94, 1);
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
color: white;
font-weight: 400;
font-size: 1.6rem;
border: none;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

export const WhiteDiv = styled.div`
  background-color: white;
  text-align: center;
  padding: 4rem 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 2rem;
  font-weight: 500;

 

  @media screen and (max-width: 600px) { 
      padding: 1rem;
      font-size: 20px ;
  }
`;




export const VisionSection = styled.div`
background-image: url(${AboutBg1});




`

export const TextContent = styled.div`
  width: 40vw;
  background-image: url(${FSImg1});
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 4rem 5rem;

  @media screen and (max-width: 600px) { 
       width: auto;
       padding: 1rem;
       gap: 1rem;
      }
`;





export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;

`;

export const SecondNav = styled.div`
border-radius: 15px;
  background-color: rgba(10, 23, 53, 1);
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 600px) { 
       justify-content: center;
       align-items: center;
       text-align: center;
      }
`;

export const NavLink = styled.div`
  color: ${(props) => (props.active ? 'rgba(253, 163, 3, 1)' : 'white')};
  border-bottom: ${(props) => (props.active ? '3px solid rgba(253, 163, 3, 1)' : 'none')};
  
  cursor: pointer;
  font-size: 1.5rem;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  padding: 0.5rem;
  transition: rgba(253, 163, 3, 1) 0.3s, border-bottom 0.3s;

  &:hover {
    color: rgba(253, 163, 3, 1);
  }
`;

export const SecondNavContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const LightGreenSmallText = styled.p`
color: rgba(255, 255, 0, 1);
font-size: 1rem;

`;


export const ContentIntro = styled.div`
background-image: url(${AboutBg1});
padding: 4rem 5rem;
display: flex;
justify-content: center;
gap: 2rem;
flex-direction: column;

@media screen and (max-width: 1020px) {
  align-items: center;
  padding: 1rem;
}
`;

export const LocationCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const GallerySection = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 2rem;
`;

export const GalleryImg = styled.img`
width: 400px;
height: 280px;

@media screen and (max-width: 1020px) {
  width: 320px;
height: 220px;
}
@media screen and (max-width: 600px) {
  width: 300px;
height: 200px;
}
`

export const WhatsappIcon = styled.img`
cursor: pointer;
width: 6rem;
height: 6rem;
bottom: 1rem;
right: 4rem;
position: absolute;
`



