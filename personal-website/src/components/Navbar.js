import React from 'react'
import {Link} from 'react-scroll';
import navbarStyles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <header className='container max-w-6xl flex justify-between text-white '>
      <div>
        <h1 className={`text-2xl font-semibold ${navbarStyles.ex}`}>Shinji Yamashita</h1>
      </div>
        <ul className='flex text-xl'>
          <li className={`lg:px-10 px-2 relative ${navbarStyles.btn}`}>
            <Link activeClass='active' to='home' spy={true} smooth={true}>Home</Link>
          </li>
          <li className={`lg:px-10 px-2 relative ${navbarStyles.btn}`}>
            <Link activeClass='active' to='about' spy={true} smooth={true}>
              My Projects
              </Link>
          </li>
          <li className={`lg:px-10 px-2 relative ${navbarStyles.btn}`}><Link activeClass='active' to='contact' spy={true} smooth={true}>Contact</Link></li>
      </ul>
    </header>
  )
}

export default Navbar
