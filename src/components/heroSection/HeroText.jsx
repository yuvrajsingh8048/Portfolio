import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from "../../framerMotion/variants"


const HeroText = () => {
  return (
    <div className='flex flex-col justify-center items-center mx-auto'>

      <motion.h2
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0}}
      className='text-cyan lg:text-2xl sm:text-xl'>MERN Stack Web Devloper
      </motion.h2>

      <motion.h1
      variants={fadeIn("right", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0}}
      className='text-orange lg:text-6xl sm:text-4xl uppercase font-special my-5 font-bold'>Yuvraj Singh

      </motion.h1>

      <motion.p 
      variants={fadeIn("up", 0.6)}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0}}
      className='lg:text-lg sm:text-sm text-white mb-2' >I'm a MERN stack web developer passionate about building <br/> fast, responsive, and user-friendly web applications
      </motion.p>

      <motion.h2 
      variants={fadeIn("left", 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0}}
      className='lg:text-xl sm:text-lg text-lightOrange font-semibold'>"Dream. Devlop. Deploy"</motion.h2>
    </div>
  )
}

export default HeroText
