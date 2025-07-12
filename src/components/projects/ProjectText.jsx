import React from 'react'
import {motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'


const ProjectText = () => {
  return (
    <div>
      <motion.h2 
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0}}
      className='text-4xl text-cyan font-bold'>Projects
      </motion.h2>

      <motion.p 
      variants={fadeIn("down", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0}}
      className='text-lg text-white mt-4'>This project reflects my growing expertise in web development. Through it, I explored how different technologies work together, improved my problem-solving skills, and gained hands-on experience in building a fully functional application from scratch.
      </motion.p>
    </div>
  )
}

export default ProjectText
