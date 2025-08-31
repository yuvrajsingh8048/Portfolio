import React from 'react'
import { FaRegCircle } from "react-icons/fa";
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants';

const HeroPic = () => {
  return (
    <motion.div
    variants={fadeIn("left", 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{once: false, amount: 0}}
    className='h-full flex items-center justify-center sm:my-20 lg:my-0'>
      <img src="/pictures/profile.png" alt="Yuvraj Singh"  className='max-h-[450px] w-fit rounded-full'/>
      {/* <div className='absolute -z-10 flex justify-center items-center animate-pulse'>
        <FaRegCircle className='md:h-[90%] sm:h-[120%] min-h-[530px] w-[420px] text-cyan blur-md animate-[spin_20s_linear, infinite]'/>
      </div> */}
    </motion.div>
  )
}

export default HeroPic
