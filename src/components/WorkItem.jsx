import React from 'react'

const WorkItem = ({year, title, company, duration, details, certification}) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
      <li className='mb-10 ml-4'>
        <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white'/>
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md'>{year}</span>
          <span className='text-lg font-semibold text-[#001b5e]'>{title}</span>
          <span className='my-1 text-sm font-normal leading-none text-stone-400'>{company}</span>
          <span className='my-1 text-sm font-normal leading-none text-stone-400'>{duration}</span>
        </p>
        <p className='my-2 text-base text-gray-100 font-semibold'>{details}</p>
        {certification && (
          <div className='flex flex-col justify-center'>
            <a href={certification}>
              <img src={certification} alt="Certification" className='h-40 p-2' />
              <p className='ml-3 text-gray-100 font-semibold hover:text-[#001b5e] hover:underline'>Certificate of Completion</p>
            </a>
          </div>
        )}
      </li>
    </ol>
  )
}

export default WorkItem
