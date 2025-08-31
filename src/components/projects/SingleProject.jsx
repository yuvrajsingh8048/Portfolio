import React from 'react'
import { FaGithub } from "react-icons/fa";
import { fadeIn } from '../../framerMotion/variants'
import {motion} from 'framer-motion'


const projects = [
  {
    name: "Frontend",
    image: "/pictures/projects/frontend.png",
    repoLink: "https://github.com/yuvrajsingh8048/SRV_FrontendTask"
  },
  {
    name: "Todo",
    image: "/pictures/projects/Todo.png",
    repoLink: "https://github.com/yuvrajsingh8048/React/tree/main/09_TodoList"
  },
  {
    name: "Theme Switcher",
    image: "/pictures/projects/ThemeSwitcher.png",
    repoLink: "https://github.com/yuvrajsingh8048/React/tree/main/08_ThemeSwitcher"
  },
  {
    name: "Currency Converter",
    image: "/pictures/projects/CurrencyConverter.png",
    repoLink: "https://github.com/yuvrajsingh8048/React/tree/main/05_CurrencyConverter"
  }
]

const SingleProject = () => {
  return (
    <motion.div 
    variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0}}
    className='w-full flex flex-wrap justify-center gap-10 py-10 '>
      {projects.map((element, index) => (
        <div
          key={index}
          className='flex flex-col items-center text-center shadow-xl rounded-xl overflow-hidden max-w-[400px] bg-lightGrey'
        >
          <h2 className='text-orange text-2xl font-bold mt-5 mb-3'>{element.name}</h2>
          <img src={element.image} alt={element.name} className='h-[200px] w-full' />
          <a
            href={element.repoLink}
            target='_blank'
            className='w-full py-2 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan to-orange hover:bg-gradient-to-r hover:from-orange hover:to-cyan font-bold text-white'
          >
            View Code <FaGithub className='text-xl'/>
          </a>
        </div>
      ))}
    </motion.div>
  )
}

export default SingleProject
