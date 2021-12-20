import React from 'react'
import Navbar from './Navbar';
import MiddleSection from './middleSection';
import heroStyles from './Hero.module.css'

const Hero = () => {
  return (
    <main className=''>
      <div className='p-8 sticky z-10 top-0 border-b-4 bg-body'>
          <Navbar />
      </div>
      <div className={heroStyles.new}>
        <MiddleSection />
      </div>
      
      
      
    </main>
    
  )
}

export default Hero
