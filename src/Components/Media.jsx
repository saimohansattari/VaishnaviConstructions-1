// import React from 'react'
import './Media.css'
// import MediaItem from './MediaItem'
import Media1 from '../assets/Media/media1.png'
import Media2 from '../assets/Media/media2.png'
import Media3 from '../assets/Media/media3.png'
import Media4 from '../assets/Media/media4.png'
import Media5 from '../assets/Media/media5.png'
import Media6 from '../assets/Media/media6.png'
import Media7 from '../assets/Media/media7.png'
import Media8 from '../assets/Media/media8.png'
import Media9 from '../assets/Media/media9.png'
import Media10 from '../assets/Media/media10.png'
import Media11 from '../assets/Media/media11.png'
import Media12 from '../assets/Media/media12.png'
import Media13 from '../assets/Media/media13.png'
import Media14 from '../assets/Media/media14.png'
import Media15 from '../assets/Media/media15.png'
import Media16 from '../assets/Media/media16.png'
import Media17 from '../assets/Media/media17.png'
import Media18 from '../assets/Media/media18.png'

// import BannerImg from '../assets/MediaBanner.png'
const Media = () => {
  // let mediaItems = [
  //   {
  //     imgLink:{Media1},
  //     id:1
  //   },
  //   {
  //     imgLink:{Media2},
  //     id:2
  //   },
  //   {
  //     imgLink:{Media3},
  //     id:3
  //   },
  //   {
  //     imgLink:{Media4},
  //     id:4
  //   },
  //   {
  //     imgLink:{Media5},
  //     id:5
  //   },
  //   {
  //     imgLink:{Media6},
  //     id:6
  //   },
  //   {
  //     imgLink:{Media7},
  //     id:7
  //   },
  //   {
  //     imgLink:{Media8},
  //     id:8
  //   },
  //   {
  //     imgLink:{Media9},
  //     id:9
  //   },
  //   {
  //     imgLink:{Media10},
  //     id:10
  //   },
  //   {
  //     imgLink:{Media11},
  //     id:11
  //   },
  //   {
  //     imgLink:{Media12},
  //     id:12
  //   },
  //   {
  //     imgLink:{Media13},
  //     id:13
  //   },
  //   {
  //     imgLink:{Media14},
  //     id:14
  //   },
  //   {
  //     imgLink:{Media15},
  //     id:15
  //   },
  //   {
  //     imgLink:{Media16},
  //     id:16
  //   },
  //   {
  //     imgLink:{Media17},
  //     id:17
  //   },
  //   {
  //     imgLink:{Media18},
  //     id:18
  //   }
    
  // ]
  return (
    <>
    <div className='banner d-flex align-items-center'>
<h1 className='mediaTitle'>Media</h1>
    </div>

    <div>
      <div className='mediaContainer'>
      <img src={Media1} alt={'media1'} width={430} height={370} style={{margin:'10px'}}/>
      <img src={Media2} alt={'media2'} width={430} height={370} style={{margin:'10px'}}/> 

      <img src={Media3} alt={'media3'} width={430} height={370} style={{margin:'10px'}}/> 

      <img src={Media4} alt={'media4'} width={430} height={370} style={{margin:'10px'}}/> 
      <img src={Media5} alt={'media5'} width={430} height={370} style={{margin:'10px'}}/> 
      <img src={Media6} alt={'media6'} width={430} height={370} style={{margin:'10px'}}/> 
      <img src={Media7} alt={'media7'} width={430} height={370} style={{margin:'10px'}}/> 
      <img src={Media8} alt={'media8'} width={430} height={370} style={{margin:'10px'}}/> 
      <img src={Media9} alt={'media9'} width={430} height={370} style={{margin:'10px'}}/> 
      <img src={Media10} alt={'media10'} width={430} height={370} style={{margin:'10px'}}/> 
      <img src={Media11} alt={'media11'} width={430} height={370} style={{margin:'10px'}}/> 
      <img src={Media12} alt={'media12'} width={430} height={370} style={{margin:'10px'}}/> 
      <img src={Media13} alt={'media13'} width={430} height={370} style={{margin:'10px'}}/> 
      <img src={Media14} alt={'media14'} width={430} height={370} style={{margin:'10px'}}/> 
      <img src={Media15} alt={'media15'} width={430} height={370} style={{margin:'10px'}}/> 
      <img src={Media16} alt={'media16'} width={430} height={370} style={{margin:'10px'}}/> 
      <img src={Media17} alt={'media17'} width={430} height={370} style={{margin:'10px'}}/> 
      <img src={Media18} alt={'media18'} width={430} height={370} style={{margin:'10px'}}/> 



        {/* {
          mediaItems.map((item)=>{
           return <>
           <MediaItem imgLink={item.imgLink} id={item.id} />
           </> 
          })
        } */}
      </div>
    </div>
    </>
  )
}

export default Media
