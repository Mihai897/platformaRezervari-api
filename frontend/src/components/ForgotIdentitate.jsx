import React from 'react'
import { GoShieldCheck } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";

const ForgotIdentitate = ({setSearchParams}) => {
  return (
    <div>

      <div className='grid grid-cols-2 max-modf1:grid-cols-1 modf1:space-x-3 max-modf1:space-y-3'>
      

        <div className='border px-3 py-1.5 rounded-lg border-button/30'>
          <div className='flex items-center space-x-3'>
            <div className='px-1.5 py-1.5 bg-button/30 rounded-full'>
              <CiMail className='text-[24px] text-button'/>
            </div>
            <div>
              <p>Verifica adresa de email</p>
              <p className='text-[14px] text-gray-400'>Indrodu codul de verificare trimis la</p>
              <p className='text-[14px] text-button'>exemplu@email.com</p>
            </div>
          </div>

          <div className='mt-3'>
            <p className='text-[14px]'>Cod de verificare</p>
            <ul className='modf1:grid modf1:grid-cols-6 modf1:gap-3 w-full max-modf1:flex mt-3 max-modf1:justify-center space-x-4'>
              {[1,2,3,4,5,6].map(()=>(
                <input className='border outline-0 rounded-lg border-button py-2 pl-4.5 w-11 max-modf8:w-7 max-modf8:pl-3 max-modf8:py-1'/>
              ))}
            </ul>
          </div>

          <div className='text-gray-400 text-[14px] mt-3 flex justify-between'>
            <p>Nu ai primit codul?</p>
            <button className='text-button cursor-pointer'>Retrimite cod (00:45)</button>
          </div>

          <div className='mt-3 relative '>
            <button onClick={()=>setSearchParams({step:3})} className='bg-button hover:bg-button/60 transition-all duration-500 ease-in-out w-full py-1.5 rounded-lg cursor-pointer'>
              <p>Verifica codul</p>
            </button>
            <FaArrowRight className='absolute right-1.5 top-1/2 -translate-y-1/2 '/>
          </div>

          <div className='mt-3 flex items-center space-x-4  px-3 py-1.5 rounded-lg border border-button/30'>
            <div className='bg-button/30 px-1.5 py-1.5 rounded-full'>
              <HiOutlineLightBulb className='text-button shrink-0 text-[23px]'/>
            </div>

            <div className='text-[14px] text-gray-400'>
              <p className='text-white text-[16px]'>Sfaturi utile</p>
              <ul className='list-disc marker:text-button'>
                {["Verifica si folderul de Spam.", "Codul de verificare este valabil timp de 15 minute."].map(par=>(
                  <li className='ml-3'>{par}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>


        <div className='border px-3 py-1.5 rounded-lg border-button/30 text-[14px]'>
          <p className='font-medium text-[19px]'>Verifica-ti identitatea</p>
          <div className='text-gray-400 mt-1'>
            <p>Am trimis un cod de verificare la adresa tea de email.</p>
            <p>Te rugam sa introduci codul pentru a continua.</p>
          </div>

          <div className='border mt-4 px-3 py-1.5 rounded-lg border-button/30 flex items-center space-x-3'>
            <div className='bg-button/30 px-1.5 py-1.5 rounded-full'>
              <GoShieldCheck className='text-[24px] shrink-0 text-button'/>
            </div>
            <div>
              <p className='text-[16px]'>De ce este nevoie de verificare?</p>
              <p className='text-gray-400'>Verificarea identitatii ne ajuta sa ne asiguram ca tu esti cel care solicita accesul la contul tau si protejeaza datele tale impotriva accesului neautorizat.</p>
            </div>
          </div>
        </div>


      </div>
      
    </div>
  )
}

export default ForgotIdentitate
