import React from 'react'
import {motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'

const AboutMeText = () => {
  return (
    <div className='md:items-start sm:items-center'>
        <motion.h1 
        variants={fadeIn("uo", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0}}
        className='lg:text-4xl sm:text-2xl text-cyan font-semibold mb-10 '>About Me</motion.h1>

      <motion.p 
      variants={fadeIn("right", 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0}}
      className='text-white w-auto md:text-lg sm:text-sm'>Hi, I'm Yuvraj Singh — a passionate MERN Stack web developer with a strong foundation in building scalable, user-centric web applications From responsive frontend interfaces using React to robust backend with Node.js and Express, I love bringing digital ideas to life.
      With hands-on experience in modern tools and technologies, I strive <br/> to write clean, maintainable code and continuously improve my craft.
      </motion.p>
    <motion.p 
      variants={fadeIn("down", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0}}
    className='mt-2 text-lightOrange'>Click below button to download my resume
    </motion.p>
    
     <a href="../../public/resume/Resume.pdf" download="Resume.pdf" target='_blank' rel={"noopener noreferrer"} className='flex sm:mx-auto px-4 py-2 bg-gradient-to-r from-orange to-cyan hover:from-cyan hover:to-orange text-white rounded-full font-bold h-fit sm:mt-10 md:mt-2 w-fit'> My Resume
        </a>

    </div>
  )
}

export default AboutMeText
