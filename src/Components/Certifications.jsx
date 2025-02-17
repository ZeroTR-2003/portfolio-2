import React from 'react'
import { motion } from "framer-motion";
import cert from "../assets/award.png"
import {CERTIFICATIONS} from "../Constants"

const Certifications = () => {
  return (
    <div  className='border-b border-neutral-800 pb-4'>
       <motion.h1 
       whileInView={{opacity:1,y:0}} 
       initial={{opacity:0,y:-100}}
       transition={{duration:1.5}}
       className='my-20 text-center text-5xl text-blue-300'>Certifications and extracurricular</motion.h1>
       <div className='flex flex-col gap-6 '>
         {
            CERTIFICATIONS.map((certificate,index)=>(
                <div key={index} className="flex items-center gap-4 border border-neutral-700 p-4 rounded-lg bg-neutral-900">
                    <div className="w-20 h-20 flex-shrink-0 pt-5">
                      <img src={cert} alt={certificate.title}  />
                    </div>
                    <div>
          <h6 className="text-xl font-semibold text-white">{certificate.title}</h6>
          <p className="text-blue-400 text-sm">{certificate.issuer}</p>
        </div>
                    
                </div>
            )

            )
         }

       </div>
    </div>
  )
}

export default Certifications
