import React, { useRef, useState } from 'react'
import conf from '../../conf/conf'
import emailjs from '@emailjs/browser'


const ContactForm = () => {
    const form = useRef()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [sucess, setSucess] = useState('')

    const sendEmail = (e) => {
        e.preventDefault()

        try {
            emailjs.sendForm(conf.emailJsServiceId, conf.emailJsTemplateId, form.current, {publicKey: conf.emailJsPublicKey})
            setName('')
            setEmail('')
            setMessage('')
            setSucess('Message sucessfully sent! 👈')
        } catch (error) {
            console.log("Failed in Contact Form Section", error)
        }
    }
    
  return (
      <form className='flex flex-col gap-4' ref={form} onSubmit={sendEmail}>
        <p className='text-lg text-cyan mt-1'>{sucess}</p>
        <input 
        type="text" 
        name="from_name"
        value={name}
        placeholder='Enter your name' 
        required
        onChange={(e) => setName(e.target.value)}
        className='text-white outline-none focus:outline-[1px] focus:outline-orange  mt-6 bg-lightBrown rounded-lg px-4 py-2'/>

        <input 
        type="email" 
        name="from_email" 
        value={email}
        placeholder='Enter your email' 
        required  
        onChange={(e) => setEmail(e.target.value)}
        className='text-white outline-none focus:outline-[1px] focus:outline-orange  bg-lightBrown rounded-lg px-4 py-2'/>

        <textarea 
        name="message" 
        value={message}
        rows={9} 
        cols={9} 
        placeholder='Message' 
        required 
        onChange={(e) => setMessage(e.target.value)}
        className='text-white outline-none focus:outline-[1px] focus:outline-orange   resize-none bg-lightBrown rounded-lg px-4 py-2'></textarea>

        <button 
        className='w-full text-white bg-orange font-bold text-xl py-1 rounded-full'>Submit</button>
      </form>
  )
}

export default ContactForm
