import React from 'react'
import AllSkills from './AllSkills'
import SkiilsText from './SkiilsText'
import AllSkiilsSM from './AllSkillsSM'
import SubSkills from './SubSkills'

const SkillsMain = () => {
  return (
     <div id='skills' className='flex flex-col'>
      <div className='px-4 max-w-[1200px] mx-auto mt-[50px] justify-between items-center'>

        <div>
        <SkiilsText />
      </div>

      <div className='sm:hidden md:block'>
        <AllSkills />
      </div>

      <div className='sm:block md:hidden'>
        <AllSkiilsSM />
      </div>
      </div>
      
    <div>
      <SubSkills />
    </div>
    </div>
  )
}

export default SkillsMain
