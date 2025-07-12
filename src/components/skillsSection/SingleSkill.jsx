import React from 'react'

const SingleSkill = ({imgSvg, text}) => {
  return (
    <div className='hover:-translate-y-10 transition-all duration-500 relative'>
      <div className='flex flex-col items-center gap-2'>
        <div className='bg-white text-cyan h-[100px] w-[100px] rounded-full flex items-center justify-center hover:text-darkGrey hover:scale-105 transform transition-all duration-500 text-4xl border-4 border-orange'>{imgSvg}</div>
        <p className='text-white font-bold'>{text}</p>
      </div>

      <div className='absolute h-[200px] w-[100px] bg-orange top-[50px] text-white -z-10'></div>
    </div>
  )
}

export default SingleSkill
