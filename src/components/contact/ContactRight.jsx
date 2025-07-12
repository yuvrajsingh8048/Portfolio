import React from 'react'
import ContactSocial from './ContactSocial'
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants';


const ContactRight = () => {
  return (
     <motion.div
        variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{once: false, amount: 0}}
        className='flex flex-col justify-center items-center'>
      <img src="/pictures/email-image.png" alt="Contact Me" className='max-h-[300px]'/>
      
      <ContactSocial />
    </motion.div>
  )
}

export default ContactRight
