import React from 'react'
import arrowButton from '../assets/arrow_btn.png'
import playIcon from '../assets/play_icon.png'
import pauseIcon from '../assets/pause_icon.png'

const Hero = ({heroData, heroCount, setHeroCount, playStatus, setPlayStatus}) => {
  return (
    <section>
      <div className='text-white text-4xl'>
        <p className=''>
          {heroData.text1}
        </p>
        <p>
          {heroData.text2}
        </p>
      </div>
      <div>
        <p>
          Explore or showroom
        </p>
        <img src={arrowButton} alt='button'/>
      </div>
      <div>
        <ul></ul>
        </div>
    </section>
  )
}

export default Hero
