import React from 'react'
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <header className='flex justify-between text-white'>
      <div>
        <h1 className='font-Poppins text-xl'>Shinji Yamashita</h1>
      </div>
        <ul className='flex'>
          <li><Link activeClass='active' to='home' spy={true} smooth={true}>Home</Link></li>
          <li><Link activeClass='active' to='about' spy={true} smooth={true}>My Projects</Link></li>
          <li><Link activeClass='active' to='contact' spy={true} smooth={true}>Contact</Link></li>
      </ul>
    </header>
  )
}

export default Navbar
