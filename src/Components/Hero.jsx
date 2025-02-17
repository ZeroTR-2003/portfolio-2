import React from 'react'
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { professions } from "../Constants";
import portfolio from "../assets/IMG.png"
import {HERO_CONTENT} from "../Constants"


const Hero = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
      // Change profession every 5 seconds
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % professions.length);
      }, 5000); // Change every 5 seconds
  
      return () => clearInterval(interval); // Clean up interval on component unmount
    }, []); // Empty dependency array ensures this runs only once when the component mounts
  
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35 mt-10'>
       <div className='flex flex-wrap'>
       <div className='w-full lg:w-1/2 flex justify-center items-center'>
  <div className='flex flex-col items-center lg:items-start text-center lg:text-left'>
    <motion.h1 
    initial={{x:-100,opacity:0}}
    animate={{x:0,opacity:1}}
    transition={{duration:0.5,opacity:2}}
    className='pb-16 text-6xl tracking-tight font-normal lg:mt-16 lg:text-6xl'>Somseb Thurston
    </motion.h1>
    
    <motion.span 
    initial={{x:-100,opacity:0}}
    animate={{x:0,opacity:1}}
    transition={{duration:0.5,opacity:1}}
    className='bg-gradient-to-r text-4xl text-blue-400'>
      {professions[index]}
    </motion.span>

    <motion.p 
    initial={{x:-100,opacity:0}}
    animate={{x:0,opacity:1}}
    transition={{duration:0.5,opacity:2}}
    className='my-2 ml-5 max-w-xl py-6 font-light tracking-tighter text-2xl'>
      {HERO_CONTENT}
    </motion.p>
  </div>
</div>

        <div className='w-full lg:w-1/2 lg:p-8'>
           <div className='flex justify-center'>
             <motion.img
              initial={{x:-100,opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:0.5,delay:1.2}}
             className='w-64 h-auto' src={portfolio} alt="Thurston Junoir " />
           </div>
          </div>
       
       </div>
    </div>
  )
}

export default Hero
