import React from 'react'

const HeroGradient = () => {
  return (
    <div>
      <div className=' shadow-cyanMediumShadow absolute top-0 left-[0px] animate-pulse'></div>
      <div className=' shadow-orangeMediumShadow absolute top-0 right-[50px] animate-pulse'></div>
      <div className='lg:block sm:hidden shadow-orangeMediumShadow absolute top-[400px] left-[0px] animate-pulse'></div>
      <div className='lg:block sm:hidden shadow-cyanMediumShadow absolute top-[400px] rights-[50px] animate-pulse'></div>
    </div>
  )
}

export default HeroGradient
