import React from 'react'
import {motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'

const SubHeroSection = () => {
  return (
    <motion.div 
    variants={fadeIn("left", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0}}
    className='bg-lightBrown flex my-10 justify-around px-4 border-y border-lightGrey uppercase xl:text-4xl lg:text-2xl md:text-lg sm:text-sm sm:font-semibold items-center p-3'> 
      <p>Fast Learner</p>
      <p>Team Work</p>
      <p>Problem Solving</p>
    </motion.div>
  )
}

export default SubHeroSection
