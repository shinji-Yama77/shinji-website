import React from 'react'
import middleStyles from './Middle.module.css'
import figImage from '../imgs/fig.png'

const middleSection = (props) => {
  return (
    <main className='text-black container max-w-6xl'>
      <div id='home' className={`${middleStyles.title}`}>
        <h1 className={`text-2xl ${middleStyles.typewriter}`}>
          Hello, my name is Shinji.
        </h1>
        <div className="flex justify-center align-center font-light text-center lg:text-lg text-sm">
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
        <form action="">
          <div className='flex flex-wrap mx-3 mb-6'>
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              First Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
              <p class="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Last Name
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
            </div>
          </div>

          
          
        </form>
      </div>
      
    </main>
  )
}

export default middleSection
