import React from 'react'
import AboutMeText from './AboutMeText'
import AboutMePic from './AboutMePic'

const AboutMeMain = () => {
  return (
    <div id='aboutme' className='flex flex-col'>
      <div className='flex md:flex-row sm:flex-col px-4 max-w-[1200px] mx-auto mt-[50px] justify-between items-center'>
        <div>
            <AboutMeText />
        </div>
        <div>
            <AboutMePic />
        </div>
      </div>
    </div>
  )
}

export default AboutMeMain
