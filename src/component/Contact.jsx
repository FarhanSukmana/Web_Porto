import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 py-16 px-2'>
        <h1 className='flex justify-center text-3xl text-blue-800 dark:text-teal-600'>Contact</h1>

        <form action="https://getform.io/f/c60a25d1-205e-4211-9eec-ced6ed40cf94" method='POST' encType='multipart/form-data'>
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2 dark:text-gray-300'>Name</label>
                    <input className='border-2 rounded-lg p-2 flex border-gray-300 dark:bg-gray-500' type="text" name='name' />
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2 dark:text-gray-300'>Phone Number</label>
                    <input className='border-2 rounded-lg p-2 flex border-gray-300 dark:bg-gray-500' type="text" name='phone' />
                </div>
            </div>
            <div className='flex flex-col'>
            <label className='uppercase text-sm py-2 dark:text-gray-300' >Email</label>
            <input className='border-2 rounded-lg p-2 flex border-gray-300 dark:bg-gray-500' type="email" name='email' />
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2 dark:text-gray-300' >Subject</label>
                <input className='border-2 rounded-lg p-2 flex border-gray-300 dark:bg-gray-500' type="text" name='subject' />
            </div>
            <div className='flex flex-col py-2' >
                <label className='uppercase text-sm py-2 dark:text-gray-300'>Message</label>
                <textarea className='border-2 rounded-lg p-2 flex border-gray-300 dark:bg-gray-500' name="message"  rows="10"></textarea>
            </div>
            <button className='flex justify-center items-center w-full p-4 bg-blue-800 text-white dark:bg-gray-700'>
                Send Message
            </button>
        </form>
    </div>
  )
}

export default Contact