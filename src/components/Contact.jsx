import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e] dark:text-blue-300'>Contact Me</h1>
        <form action="https://getform.io/f/pbqgnwnb" method='POST' encType='multipart/form-data'>
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm text-gray-100 font-semibold py-2'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name' required />
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm text-gray-100 font-semibold py-2'>Phone Number</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='phone' required />
                </div>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm text-gray-100 font-semibold py-2'>Email</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name="email" required />
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm text-gray-100 font-semibold py-2'>Subject</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="subject" required />
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm text-gray-100 font-semibold py-2'>Message</label>
                <textarea className='border-2 rounded-lg p-3 border-gray-300' rows="10" name='message' required></textarea>
            </div>
            <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg hover:bg-[#001b3e]'>
                Send Message
            </button>
        </form>
    </div>
  )
}

export default Contact
