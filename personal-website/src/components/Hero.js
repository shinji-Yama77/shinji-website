import React from 'react'
import Navbar from './Navbar';
import MiddleSection from './middleSection';
import heroStyles from './Hero.module.css'

const Hero = () => {
  const handleClick = (e) => {
    e.preventDefault()
    const target = document.getElementById('s').offsetHeight
    console.log(target)
  }


  return (
    <main className=''>
      <div id='s' className='p-8 sticky z-10 top-0 border-4 border-b-indigo-500 bg-body' onClick={handleClick}>
          <Navbar />
      </div>
      <div className={heroStyles.new}>
        <MiddleSection />
      </div>
      
      
      
    </main>
    
  )
}

export default Hero
