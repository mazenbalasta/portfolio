import React, { useState } from 'react';
import ProjectItem from './ProjectItem';
import { NlbModal, ZcdModal, PortfolioModal } from './ProjectModals';
import nlbImg from '../assets/nlb.png';
import zcdImg from '../assets/zcd.png';
import portfolioImg from '../assets/portfolio.png';

const projectData = [
  { img: nlbImg, title: 'Never Left Behind', tech: 'Vite + React', category: 'web', modal: 'Nlb' },
  { img: zcdImg, title: "Zen's Car Dealership", tech: 'React Js', category: 'web', modal: 'Zcd' },
  { img: portfolioImg, title: 'Portfolio', tech: 'Vite + React', category: 'web', modal: 'Portfolio' },
];

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const filteredProjects =
    filter === 'all'
      ? projectData
      : projectData.filter((p) => p.category === filter);

  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e] dark:text-blue-300'>Recent Projects</h1>
      <p className='text-center py-8 text-gray-100 font-semibold'>
      Celebrate my latest completed projects showcasing expertise in software engineering, illustrating proficiency in managing, designing, and implementing innovative solutions for diverse technical challenges.
      </p>
      <div className='flex justify-center gap-4 pb-8'>
        <button
          className={`px-3 py-1 rounded-full border ${filter === 'all' ? 'bg-[#001b5e] text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`px-3 py-1 rounded-full border ${filter === 'web' ? 'bg-[#001b5e] text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
          onClick={() => setFilter('web')}
        >
          Web
        </button>
      </div>
      <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-12'>
        {filteredProjects.map((p) => (
          <ProjectItem key={p.title} img={p.img} title={p.title} project={p.tech} onClick={() => openModal(p.modal)} />
        ))}
      </div>

      {showModal && selectedProject === 'Nlb' && <NlbModal closeModal={closeModal} />}
      {showModal && selectedProject === 'Zcd' && <ZcdModal closeModal={closeModal} />}
      {showModal && selectedProject === 'Portfolio' && <PortfolioModal closeModal={closeModal} />}

    </div>
  );
};

export default Projects;
