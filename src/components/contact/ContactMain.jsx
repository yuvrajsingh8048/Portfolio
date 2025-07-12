import React from 'react'
import ContactLeft from './ContactLeft'
import ContactRight from './ContactRight'

const ContactMain = () => {
  return (

    <div className='max-w-[1200px] flex flex-col justify-center items-center'>
    <div id='contact' className='max-w-[1200px] mx-auto flex flex-col justify-center items-center mt-[100px] relative'>
        <h2 className='text-4xl text-cyan font-bold flex justify-center'>Contact Me</h2>

        <div className='flex gap-24 bg-brown justify-between mt-6 p-8 sm:flex-col lg:flex-row'>
            <ContactLeft />
            <ContactRight />
        </div>
      </div>
    </div>
  )
}

export default ContactMain
