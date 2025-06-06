import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const About = () => (
  <section id='about' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
    <h1 className='text-4xl font-bold text-center text-[#001b5e] dark:text-blue-300'>About Me</h1>
    <p className='py-8 text-gray-100 font-semibold'>
      I am a software engineer with a background in the U.S. Air Force. My passion lies in creating efficient and user friendly applications.
      I enjoy learning new technologies and constantly improving my skill set.
    </p>
    <div className='flex justify-center gap-4'>
      <a href='https://github.com/mazenbalasta' target='_blank' rel='noopener noreferrer'>
        <FaGithubSquare className='text-3xl hover:text-[#001b5e]' />
      </a>
      <a href='https://www.linkedin.com/in/mazen-balasta/' target='_blank' rel='noopener noreferrer'>
        <FaLinkedin className='text-3xl hover:text-[#001b5e]' />
      </a>
    </div>
  </section>
);

export default About;
