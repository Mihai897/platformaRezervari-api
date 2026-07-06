import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { FaRegEye } from "react-icons/fa6";

const ForgotCreare = ({setSearchParams}) => {
  return (
    <div>

      <div className='flex justify-center '>
        <div className='border border-button/30 px-3 rounded-lg py-1.5 w-110 '>
          <p className='text-center text-[19px]'>Creeaazaa parola noua</p>
          <p className='text-center text-gray-400 text-[14px]'>Alege o parola sigura pentru a-ti proteja contul</p>

          <div className='mt-3'>
            <p className='text-[14px]'>Parola noua</p>
            <div className='mt-1.5 relative '>
              <input className='border pl-3 pr-8 py-1.5 rounded-lg outline-0 border-button/30 w-full' type="password" placeholder='Introdu parola noua'/>
              <FaRegEye className='absolute right-1.5  top-1/2 -translate-y-1/2 cursor-pointer text-button'/>
            </div>
          </div>


          <div className='mt-3'>
            <p className='text-[14px]'>Confirma parola noua</p>
            <div className='mt-1.5 relative '>
              <input className='border pl-3 pr-8 py-1.5 rounded-lg outline-0 border-button/30 w-full' type="password" placeholder='Reintrodu parola noua'/>
              <FaRegEye className='absolute right-1.5  top-1/2 -translate-y-1/2 cursor-pointer text-button'/>
            </div>
          </div>


          <div className='text-[14px] border px-3 py-1.5 rounded-lg border-button/30 mt-3'>
            <p className='text-purple-300'>Parola trebuie sa contina:</p>
            <ul className='grid grid-cols-2 max-modf8:grid-cols-1 list-disc marker:text-button gap-x-3'>
              {
                ["Minimum 8 caractere"," O litera mare (A-Z)", "O litera mica (a-z)", "Un numar (0-9)", "Un caracter special (!@#$%)"].map(par=>
                (<li className='ml-3 text-gray-400'>{par}</li>)
                )
              }
            </ul>
          </div>

          <div className='mt-3 relative'>

            <button onClick={()=>setSearchParams({step: 4})} className='w-full bg-button px-3 py-1.5 rounded-lg cursor-pointer hover:bg-button/60 transition-all duration-300 ease-in-out'>Reseteaza parola</button>
            <FaArrowRight className='absolute right-1.5 top-1/2 -translate-y-1/2'/>
          </div>


        </div>
      </div>
     
    </div>
  )
}

export default ForgotCreare
