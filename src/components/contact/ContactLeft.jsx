import React from 'react'
import ContactForm from './ContactForm'
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants';


const ContactLeft = () => {
  return (
    <motion.div id='contactLeft'
    variants={fadeIn("right", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0}}
    >
        <div>
            <h2 className='text-2xl text-orange font-semibold'>Get in Touch</h2>
            <p className='text-lg text-white'>Feel free to reach out if you'd like to collaborate <br/> you are just a few clicks away</p>
        </div>

        <ContactForm />
    </motion.div>
  )
}

export default ContactLeft
