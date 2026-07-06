import React, { useState } from 'react'
import { CiMail } from "react-icons/ci";
import { GoShieldCheck } from "react-icons/go";
import { CiLock } from "react-icons/ci";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { GiSmartphone } from "react-icons/gi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const ForgotEmail = ({setSearchParams}) => {
  const [visEm,setVisEm] = useState(true);
  const [visTel,setVisTel] = useState(false);
  const [visibleNrTel,setVisibleNrTel] = useState(false);
  return (
    <div>

      <div className='grid grid-cols-2 max-modf1:grid-cols-1 max-modf1:space-y-3 modf1:space-x-3'>
        <div className='border px-3 py-1.5 rounded-lg border-button/30'>
          

          {visEm &&
          <div className='text-[14px] '>
            <p className='font-medium text-[20px]'>Introdu adresa de email</p>
            <p className='text-gray-400 text-[14px]'>Vei primi un cod de verificare pe adresa de email asociata contului tau.</p>
            <p className='mt-5'>Adresa de email</p>

            <div className='relative mt-3'>
              <input className='border w-full pl-10 pr-3 py-2 rounded-lg outline-0 border-button/60 bg-button/10 ' type="email" placeholder='exemplu@email.com'/>
              <CiMail className='absolute left-3 top-1/2 -translate-y-1/2 text-button' size={20}/>
            </div>
            
            <button onClick={()=>setSearchParams({step:2})} className='mt-3 hover:bg-button/19 transition-all duration-300 ease-in-out border border-button/60 w-full py-2 px-3 rounded-lg bg-button/30 relative cursor-pointer'>
              <p>Trimite codul de verificare</p>
              <FaArrowRight className='absolute right-1.5 text-button  h-full top-0' />
            </button>
          </div>}

          {visTel &&
          <div className='text-[14px] '>
            <p className='font-medium text-[20px]'>Introdu numarul de telefon</p>
            <p className='text-gray-400 text-[14px]'>Vei primi un cod de verificare prin SMS pe numarul de telefon asociat contului tau.</p>
            <p className='mt-5'>Numar de telefon</p>

            <div className='relative mt-3 z-100'>
              <input className='border w-full pl-27 pr-3 py-2 rounded-lg outline-0 border-button/60 bg-button/10 ' type="tel" placeholder='Ex: 714 345 678'/>
              <GiSmartphone className='absolute left-3 top-1/2 -translate-y-1/2 text-button' size={20}/>
              <div className='absolute top-1/2 -translate-y-1/2 left-10'>
                <div className='relative'>
                  <button onClick={()=>setVisibleNrTel(!visibleNrTel)} className={`hover:bg-button/60 ${visibleNrTel? "bg-button/60": "bg-transparent"} border-x px-1 border-x-button/60 py-2 cursor-pointer `}>
                    <div className='flex items-center'>
                      <p>+ 40</p>
                      {
                        visibleNrTel ? <MdKeyboardArrowUp className='text-button ml-1' size={19}/>: <MdKeyboardArrowDown className='text-button ml-1' size={19}/>
                      }
                    </div>
                    
                  </button>
                  <ul className={`absolute bg-button1 left-0 top-9.25 overflow-hidden transition-all duration-500 ease-in-out w-full ${visibleNrTel? "max-h-100 opacity-100": "max-h-0 opacity-0"}`}>
                      {["+30","+50"].map((par,i)=>(
                        <li key={i} className='border cursor-pointer hover:bg-button/60 transition-all duration-500 ease-in-out border-button/60 px-1'>
                          {par}
                        </li>
                      ))}
                    </ul>
                </div>
              </div>
            </div>
            
            <button onClick={()=>setSearchParams({step:2})} className='mt-3 z-1 hover:bg-button/19 transition-all duration-300 ease-in-out border border-button/60 w-full py-2 px-3 rounded-lg bg-button/30 relative cursor-pointer'>
              <p>Trimite codul de verificare</p>
              <FaArrowRight className='absolute right-1.5 text-button  h-full top-0' />
            </button>
          </div>}

          <div className='relative border-t border-t-button/60 mt-4'>
            <p className='absolute left-1/2 -translate-x-1/2 -top-3 text-gray-400 bg-button1 px-3 text-[14px]'>sau</p>
          </div>

          {visEm &&
          <button onClick={()=>{
            setVisEm(false); setVisTel(true);
          }} className='cursor-pointer w-full text-start space-x-3 mt-6 flex items-center border px-3 py-1.5 rounded-lg border-button/60 bg-button/4'>
             <div className='bg-button/30 rounded-full px-2 py-2'>
              <GiSmartphone className='text-[23px] text-button'/>
             </div>
             <div>
              <p>Trimite prin SMS</p>
              <p className='text-[14px] text-gray-400'>Primeste codul pe numarul de telefon</p>
             </div>
          </button>
          }

          {visTel &&
          <button onClick={()=>{
            setVisEm(true); setVisTel(false);
          }} className='cursor-pointer w-full text-start space-x-3 mt-6 flex items-center border px-3 py-1.5 rounded-lg border-button/60 bg-button/4'>
             <div className='bg-button/30 rounded-full px-2 py-2'>
              <CiMail className='text-[23px] text-button'/>
             </div>
             <div>
              <p>Trimite prin email</p>
              <p className='text-[14px] text-gray-400'>Primeste codul pe adresa ta de email</p>
             </div>
          </button>
          }
        </div>




        <div className='border px-3 py-1.5 rounded-lg border-button/30 space-y-4'>
          <p className='text-fuchsia-300'>Ce urmeaza?</p>

          <div className='text-[14px] space-y-4'>

            <div className='flex space-x-3 items-center'>
              <div className='bg-button/30 rounded-full px-2 py-2'>
                <CiMail  className='text-[23px] text-button'/>
              </div>
              <div>
                <p>Verifica-ti inboxul</p>
                <p className='text-gray-400'>Iti vom trimite un code de 6 cifre pe adresa ta de email.</p>
              </div>
            </div>

            <div className='flex space-x-3 items-center'>
              <div className='bg-button/30 rounded-full px-2 py-2'>
                <GoShieldCheck  className='text-[23px] text-button'/>
              </div>
              <div>
                <p>Verifica identitatea</p>
                <p className='text-gray-400'>Introdu codul primit pentru a confirma ca esti proprietarul contului.</p>
              </div>
            </div>

            <div className='flex space-x-3 items-center'>
              <div className='bg-button/30 rounded-full px-2 py-2'>
                <CiLock  className='text-[23px] text-button'/>
              </div>
              <div>
                <p>Creeaza o parola noua</p>
                <p className='text-gray-400'>Alege o parola sigura pe care sa o folosesti pentru autentificare..</p>
              </div>
            </div>

            <div className='flex space-x-3 items-center'>
              <div className='bg-button/30 rounded-full px-2 py-2'>
                <FaRegCheckCircle  className='text-[23px] text-button'/>
              </div>
              <div>
                <p>Acces rstaurat</p>
                <p className='text-gray-400'>Te vei putea conecta din nou si te vei bucura de calatorii fara griji.</p>
              </div>
            </div>


          </div>
        </div>
      </div>

      
    </div>
  )
}

export default ForgotEmail
