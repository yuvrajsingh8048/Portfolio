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

const AllSkiils = () => {
  return (
    <motion.div
        variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{once: false, amount: 0}}
    className='w-full'>
      <div className='flex justify-around  cursor-pointer'>
        {skills.map((element, index) => (
        <SingleSkill key={index} text={element.skill} imgSvg={<element.icon />} />
      ))}
      </div>
    </motion.div>
  )
}

export default AllSkiils
