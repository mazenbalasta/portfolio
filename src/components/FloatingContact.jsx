import React, { useState } from 'react'

const FloatingContact = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className='fixed bottom-10 right-10 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition z-40'
        aria-label='Contact'
      >
        ✉️
      </button>
      {open && (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-end z-50' onClick={() => setOpen(false)}>
          <div
            className='bg-gray-100 dark:bg-gray-800 p-6 w-full max-w-md h-full overflow-y-auto transform translate-x-0 transition duration-300'
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className='text-2xl font-bold text-center text-[#001b5e] dark:text-blue-300 mb-4'>Contact Me</h2>
            <form action="https://getform.io/f/pbqgnwnb" method='POST' encType='multipart/form-data'>
              <div className='flex flex-col mb-4'>
                <label className='uppercase text-sm text-gray-700 dark:text-gray-200 font-semibold mb-1'>Name</label>
                <input className='border-2 rounded-lg p-2 border-gray-300' type='text' name='name' required />
              </div>
              <div className='flex flex-col mb-4'>
                <label className='uppercase text-sm text-gray-700 dark:text-gray-200 font-semibold mb-1'>Email</label>
                <input className='border-2 rounded-lg p-2 border-gray-300' type='email' name='email' required />
              </div>
              <div className='flex flex-col mb-4'>
                <label className='uppercase text-sm text-gray-700 dark:text-gray-200 font-semibold mb-1'>Message</label>
                <textarea className='border-2 rounded-lg p-2 border-gray-300' rows='5' name='message' required></textarea>
              </div>
              <button className='bg-[#001b5e] text-gray-100 w-full p-2 rounded-lg hover:bg-[#001b3e]'>Send Message</button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default FloatingContact
