import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { FaGitlab } from 'react-icons/fa6';
import QuoteWidget from './QuoteWidget';

const Main = () => {


  return (
    <div id='main'>
      <img
        className='w-full h-screen object-cover object-center'
        src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Background"
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-gradient-to-r from-black via-transparent to-black/70 dark:from-gray-900 dark:to-gray-900/70'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='text-white dark:text-blue-300 sm:text-5xl text-4xl font-bold'>I'm Mazen Balasta</h1>
          <h2 className='text-white dark:text-blue-200 flex sm:text-3xl text-2xl pt-4'>
            I'm a
            <TypeAnimation
              sequence={[
                'Software Engineer',
                1000,
                'Front-End Developer',
                1000,
                'Back-End Developer',
                1000,
                'US Air Force Veteran',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px' }}
              repeat={Infinity}
            />
          </h2>
          <div className='text-white dark:text-blue-300 flex justify-between pt-6 max-w-[200px] w-full'>
            <a href="https://github.com/mazenbalasta" target="_blank" rel="noopener noreferrer">
              <FaGithubSquare className='cursor-pointer' size={20} />
            </a>
            <a href="https://gitlab.com/mznbal17" target="_blank" rel="noopener noreferrer">
              <FaGitlab className='cursor-pointer' size={20} />
            </a>
            <a href="https://www.linkedin.com/in/mazen-balasta/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='cursor-pointer' size={20} />
            </a>
          </div>
          <QuoteWidget />
        </div>
        <a
          href='#work'
          className='absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce'
          aria-label='Scroll Down'
        >
          ↓
        </a>
      </div>
    </div>
  );
};

export default Main;
