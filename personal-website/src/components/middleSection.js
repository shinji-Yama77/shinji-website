import React from 'react'
import middleStyles from './Middle.module.css'

const middleSection = (props) => {
  return (
    <main className='text-black container max-w-6xl'>
      <div id='home' className={`${middleStyles.title}`}>
        <h1 className={`${middleStyles.typewriter}`}>
          Hello, my name is Shinji.
        </h1>
        <div className="flex justify-center align-center font-light text-lg">
          <p className={middleStyles.subtitle}>I am currently a second year student at University of Washington - Seattle. I am majoring in Informatics</p>
        </div>

      </div>
      
      <div id='about' style={{ height: 1000}}>
        <h1>My Projects</h1>
        
      </div>
      <div id='contact' style={{ height: 1100}} >
        <h1>This is Contact Section</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
      </div>
      
    </main>
  )
}

export default middleSection
