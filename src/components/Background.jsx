import React from 'react'
import video1 from '../assets/video1.mp4'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'

const Background = ({playStatus, heroCount}) => {
  if (playStatus){
    return (
      <video src={video1} className='w-full h-full fixed top-0 left-0 bottom-0 right-0 float-left -z-10 object-cover' muted autoPlay loop></video>
    )
  } 
  else if(heroCount === 0){
    return <img src={image1} alt="image-1" className='w-full h-full fixed top-0 left-0 bottom-0 right-0 float-left -z-10 object-cover' />
  }
  else if(heroCount === 1){
    return <img src={image2} alt="image-2" className='w-full h-full fixed top-0 left-0 bottom-0 right-0 float-left -z-10 object-cover'  />
  }
  else if(heroCount === 2){
    return <img src={image3} alt="image-3" className='w-full h-full fixed top-0 left-0 bottom-0 right-0 float-left -z-10 object-cover' />

  }
}

export default Background
