import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='img-div'>
        <Image src="/Profile 02.jpg" alt="img" width={200} height={200} className='img'/>
      </div>
      <div className='info-div'>
        <h1 className='name'>Hello <br />I Am <br />Shazia Sultana</h1>
        <div className='btn2'></div>
        <button className='bt1'><Link href="/" className='bt-li'>About Me</Link></button>
        <button className='bt1'><Link href="/contact" className='bt-li'>Contact Me </Link></button>
      </div>
    </div>
  )
}

export default Hero
