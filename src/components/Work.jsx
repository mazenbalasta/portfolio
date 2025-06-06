import React from 'react'
import WorkItem from './WorkItem'
import Cert from '../assets/cert-image.png'

const data = [
    {
        year: '2023',
        title: 'Hack-Reactor Graduate',
        company: 'Galvanize',
        duration: '5 months',
        details: 'Completed a rigorous 774 hour Advanced Software Engineering program at Hack Reactor, mastering full-stack development, algorithms, and software architecture through hands-on experience in pair programming, code reviews, and real-world team projects.',
        certification: Cert
    },
    {
        year: '2022',
        title: 'Emergency Actions Controller',
        company: 'US Air Force',
        duration: '1 year',
        details: 'In the role of a USAF Emergency Actions Controller, one is tasked with the crucial responsibility of orchestrating emergency response protocols, facilitating swift decision-making processes, and coordinating with key stakeholders to effectively manage and mitigate crises, thereby safeguarding the integrity and security of national defense operations.'
    },
    {
        year: '2020',
        title: ' Flying Crew Chief ',
        company: 'US Air Force',
        duration: '2 years',
        details: 'As a USAF Flying Crew Chief for the KC-135, I not only handle pre-flight inspections and maintenance checks but also fly with the crew as a vital member of the maintenance personnel. My role ensures aircraft readiness and supports mission success both on the ground and in the air.'
    },
    {
        year: '2018',
        title: 'Quality Assurance/Aviation Maintenance',
        company: 'US Air Force',
        duration: '2 years',
        details: "In my role as Quality Assurance/Aviation Maintenance personnel in the USAF, I'm responsible for ensuring compliance with rigorous standards and procedures to maintain aircraft integrity and safety. I conduct thorough inspections, provide technical expertise, and uphold the highest standards of aviation maintenance excellence."
    },
    {
        year: '2015',
        title: 'Lead Aviation Maintenance Technician',
        company: 'US Air Force',
        duration: '3 years',
        details: 'As the Lead Aviation Maintenance Technician in the USAF, I oversee the execution of maintenance tasks, provide technical guidance to junior technicians, and ensure adherence to safety protocols and maintenance procedures. My leadership ensures aircraft readiness and mission success in critical operational environments.'
    },
]

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e] dark:text-blue-300'>Experiences</h1>
        {data.map((item, idx) => (
            <WorkItem
                key={idx}
                year={item.year}
                title={item.title}
                company={item.company}
                duration={item.duration}
                details={item.details}
                certification={item.certification}
            />
        ))}
    </div>
  )
}

export default Work
