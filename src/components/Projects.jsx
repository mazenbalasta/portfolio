import React, { useState } from 'react';
import ProjectItem from './ProjectItem';
import { NlbModal, ZcdModal, PortfolioModal } from './ProjectModals';
import nlbImg from '../assets/nlb.png';
import zcdImg from '../assets/zcd.png';
import portfolioImg from '../assets/portfolio.png';

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Recent Projects</h1>
      <p className='text-center py-8 text-gray-100 font-semibold'>
      Celebrate my latest completed projects showcasing expertise in software engineering, illustrating proficiency in managing, designing, and implementing innovative solutions for diverse technical challenges.
      </p>
      <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-12'>
        <ProjectItem img={nlbImg} title='Never Left Behind' project='Vite + React' onClick={() => openModal('Nlb')} />
        <ProjectItem img={zcdImg} title="Zen's Car Dealership" project='React Js' onClick={() => openModal('Zcd')} />
        <ProjectItem img={portfolioImg} title='Portfolio' project='Vite + React' onClick={() => openModal('Portfolio')} />
      </div>

      {showModal && selectedProject === 'Nlb' && <NlbModal closeModal={closeModal} />}
      {showModal && selectedProject === 'Zcd' && <ZcdModal closeModal={closeModal} />}
      {showModal && selectedProject === 'Portfolio' && <PortfolioModal closeModal={closeModal} />}

    </div>
  );
};

export default Projects;
