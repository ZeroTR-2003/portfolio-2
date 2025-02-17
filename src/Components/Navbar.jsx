import React from 'react'
import logo from "../assets/logo.png"
import linkedinlogo from "../assets/linkedin-0.png"
import youtube from "../assets/youtube-0.png"
import data from "../assets/data.png"
import githubologo from "../assets/github-0.png"

const Navbar = () => {
  return (
    <nav className='sticky mb-0 flex items-center justify-between py-4'>
      <div className='flex flex-shrink-0 items-center'>
        <img className='ml-7' src={logo} alt="Logo" srcset="" />
      </div>
      <div className=' flex items-center justify-center gap-4 text-4xl mr-4'>
        <a href="https://www.linkedin.com/in/thurstonsomseb"><img className='border-2 border-blue-300 rounded-full p-1' src={linkedinlogo} alt="Linkedin address" /></a>
        <a href="https://github.com/ZeroTR-2003"><img className='border-2 border-blue-300 rounded-full p-1'  src={githubologo} alt="Linkedin address" /></a>
        <a href="https://youtube.com/@juniorjtk6431?si=AflnZR9qKiPsweLy"><img className='border-2 border-blue-300 rounded-full p-1'  src={youtube} alt="Linkedin address" /></a>
      </div>
    </nav>
  )
}

export default Navbar
