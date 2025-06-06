import React, {useEffect, useState} from 'react'
import { AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineMail } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { GrProjects } from 'react-icons/gr'

const Sidenav = () => {
  const [nav, setNav] = useState(false)
  const [active, setActive] = useState('main')

  useEffect(() => {
    const sections = ['main', 'work', 'projects', 'resume', 'contact']
    const options = { threshold: 0.6 }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(entry.target.id)
        }
      })
    }, options)
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div>
      <AiOutlineMenu size={40} onClick={handleNav} className='text-white absolute top-4 right-4 z-[99] md:hidden' />
      {
        nav ? (
          <div className='fixed w-full h-screen bg-white/80 flex flex-col justify-center items-center z-20'>
          <a onClick={handleNav} href="#main" className={`w-[75%] flex justify-center items-center rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ${active==='main' ? 'bg-blue-500 text-white' : 'bg-gray-100 shadow-gray-400'}`}>
            <AiOutlineHome size={20} />
            <span className='pl-4'>Home</span>
          </a>
          <a onClick={handleNav} href="#work" className={`w-[75%] flex justify-center items-center rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ${active==='work' ? 'bg-blue-500 text-white' : 'bg-gray-100 shadow-gray-400'}`}>
            <GrProjects size={20} />
            <span className='pl-4'>Experiences</span>
          </a>
          <a onClick={handleNav} href="#projects" className={`w-[75%] flex justify-center items-center rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ${active==='projects' ? 'bg-blue-500 text-white' : 'bg-gray-100 shadow-gray-400'}`}>
            <AiOutlineProject size={20} />
            <span className='pl-4'>Recent Projects</span>
          </a>
          <a onClick={handleNav} href="#resume" className={`w-[75%] flex justify-center items-center rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ${active==='resume' ? 'bg-blue-500 text-white' : 'bg-gray-100 shadow-gray-400'}`}>
            <BsPerson size={20} />
            <span className='pl-4'>Resume Download</span>
          </a>
          <a onClick={handleNav} href="#contact" className={`w-[75%] flex justify-center items-center rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ${active==='contact' ? 'bg-blue-500 text-white' : 'bg-gray-100 shadow-gray-400'}`}>
            <AiOutlineMail size={20} />
            <span className='pl-4'>Contact Me</span>
          </a>
          </div>
        )
        : (
          ''
        )
      }
      <div className='md:block hidden fixed top-[25%] z-10'>
        <div className='flex flex-col'>
          <a href="#main" className={`rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 ${active==='main' ? 'bg-blue-500 text-white' : 'bg-gray-100 shadow-gray-400'}`}> 
            <AiOutlineHome size={20}/>
          </a>
          <a href="#work" className={`rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 ${active==='work' ? 'bg-blue-500 text-white' : 'bg-gray-100 shadow-gray-400'}`}> 
            <GrProjects size={20}/>
          </a>
          <a href="#projects" className={`rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 ${active==='projects' ? 'bg-blue-500 text-white' : 'bg-gray-100 shadow-gray-400'}`}> 
            <AiOutlineProject size={20}/>
          </a>
          <a href="#resume" className={`rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 ${active==='resume' ? 'bg-blue-500 text-white' : 'bg-gray-100 shadow-gray-400'}`}> 
            <BsPerson size={20}/>
          </a>
          <a href="#contact" className={`rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 ${active==='contact' ? 'bg-blue-500 text-white' : 'bg-gray-100 shadow-gray-400'}`}> 
            <AiOutlineMail size={20}/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidenav
