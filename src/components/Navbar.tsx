import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <header className='nav'>
      <div className='logo'>
        <h2>Sultana</h2>
      </div>
      <div className='navigate'>
        <ul>
            <li><Link href="/" className='link'>Home</Link></li>
            <li><Link href="/about" className='link'>About</Link></li>
            <li><Link href="/projects" className='link'>Projects</Link></li>
            <li><Link href="contact" className='link'>Contact</Link></li>
        </ul>
      </div>
      <div className='btn'>
        <button className='bt'>Download CV</button>
      </div>
    </header>
  )
}

export default Navbar
