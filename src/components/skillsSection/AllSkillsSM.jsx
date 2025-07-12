import React from 'react'
import SingleSkill from './SingleSkill';
import { BsCCircleFill } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants';



const skills = [
    {
        skill: "C / C++",
        icon: BsCCircleFill
    },
    {
        skill: "HTML 5",
        icon: FaHtml5
    },
    {
        skill: "CSS 3",
        icon: FaCss3Alt
    },
    {
        skill: "Javascript",
        icon: IoLogoJavascript
    },
    {
        skill: "Node Js",
        icon: FaNodeJs
    },
    {
        skill: "React",
        icon: FaReact
    },
    {
        skill: "Redux",
        icon: TbBrandRedux
    },
    {
        skill: "Tailwind CSS",
        icon: RiTailwindCssFill
    },
    {
        skill: "Mongodb",
        icon: DiMongodb
    },
    {
        skill: "SQL",
        icon: AiOutlineConsoleSql
    },
]

const AllSkiilsSM = () => {
  return (
    <div className='w-full'>
      <div className='grid sm:grid-cols-2 '>
        {skills.map((element, index) => (
            <motion.div id={index}
            variants={fadeIn("right", 0.5)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{once: false, amount: 0}}
            className='flex flex-col mx-auto'> 
                <div className='text-white w-fit mt-6 mx-auto hover:text-lightGrey hover:scale-105 text-6xl'><element.icon /></div>
                <p className='text-white font-bold'>{element.skill}</p>
            </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AllSkiilsSM
