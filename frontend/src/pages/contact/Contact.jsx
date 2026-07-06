import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { Link, Outlet } from 'react-router-dom';
const Contact = () => {
  return (
    <div className='max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8 max-modf8:px-3 pt-4 '>
      
      <div className='flex justify-center'>
        <div className='text-center w-[50%] max-modf8:w-[80%] space-y-4'>
          <p className='text-[34px]'>Contacteaza-ne</p>
          <p>Completeaza formularul de mai jos sau utilizeaza informatiile noastre de contact pentru a lua legatura cu noi.</p>
        </div>
      </div>

      <div className='flex modf:items-start max-modf:flex-col modf:space-x-3 max-modf:space-y-4 py-8'>
        
        <div className='space-y-3 bg-button1 border border-button/15  pl-7 pr-19 py-5 rounded-lg overflow-hidden  '>
          <p className='text-[18px]'>Informatii de contact</p>

          <div className='flex items-center space-x-3'>
            <FaPhoneAlt className='bg-button/40 text-button px-1 py-1 rounded-lg mt-1' size={30}/>
            <p className='text-[15px] text-gray-300'>+40 714 456 789</p>
          </div>
          <div className='flex items-center space-x-3'>
            <IoMailSharp className='bg-button/40 text-button px-1 py-1 rounded-lg mt-1' size={30}/>
            <p className='text-[15px] text-gray-300'>contact@email.com</p>
          </div>
          
        </div>

        <div className='flex-1'>
          <div className='bg-button1 border border-button/15 py-5 rounded-lg px-7'>
            <p className='text-[18px]'>Trimite-ne un Mesaj</p>
            
            <div className='grid grid-cols-2 max-modf1:grid-cols-1 py-3 gap-8'>
              <div className='space-y-3'>
                <p>Nume complet</p>
                <input className='border border-button/70 w-full px-2.5 py-1.5 rounded-lg outline-0' type="text" placeholder='Nume Complet'/>
              </div>
              
              <div className='space-y-3'>
                <p>Adresa de Email</p>
                <input className='border border-button/70 w-full px-2.5 py-1.5 rounded-lg outline-0' type="text" placeholder='Email'/>
              </div>
              
              <div className='space-y-3'>
                <p>Subiect</p>
                <input className='border border-button/70 w-full px-2.5 py-1.5 rounded-lg outline-0' type="text" placeholder='Subiect'/>
              </div>
              
              <div className='space-y-3'>
                <p>Mesajul tau</p>
                <textarea className='border border-button/70 w-full px-2.5 py-1.5 rounded-lg outline-0 resize-none h-50' type="text" placeholder='Nume Complet'></textarea>
              </div>

            </div>

            <div className='flex justify-end'>
              <button className='bg-button px-5 py-1.5 rounded-xl'>Trimite Mesajul</button>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Contact
