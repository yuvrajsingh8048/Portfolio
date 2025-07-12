import React from 'react'
import { AiTwotoneMail } from "react-icons/ai";
import { MdCall } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io";
const ContactSocial = () => {
  return (
    <div className='flex text-white flex-col mt-[50px]'>
      {/* Yours Info */}
      <div className='text-lg font-semibold'>
        <div  className='flex'>
        <AiTwotoneMail className='text-2xl mr-4'/> yuvrajsingh001750@gmail.com
      </div>

      <div className='flex my-2'>
        <MdCall className='text-2xl mr-4'/> +91 6290668486
      </div>

      <div className='flex'>
        <IoLocationOutline className='text-2xl mr-4'/> Garden Reach, Kolkata, West Bengal
      </div>
      </div>

      {/* Social Media Handle */}
      <div className='flex justify-center gap-4 text-2xl font-bold mt-[20px]'>
        <a href="https://www.instgram.com/yuvraj_singh_8048" className='h-fit w-fit p-2 rounded-full border-[1px] border-orange '><FaInstagram /></a>
        <a href="https://www.github.com/yuvrajsingh8048" className='h-fit w-fit p-2 rounded-full border-[1px] border-orange '><IoLogoGithub /></a>
        <a href="https://www.linkedin.com/in/yuvraj-singh-34823929a" className='h-fit w-fit p-2 rounded-full border-[1px] border-orange '><IoLogoLinkedin /></a>
      </div>
    </div>
  )
}

export default ContactSocial
