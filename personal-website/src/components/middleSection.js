import React from 'react'
import styles from "./Middle.module.css"

const middleSection = (props) => {
  return (
    <main className='text-white font-Poppins'>
      <div id='home' className='h-96'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
      </div>
      <div id='about' style={{ height: 500}}>
        <h1>My Projects</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
      </div>
      <div id='contact' style={{ height: 1100}} >
        <h1>This is Contact Section</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
      </div>
      
    </main>
  )
}

export default middleSection
