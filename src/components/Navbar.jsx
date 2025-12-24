import React from 'react'
import { Link } from 'react-scroll'
import logo from '../assets/cme-logo.png'

const Navbar = () => {
  return (
    <header className=''>
      <nav className='flex justify-between items-center mx-10 my-3 text-white'>
        {/* Logo */}
      <Link>
        <img src={logo} alt="" className='size-20' />
      </Link>

      {/* Desktop Menu */}
      <ul className='hidden md:flex items-center text-lg font-bold gap-10'>
        {[
          {text: 'Home', link: '/home'},
          {text: 'About', link: '/about'},
          {text: 'Our Cars', link: '/OurCars'},
          {text: 'Contact Us', link: '/contact'},
        ].map((menu, index) => (
            <li key={index} className='cursor-pointer hover:text-amber-200 transition-colors duration-75'>
              <Link >{menu.text}</Link>
            </li>
        ))}
      </ul>
      </nav>
    </header>
  )
}

export default Navbar
