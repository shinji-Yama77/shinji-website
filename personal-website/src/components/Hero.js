import React from 'react'
import Navbar from './Navbar';
import MiddleSection from './middleSection';

const Hero = () => {
  return (
    <main className=''>
      <div className='p-8 sticky top-0 border-b-4 bg-body'>
          <Navbar />
      </div>
      <div className='bg-white'>
        <MiddleSection />
      </div>
      
      
      
    </main>
    
  )
}

export default Hero
