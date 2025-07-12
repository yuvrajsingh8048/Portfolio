import React from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'

const ProjectMain = () => {
  return (
    <div id='projects' className='flex max-w-[1200px] mx-auto flex-col justify-center items-center sm:mt-[50px] md:mt-[180px]'>
      <ProjectText />
      <SingleProject />

      <div className='w-full h-1 bg-grey'>

      </div>
    </div>
  )
}

export default ProjectMain
