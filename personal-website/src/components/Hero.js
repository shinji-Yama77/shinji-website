import React from 'react'
import Navbar from './Navbar';
import MiddleSection from './middleSection';

const Hero = () => {
  return (
    <main className='bg-body'>
      <div className='p-10'>
        <Navbar />
      </div>
      <MiddleSection />
      
      
    </main>
    
  )
}

export default Hero
