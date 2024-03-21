import React from 'react'
import ProjectItem from './ProjectItem'
import nlbImg from '../assets/nlb.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga incidunt enim, accusantium ab asperiores velit, cumque autem doloremque facere earum unde modi laudantium! Incidunt ab aliquid vitae maxime quis eligendi?
      </p>
      <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-12'>
        <ProjectItem img={nlbImg} title='Never Left Behind'/>
        <ProjectItem img={nlbImg} title='Never Left Behind'/>
        <ProjectItem img={nlbImg} title='Never Left Behind'/>
        <ProjectItem img={nlbImg} title='Never Left Behind'/>
      </div>
    </div>
  )
}

export default Projects
