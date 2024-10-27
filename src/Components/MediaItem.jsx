// import React from 'react'
import Media1 from '../assets/Media/media1.png'
function MediaItem({imgLink,id}) {
    // let newMedia = 'Media'+id
  return (
    <>
    <img src={Media1} alt={'media'+id} width={430} height={370} style={{margin:'10px'}}/> 
    </>
  )
}

export default MediaItem
