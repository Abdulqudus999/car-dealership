import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Background from './components/Background'
import Hero from './components/Hero'

const App = () => {

  const heroData = [
    {
      text1: 'CME AUTOS',
      text2: 'The best all over the world'
    },
    {
      text1: 'CME AUTOS',
      text2: 'The best all over the world'
    },
    {
      text1: 'CME AUTOS',
      text2: 'The best all over the world'
    }
  ]

  const [heroCount, setHeroCount] = useState(1)
  const [playStatus, setPlayStatus] = useState(false)
  return (
    <>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar />
      <Hero  setHeroCount={setHeroCount}
      heroCount={heroCount}
      heroData={heroData[heroCount]}
      playStatus={playStatus}
      setPlayStatus={setPlayStatus}
      />
    </>
  )
}

export default App
