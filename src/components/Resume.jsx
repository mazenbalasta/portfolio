import React from 'react';
import ResumePDF from '../assets/Resume - Mazen Balasta.pdf';
import { BsPerson } from 'react-icons/bs';
import resumeImg from '../assets/resume-image.png';

const Resume = () => {
  return (
    <div id='resume' className='flex flex-col justify-center items-center xsm:p-4 md:pl-20'>
      <div>
        <h1 className='text-4xl font-bold text-center text-[#001b5e] dark:text-blue-300'>Download My Resume</h1>
      </div>
      <div className='flex flex-col items-center text-center py-8'>
        <p className="mb-8 font-bold text-lg text-gray-100">Click the image below to download my resume:</p>
        <a className='flex flex-col items-center justify-center text-[#001b5e] font-semibold hover:underline' href={ResumePDF} download="Resume - Mazen Balasta.pdf">
          <div className="relative">
            <img src={resumeImg} alt="image of my resume" className='sm:w-[500px] lg:w-[800px]' />
            <span className="absolute top-0 left-0 w-full h-full bg-[#001b5e] opacity-0 hover:opacity-25"></span>
          </div>
          <div className="flex items-center">
            <BsPerson size={20} className='ml-1' />
            <span className='font-bold text-lg'>Download</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Resume;
