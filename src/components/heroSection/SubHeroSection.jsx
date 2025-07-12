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
    className='bg-lightBrown flex my-10 justify-around px-4 border-y border-lightGrey uppercase xl:text-4xl md:text-2xl sm:text-4xl items-center p-3'> 
      <p className='md:block sm:hidden'> Fast Learner</p>
      <p className='md:block sm:hidden'>Team Work</p>
      <p>Problem Solving</p>
    </motion.div>
  )
}

export default SubHeroSection
