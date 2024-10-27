import React from 'react'
import { NormalText, SmallText, TheameBtn, TheameText } from './styledComponents'
import { FormComponent, InputComponent } from './Form'


export default function FormCard() {
  return (
    <FormComponent>
     <div style={{width:'70%', display:'flex', flexDirection:'column', gap:'1rem'}}>
     <TheameText>Enqury Now</TheameText>
      <NormalText>Ready to start your project? Contact us today for a free quote on our high-quality concrete and cement solutions.</NormalText>
      <SmallText> Our expert team is here to help you with tailored advice and fast, reliable service. Fill out the form below, and let’s build something great together!</SmallText>
     </div>
      <div className='InputSection'>
        <InputComponent  placeholder='Name' />
        <InputComponent  placeholder='Email' />
        <InputComponent  placeholder='PhoneN Number' />
        <InputComponent  placeholder='dropDown' />
      </div>
      <TheameBtn style={{fontSize:'14px', padding:'1rem 3rem'}}>Submit Now  <i className="fa-solid fa-arrow-right" style={{marginTop:'5px'}}></i></TheameBtn>
    </FormComponent>
  )
}

// export default Form