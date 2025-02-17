import React from 'react'
import { motion } from "framer-motion";
import react from "../assets/react-48.png"
import c from "../assets/c-48.png"
import flutter from "../assets/flutter-48.png"
import git from "../assets/git-48.png"
import java from "../assets/java-48.png"
import js from "../assets/js-48.png"
import node from "../assets/nodejs-48.png"
import sql from "../assets/sql-50.png"
import css from "../assets/tailwind-css-48.png"
import ts from "../assets/typescript-48.png"
import shark from "../assets/wireshark-64.png"


const iconvariants=(duration)=>(
  {
    initial:{y:-10},
    animate:{
      y:[10,-10],
      transition:{
        duration:duration,
        ease:"linear",
        repeat:Infinity,
        repeatType:"reverse"
      }
    }
  }
)
const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 
         whileInView={{opacity:1,y:0}} 
         initial={{opacity:0,y:-100}}
         transition={{duration:1.5}}
        className='my-20 text-center text-5xl text-blue-300'>Technologies</motion.h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
             variants={iconvariants(2.5)}
             whileInView={{opacity:1,x:0}} 
             initial="initial"
             animate="animate"
             className="rounded-2xl  border-nea p-4">
              <img className='text-7xl text-cyan-400' src={java} alt="Java language" />
            </motion.div>
            <motion.div 
             variants={iconvariants(2.7)}
             whileInView={{opacity:1,x:0}} 
             initial="initial"
             animate="animate"
            className="rounded-2xl  border-nea p-4">
              <img className='text-7xl text-cyan-400' src={c} alt="c# language" />
            </motion.div>
            <motion.div 
            variants={iconvariants(2.9)}
            whileInView={{opacity:1,x:0}} 
            initial="initial"
            animate="animate"
            className="rounded-2xl  border-nea p-4">
              <img className='text-7xl text-cyan-400' src={js} alt="Js language" />
            </motion.div>
            <motion.div 
            variants={iconvariants(3.1)}
            whileInView={{opacity:1,x:0}} 
            initial="initial"
            animate="animate"
            className="rounded-2xl  border-nea p-4">
               <img className='text-7xl text-cyan-400' src={sql} alt="sql" />
            </motion.div>
            <motion.div 
            variants={iconvariants(3.3)}
            whileInView={{opacity:1,x:0}} 
            initial="initial"
            animate="animate"
            className="rounded-2xl  border-nea p-4">
               <img className='text-7xl text-cyan-400' src={flutter} alt="Flutter Framework" />
            </motion.div>
            <motion.div 
            variants={iconvariants(3.5)}
            whileInView={{opacity:1,x:0}} 
            initial="initial"
            animate="animate"
            className="rounded-2xl  border-nea p-4">
              <img className='text-7xl text-cyan-400' src={react} alt="React Framework" />
            </motion.div>
            <motion.div 
            variants={iconvariants(3.7)}
            whileInView={{opacity:1,x:0}} 
            initial="initial"
            animate="animate"
            className="rounded-2xl  border-nea p-4">
              <img className='text-7xl text-cyan-400' src={node} alt="node Framework" />
            </motion.div>
            <motion.div 
            variants={iconvariants(3.9)}
            whileInView={{opacity:1,x:0}} 
            initial="initial"
            animate="animate"
            className="rounded-2xl  border-nea p-4">
              <img 
              variants={iconvariants(4.1)}
              whileInView={{opacity:1,x:0}} 
              initial="initial"
              animate="animate"
              className='text-7xl text-cyan-400' src={css} alt="css Framework" />
            </motion.div>
            <motion.div 
            variants={iconvariants(4.3)}
            whileInView={{opacity:1,x:0}} 
            initial="initial"
            animate="animate"
            className="rounded-2xl  border-nea p-4">
              <img className='text-7xl text-cyan-400' src={ts} alt="React Framework" />
            </motion.div>
            <motion.div 
            variants={iconvariants(4.5)}
            whileInView={{opacity:1,x:0}} 
            initial="initial"
            animate="animate"
            className="rounded-2xl  border-nea p-4">
              <img className='text-7xl text-cyan-400' src={git} alt="Git Framework" />
            </motion.div>
            <motion.div 
            variants={iconvariants(4.7)}
            whileInView={{opacity:1,x:0}} 
            initial="initial"
            animate="animate"
            className="rounded-2xl  border-nea p-4">
            <img className='text-7xl text-cyan-400' src={shark} alt=" Wireshark " />
            </motion.div>
        </div>
    </div>
  )
}

export default Technologies
