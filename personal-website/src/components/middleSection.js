import React from 'react'
import middleStyles from './Middle.module.css'
import figImage from '../imgs/fig.png'

const middleSection = (props) => {
  return (
    <main className='text-black container max-w-6xl'>
      <div id='home' className={`${middleStyles.title}`}>
        <h1 className={`${middleStyles.typewriter}`}>
          Hello, my name is Shinji.
        </h1>
        <div className="flex justify-center align-center font-light text-lg">
          <p className={middleStyles.subtitle}>I am currently a second year student at University of Washington - Seattle. I am majoring in Informatics</p>
          <button></button>
        </div>

      </div>
      
      <div id='about' style={{ height: 1000}}>
        <h1 className={`text-3xl pb-10 font-semibold ${middleStyles.project}`}>Some Featured Projects.</h1>
        <div className=''>
          <a href="https://www.figma.com/proto/0JAFJmLiLq2kRXzSQ6rBQv/INFO-200?node-id=44%3A9&scaling=scale-down&page-id=0%3A1&starting-point-node-id=19%3A0" target="_blank"><img className={middleStyles.fig} src={figImage} alt="" /></a>
        </div>

      </div>
      <div id='contact' style={{ height: 1100}} >
        <h1>This is Contact Section</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
      </div>
      
    </main>
  )
}

export default middleSection
