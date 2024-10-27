import styled from 'styled-components';


export const FormComponent = styled.div`
width: 65vw;
padding: 2rem;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
flex-direction: column;
gap: 1.5rem;

@media screen and (max-width: 1000px) {
      
      width: auto;
  }
`;


export const InputComponent = styled.input`
padding: 16px;
background-color: white;
width: 350px;
font-size: 14px;
border: 1px solid rgba(206, 206, 206, 1);
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
@media screen and (max-width: 1000px) {
      
      width: auto;
  }
`;