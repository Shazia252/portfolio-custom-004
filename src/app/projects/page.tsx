import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Project = () => {
  return (
    <div>
        <h1 className='heading'>My Projects</h1>
        <div className='project'>
            <h2 className='pro-h2'> There are my some Projects</h2>
            <p className='pro-p'>As a passionate Junior Frontend Developer, I specialize in building responsive, user-friendly, and visually appealing websites and web applications. I love transforming creative ideas into functional designs using modern technologies like HTML, CSS, JavaScript, and frameworks such as React and Next.js. With a keen eye for detail and a focus on clean code, my goal is to enhance user experiences and bring engaging digital products to life.</p>
        </div>
        <div className='main'>
            <div className='card'>
            <Image src="/Project 1.jpg" alt="" width={200} height={200} className="img2" />
            <h3 className='card-h'>Static Interactive Resume</h3>
            <p className='card-p'>A TypeScript-based Interactive resume built with HTML and CSS, allowing user to showcase their skills dynamicslly</p>
            <div className='tag-btn'>
                <button className='tag'>React</button>
                <button className='tag1'>Node.Js</button>
                <button className='tag2'>HTML</button>
            </div>
            </div>
            <div className='card'>
            <Image src="/Project 2.jpeg" alt="" width={200} height={200} className="img2" />
            <h3 className='card-h'>Dynamic Resume</h3>
            <p className='card-p'>A TypeScript-based Interactive resume built with HTML and CSS, allowing user to showcase their skills dynamicslly</p>
            <div className='tag-btn'>
                <button className='tag'>React</button>
                <button className='tag1'>Node.Js</button>
                <button className='tag2'>HTML</button>
            </div>
            </div>
            <div className='card'>
            <Image src="/Project 3.jpeg" alt="" width={200} height={200} className="img2" />
            <h3 className='card-h'>Project # 3</h3>
            <p className='card-p'>A TypeScript-based Interactive resume built with HTML and CSS, allowing user to showcase their skills dynamicslly</p>
            <div className='tag-btn'>
                <button className='tag'>React</button>
                <button className='tag1'>Node.Js</button>
                <button className='tag2'>HTML</button>
            </div>
            </div>
            <div className='card'>
            <Image src="/Project 4.jpeg" alt="" width={200} height={200} className="img2" />
            <h3 className='card-h'>Project # 4</h3>
            <p className='card-p'>A TypeScript-based Interactive resume built with HTML and CSS, allowing user to showcase their skills dynamicslly</p>
            <div className='tag-btn'>
                <button className='tag'>React</button>
                <button className='tag1'>Node.Js</button>
                <button className='tag2'>HTML</button>
            </div>
            </div>
            <div className='card'>
            <Image src="/Project 5.jpeg" alt="" width={200} height={200} className="img2" />
            <h3 className='card-h'>Project # 5</h3>
            <p className='card-p'>A TypeScript-based Interactive resume built with HTML and CSS, allowing user to showcase their skills dynamicslly</p>
            <div className='tag-btn'>
                <button className='tag'>React</button>
                <button className='tag1'>Node.Js</button>
                <button className='tag2'>HTML</button>
            </div>
            </div>
            <div className='card'>
            <Image src="/Project 6.jpeg" alt="" width={200} height={200} className="img2" />
            <h3 className='card-h'>Project # 6</h3>
            <p className='card-p'>A TypeScript-based Interactive resume built with HTML and CSS, allowing user to showcase their skills dynamicslly</p>
            <div className='tag-btn'>
                <button className='tag'>React</button>
                <button className='tag1'>Node.Js</button>
                <button className='tag2'>HTML</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Project
