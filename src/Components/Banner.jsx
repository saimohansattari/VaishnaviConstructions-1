import React from 'react'

const Banner = ({bgImg}) => {
  return (
    <>
    <div className='banner d-flex align-items-center' style={{
  height: '551px',
  background: `linear-gradient(180deg, rgba(0, 1, 4, 0.31) 0%, rgba(5, 5, 5, 0.395) 51.87%), url({bgImg})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
}}>
<h1 className='mediaTitle'>Media & Clients</h1>
    </div>
    </>
  )
}

export default Banner
