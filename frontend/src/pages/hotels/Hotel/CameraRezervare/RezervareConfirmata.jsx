import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { MdContentCopy } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { FaStar } from 'react-icons/fa6';
import { FaRegCalendarAlt } from "react-icons/fa";
import { SiVisa } from "react-icons/si";
import { FaRegBuilding } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";


const RezervareConfirmata = () => {
  const {camera} = useOutletContext();
  const code = "SC-2024-0620-7851";
  const [copied,setCopied] = useState(false);
  const copyCode = ()=>{
    navigator.clipboard.writeText(code);
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 600);
  }
  return (
    <div className='border px-3 py-4 border-button/30 rounded-lg'>
      <div className='flex max-modf1:flex-col modf1:items-center modf1:space-x-3 border-b border-b-button/30 pb-4'>
        <div className='w-50  max-modf1:w-60 max-modf1:mx-auto rounded-lg'>
          <img className='rounded-lg w-full object-center' src={`${import.meta.env.BASE_URL}home/verify.PNG`} alt="" />
        </div>

        <div className='modf1:flex-3 max-modf1:mt-3 flex modf1:flex-col max-modf1:flex-wrap max-modf1:items-center max-modf1:space-x-3 items-start'>
          <div>
            <p className='font-medium text-[19px]'>Rezervarea ta este confirmata!</p>
            <p className='text-[14px] text-gray-400'>Iti multumim. Rezervarea ta a fost efectuata cu succes.</p>
          </div>
          <div className='text-gray-400 text-[14px] relative mt-3 border text-start px-3 py-1.5 rounded-lg border-button/30'>
            <p>Numar rezervare</p>
            <div className='flex items-center space-x-3'>
              <p className='text-white font-medium'>{code}</p>
              <MdContentCopy onClick={copyCode} className='cursor-pointer' size={18}/>
            </div>
            {copied &&<div className='absolute right-0 top-0 bg-button1 px-1 py-1 '>Copy!</div>}

          </div>

          <div className='text-[14px] text-gray-400 flex mt-3 space-x-3 border px-3 py-1.5 rounded-lg border-button/30'>
            <IoMailOutline className='mt-0.5 shrink-0' size={19}/>
            <div>
              <p>Un e-mai de confirmare a fost trimis la adresa ta de email.</p>
              Te rugam sa verific si folderul de spam.
            </div>
          </div>

        </div>
        
      </div>

      <div className='pt-4'>
        <p className='text-[19px] font-medium'>Detalii rezervare</p>

        <div className='mt-3 flex max-modf1:flex-col modf1:items-center text-[14px] space-x-3 text-gray-400 border-b border-b-button/30 pb-4'>
          <div className='w-50 h-50 max-modf1:w-60 overflow-hidden  rounded-lg border max-modf1:mx-auto border-button/30'>
            <img className='w-full h-full rounded-lg transition-all duration-300 ease-in-out hover:scale-110' src={`${import.meta.env.BASE_URL}${camera?.image}`} alt="" />
          </div>

          <div className='flex flex-3 flex-col w-full max-modf1:mt-3'>
            <div className='flex modf8:space-x-3 max-modf8:flex-col modf8:items-center max-modf8:justify-start max-modf1:justify-between max-modf8:items-start'>
              <p className='text-white font-medium text-[18px]'>{camera?.title}</p>
              <p className='text-lime-600 rounded-sm bg-lime-900 px-1.5 py-0.5'>{camera?.recomandare}</p>
            </div>
            <div className='flex max-modf8:flex-col modf8:space-x-1.5  modf8:items-center max-modf8:justify-start max-modf1:justify-between'>
              <p>{camera?.nume}</p>
              <ul className='flex space-x-0.5'>
                {[1,2,3,4,5].map(star=>(
                  <FaStar className={star<=Math.round(camera?.numar_recenzii) ? "text-yellow-400" :"text-gray-400"}/>
                ))}
              </ul>
            </div>
            
            <p>{camera?.locatie}</p>

            <div className='grid grid-cols-2 max-modf8:grid-cols-1 w-full mt-1.5 gap-1.5'>
                <div className='px-3 py-1.5 border flex space-x-1.5 border-button/30 rounded-lg'>
                  <FaRegCalendarAlt className='mt-1' size={15}/>
                  <div>
                    <p>Check-In</p>
                    <p className='text-white'></p>
                    <p className='text-[12px]'></p>
                  </div>
                </div>
                <div className='px-3 py-1.5 border flex space-x-1.5 border-button/30 rounded-lg'>
                  <FaRegCalendarAlt className='mt-1' size={15}/>
                  <div>
                    <p>Check-Out</p>
                    <p className='text-white'></p>
                    <p className='text-[12px]'></p>
                  </div>
                </div>
                <div className='px-3 py-1.5 border flex space-x-1.5 border-button/30 rounded-lg'>
                  <FaRegCalendarAlt className='mt-1' size={15}/>
                  <div>
                    <p>Sejur</p>
                    <p className='text-white'></p>
                  </div>
                </div>
                <div className='px-3 py-1.5 border flex space-x-1.5 border-button/30 rounded-lg'>
                  <FaRegCalendarAlt className='mt-1' size={15}/>
                  <div>
                    <p>Oaspeti</p>
                    <p className='text-white'></p>
                  </div>
                </div>
                
            </div>
          </div>
        </div>

        <div className='py-4 border-b border-b-button/30 text-[14px]'>
          <p className='font-medium text-[19px]'>Plata efectuata</p>
          <div className='flex modf8:justify-between modf8:items-center max-modf8:flex-col mt-1.5'>
            <div className='border flex space-x-3 px-3 max-modf8:justify-between items-start py-1.5 rounded-lg border-button/30'>
              <div className='flex items-start space-x-3'>
                <div className='mt-1 flex items-center'>
                  <SiVisa className='text-lime-600 border shrink-0 px-1 rounded-lg bg-button/30 border-button' size={30}/>
                </div>
                <div>
                  <p>Plata cu cardul</p>
                  <p>**** **** **** 3456</p>
                </div>
              </div>
              <div className='mt-0.5   '>
                <p className='text-lime-600 bg-lime-900 px-1.5 py-0.5 rounded-sm'>Plata reusita</p>
              </div>
            </div>

            <div className='text-gray-400 text-end'>
              <p>Total platit</p>
              <p className='text-[17px] font-medium text-white'>1350 RON</p>
              <p>(TVA inclus)</p>
            </div>
          </div>
        </div>

        <div className='pt-4'>
          <p className='text-[19px] font-medium mb-4'>Ce urmeaza</p>
          <div className='grid max-modf:grid-cols-2 max-modf2:grid-cols-1 grid-cols-1 gap-4 text-[14px]'>
            <div className='flex items-center space-x-3 border px-3 py-2 rounded-lg border-button/30'>
              <div className=''>
                <IoMailOutline className='px-1 bg-button/30 border border-button/40 rounded-lg text-button' size={39}/>
              </div>
              <div>
                <p className='font-medium'>Verifica e-mailul.</p>
                <p className='text-gray-400'>Ti-am trimis toate detaliile rezervarii pe adresa ta de email.</p>
              </div>
            </div>

            <div className='flex items-center space-x-3 border px-3 py-2 rounded-lg border-button/30'>
              <FaRegBuilding className='px-2 bg-button/30 border border-button/40 rounded-lg text-button' size={39}/>
              <div>
                <p className='font-medium'>Te asteptam cu drag!</p>
                <p className='text-gray-400'>Resortul este pregatit sa iti ofere o experienta de neuitat.</p>
              </div>
            </div>

            <div className='flex items-center space-x-3 border px-3 py-2 rounded-lg border-button/30'>
              <TfiHeadphoneAlt className='px-1 bg-button/30 border border-button/40 rounded-lg text-button' size={39}/>
              <div>
                <p className='font-medium'>Ai nevoie de ajutor?</p>
                <p className='text-gray-400'>Suntem aici pentru tine oricand ai nevoie.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RezervareConfirmata
