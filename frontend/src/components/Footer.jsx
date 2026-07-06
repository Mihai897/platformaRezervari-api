import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GiBeastEye } from "react-icons/gi";
import { FaMagento } from 'react-icons/fa6';

const Footer = () => {
  const [visibleCampanie,setvisibleCampanie] = useState(false);
  const [visibleSuport,setvisibleSuport] = useState(false);
  const [visibleContact,setvisibleContact] = useState(false);
  return (
    <div className=' max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8 max-modf8:px-3 py-10 grid grid-cols-4 gap-6 max-modf:gap-3 max-modf:text-[14px]  max-modf1:grid-cols-1  max-modf1:gap-2 text-[14.5px] '>
      <div className=' '>
        <div className='flex flex-col'>
          <div className='flex items-center space-x-1.5'>
            <FaMagento size={20} className='text-button'/>
            <p className='font-medium'>Nume<span className='text-button'>Site</span></p>
          </div>
          <p className='mt-1'>Platforma ta de incredere pentru rezervari hoteliere si experiente memorabile</p>
        </div>
      </div>

      <div className='mt-1  '>
        <div className='flex  flex-col  max-modf1:border-y max-modf1:border-y-button/30'>
          <button onClick={()=>setvisibleCampanie(!visibleCampanie)} className='  max-modf1:cursor-pointer max-modf1:py-2 max-modf1:flex max-modf1:items-center  max-modf1:justify-between text-start'>
            <p className='font-medium'>Companie</p>
            <div className='modf1:hidden'>
              {
                visibleCampanie? <IoIosArrowUp className='text-[19px] text-button'/> : <IoIosArrowDown className='text-[19px] text-button'/>
              }
            </div>
          </button>
          
          {
            <div className={`${visibleCampanie ? "max-modf1:max-h-100 max-modf1:opacity-100": "max-modf1:max-h-0 max-modf1:opacity-0 "} transition-all duration-300 ease-in-out flex flex-col space-y-1 mt-1 text-gray-400 overflow-hidden`}>
              <Link to='/about' className='hover:text-white transition-all duration-300 ease-in-out'>Despre Noi</Link>
              <Link to='/functionare' className='hover:text-white transition-all duration-300 ease-in-out'>Cum Functioneaza</Link>
              <Link to='/services' className='hover:text-white transition-all duration-300 ease-in-out mb-2'>Servicii</Link>
            </div>
          }
        </div>
      </div>

      <div className=''>
        <div className='flex flex-col max-modf1:border-y max-modf1:border-y-button/30'>
          <button onClick={()=>setvisibleSuport(!visibleSuport)} className='  max-modf1:cursor-pointer max-modf1:py-2 max-modf1:flex max-modf1:items-center  max-modf1:justify-between text-start'>
            <p className='font-medium'>Suport</p>
            <div className='modf1:hidden'>
              {
                visibleSuport? <IoIosArrowUp className='text-[19px] text-button'/> : <IoIosArrowDown className='text-[19px] text-button'/>
              }
            </div>
          </button>
          <div className={`${visibleSuport ? "max-modf1:max-h-100 max-modf1:opacity-100": "max-modf1:max-h-0 max-modf1:opacity-0 "} transition-all duration-300 ease-in-out flex flex-col space-y-1 mt-1 text-gray-400 overflow-hidden`}>
            <Link to="/centrul-ajutor" className='hover:text-white transition-all duration-300 ease-in-out'>Centrul de Ajutor</Link>
            <Link to="/contact" className='hover:text-white transition-all duration-300 ease-in-out'>Contact</Link>
            <Link to="/intrebari" className='hover:text-white transition-all duration-300 ease-in-out mb-2'>Intrebari Frecvente</Link>
          </div>
        </div>
      </div>
      
      <div className='  '>
        <div className='flex flex-col max-modf1:border-y max-modf1:border-y-button/30'>
          <button onClick={()=>setvisibleContact(!visibleContact)} className='  max-modf1:cursor-pointer max-modf1:py-2 max-modf1:flex max-modf1:items-center  max-modf1:justify-between text-start'>
            <p >Contact</p>
            <div className='modf1:hidden'>
              {
                visibleContact? <IoIosArrowUp className='text-[19px] text-button'/> : <IoIosArrowDown className='text-[19px] text-button'/>
              }
            </div>
          </button>
        
          <div className={`${visibleContact ? "max-modf1:max-h-100 max-modf1:opacity-100": "max-modf1:max-h-0 max-modf1:opacity-0 "} transition-all duration-300 ease-in-out flex flex-col space-y-1 mt-1 text-gray-400 overflow-hidden`}>

            <div className='flex space-x-2 items-center'>
              <FaPhoneAlt className='text-button'/>
              <p>+40 134 567 890</p>
            </div>

            <div className='flex space-x-2 items-center'>
              <MdEmail className='text-button'/>
              <p>contact@numesite.ro</p>
            </div>
            
            <div className='flex space-x-2 items-center mb-2'>
              <MdLocationPin className='text-button'/>
              <p>Timisoara, Romania</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
