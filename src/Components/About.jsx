import React from 'react'
import { motion } from "framer-motion"
import {ABOUT_TEXT} from "../Constants"
import about1 from "../assets/About-me.jpg"
import about2 from "../assets/About-me-1.jpg"
import about3 from "../assets/About-me-2.jpg"

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 
      whileInView={{opacity:1,y:0}} 
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className='my-20 text-center text-5xl text-blue-300'>About 
       <span className='text-blue-250'> me</span>
      </motion.h1>
      <div className='flex flex-wrap px-8'>
         <motion.div 
          whileInView={{opacity:1,x:0}} 
          initial={{opacity:0,x:-100}}
          transition={{duration:0.5}}
         className='w-full lg:w-1/2 lg:p-8 flex justify-center mb-9'>
           <img className='w-full max-w-sm h-auto rounded-[16px] ' src={about2} alt="About me" />
         </motion.div>
         <motion.div
          whileInView={{opacity:1,x:0}} 
          initial={{opacity:0,x:-100}}
          transition={{duration:0.4}}
         className='w-full lg:w-1/2 flex justify-center items-center'>
           <p className='max-w-xl text-center text-base lg:text-left  tracking-tighter whitespace-pre-line'>{ABOUT_TEXT}</p>
         </motion.div>
       </div>
   </div>
  )
}

export default About
