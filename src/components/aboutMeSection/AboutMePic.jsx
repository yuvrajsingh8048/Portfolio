import React from 'react'
import {motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'

const AboutMePic = () => {
  return (
    <motion.div
     variants={fadeIn("right", 0.6)}
     initial="hidden"
     whileInView="show"
     viewport={{once: false, amount: 0}}
     className='relative flex justify-center items-center sm:h-[350px] sm:w-[300px] md:h-[500px] md:w-[400px] sm:mt-5 mx-auto'>
      {/* Orange background shape */}
      <div className='h-full w-full bg-orange rounded-tr-[120px] rounded-br-[120px] rounded-bl-[120px] absolute top-0 left-0 -z-10'>

      </div>

      {/* Foreground Image */}
      <img
        src="/pictures/about-me.jpg"
        alt="About Me"
        className='h-full w-auto rounded-tl-[100px] rounded-bl-[100px] rounded-br-[100px]'
      />
    </motion.div>
  )
}

export default AboutMePic
