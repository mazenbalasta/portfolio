import React from 'react';

const NlbModal = ({ closeModal }) => {
  return (
    <div className='fixed inset-0 z-10 flex items-center justify-center bg-gray-900 bg-opacity-50'>
      <div className='flex flex-col items-center bg-gray-500 p-8 max-w-[600px]'>
        <h2 className='text-2xl font-bold text-[#001b5e] mb-4'>Never Left Behind</h2>
        <p className='text-gray-100 font-semibold pb-5'>Never Left Behind, a web app established in 2024, aims to enrich the lives of American veterans by fostering community connections through social and outdoor activities. Dedicated to integrating veterans into their local communities, the organization promotes engagement and well-being through various events.</p>
        <h2 className='text-gray-100 font-semibold'>Here are the technologies used by this web app:</h2>
        <div className='grid grid-cols-2'>
          <div className='mt-4 mr-10'>
            <h1 className='mb-2 text-[#001b5e] font-bold'>Backend:</h1>
            <ol className='text-gray-100'>
              <li>• Python</li>
              <li>• FastAPI</li>
              <li>• PostgreSQL</li>
              <li>• Docker</li>
              <li>• Restful API</li>
            </ol>
          </div>
          <div className='mt-4 ml-10'>
            <h1 className='mb-2 text-[#001b5e] font-bold'>Frontend:</h1>
            <ol className='text-gray-100'>
              <li>• Vite</li>
              <li>• React.js</li>
              <li>• React Redux</li>
              <li>• Websockets</li>
              <li>• TailwindCSS</li>
            </ol>
          </div>
        </div>
        <p className='mt-4 text-gray-100 font-semibold'>Click
          <a
          href="https://never-left-behind-veterans-r-us-f6bdcd9fc60e57def2a9122364944c2.gitlab.io/"
          target="_blank"
          rel="noopener noreferrer"
          className='text-blue-900 font-semibold hover:underline'> here </a>
          to go to the website.
        </p>
        <p className='mt-1 text-gray-100 font-semibold'>Click
          <a
          href="https://github.com/mazenbalasta/never-left-behind"
          target="_blank"
          rel="noopener noreferrer"
          className='text-blue-900 font-semibold hover:underline'> here </a>
          to go to github public repository.
        </p>
        <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600' onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

const ZcdModal = ({ closeModal }) => {
  return (
    <div className='fixed inset-0 z-10 flex items-center justify-center bg-gray-900 bg-opacity-50'>
      <div className='flex flex-col items-center bg-gray-500 p-8 max-w-[600px]'>
        <h2 className='text-2xl font-bold text-[#001b5e] mb-4'>Zen's Car Dealearship</h2>
        <p className='text-gray-100 font-semibold pb-5'>Zen's Car Dealership is a Car Dealership Management repository used for a comprehensive solution for managing vehicle inventory, services, sales, staff, and transactions. Simplify dealership operations with this user-friendly system.</p>
        <h2 className='text-gray-100 font-semibold'>Here are the technologies used by this web app:</h2>
        <div className='grid grid-cols-2'>
          <div className='mt-4 mr-10'>
            <h1 className='mb-2 text-[#001b5e] font-bold'>Backend:</h1>
            <ol className='text-gray-100'>
              <li>• Python</li>
              <li>• Django 4</li>
              <li>• PostgreSQL</li>
              <li>• Docker</li>
              <li>• Restful API</li>
              <li>• Microservices</li>
            </ol>
          </div>
          <div className='mt-4 ml-10'>
            <h1 className='mb-2 text-[#001b5e] font-bold'>Frontend:</h1>
            <ol className='text-gray-100'>
              <li>• React.js</li>
              <li>• JavaScript</li>
              <li>• CSS</li>
              <li>• HTML</li>
              <li>• Websockets</li>
              <li>• Bootstrap</li>
            </ol>
          </div>
        </div>
        <p className='mt-1 text-gray-100 font-semibold'>Click
          <a
          href="https://github.com/mazenbalasta/never-left-behind"
          target="_blank"
          rel="noopener noreferrer"
          className='text-blue-900 font-semibold hover:underline'> here </a>
          to go to github public repository.
        </p>
        <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600' onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

const PortfolioModal = ({ closeModal }) => {
  return (
    <div className='fixed inset-0 z-10 flex items-center justify-center bg-gray-900 bg-opacity-50'>
      <div className='flex flex-col items-center bg-gray-500 p-8 max-w-[600px]'>
        <h2 className='text-2xl font-bold text-[#001b5e] mb-4'>My Portfolio</h2>
        <p className='text-gray-100 font-semibold pb-5'>This portfolio webapp does not utilize any backend technologies</p>
        <h2 className='text-gray-100 font-semibold'>Here are the technologies used by this web app:</h2>
          <h1 className='p-3 text-[#001b5e] font-bold'>Frontend:</h1>
            <div className='grid grid-flow-col gap-5 text-gray-100'>
              <p>Vite</p>
              <p>React.js</p>
              <p>React-icons</p>
              <p>TailwindCSS</p>
            </div>
        <p className='mt-5 text-gray-100 font-semibold'>Click
          <a
          href="https://github.com/mazenbalasta/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className='text-blue-900 font-semibold hover:underline'> here </a>
          to go to github public repository.
        </p>
        <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600' onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export { NlbModal, ZcdModal, PortfolioModal };
