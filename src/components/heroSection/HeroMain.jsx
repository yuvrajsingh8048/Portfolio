import React from 'react'
import HeroText from './HeroText'
import HeroPic from './HeroPic'
import HeroGradient from './HeroGradient'
import SubHeroSection from './SubHeroSection'

const HeroMain = () => {
  return (
    <main id='hero' className='pt-40 pb-20'>
        <div className='flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between relative pl-4'>
            <HeroText />
            <HeroPic />
            <HeroGradient />
        </div>
           <div>
             <SubHeroSection />
           </div>
    </main>
  )
}

export default HeroMain
