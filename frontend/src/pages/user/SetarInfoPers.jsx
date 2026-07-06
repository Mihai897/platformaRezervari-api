import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa6";
import { FiMonitor } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { MdOutlinePhoneIphone } from "react-icons/md";

const SetarInfoPers = () => {
  const [visibleOras,setVisibleOras]= useState(false);
  const [visibleJudet,setVisibleJudet]= useState(false);
  const [visibleLimba,setVisibleLimba]= useState(false);
  const [visibleMoneda,setVisibleMoneda]= useState(false);
  const [visibleData,setVisibleData]= useState(false);
  const [visibleOra,setVisibleOra]= useState(false);
  return (
    <div>
      <div className='grid grid-cols-2 max-modf3:gap-y-6 max-modf3:grid-cols-1 gap-y-4 gap-3'>

        <div>
          <p cla>Informatii personale</p>
          <p className='text-gray-400 mt-2'>Nume complet</p>
          <input className='text-gray-400 outline-0 mt-2 px-3 py-1.5 rounded-sm border border-button/30 w-full' type="text" defaultValue={"Alex Enache"} name="" id="" />

          <p className='text-gray-400 mt-2'>Email</p>
          <input className='text-gray-400 outline-0 mt-2 px-3 py-1.5 rounded-sm border border-button/30 w-full' type="email" defaultValue={"alex.enache@email.com"} name="" id="" />

          <div className='grid grid-cols-2 gap-1.5 mt-3'>
            <div>
              <p className='text-gray-400'>Data nasterii</p>
              <input className='text-gray-400 outline-0 mt-2 px-3 py-1.5 rounded-sm border border-button/30 w-full' type="date" name="" id="" />
            </div>
            <div>
              <p className='text-gray-400'>Tara de resedinta</p>
              <input className='text-gray-400 outline-0 mt-2 px-3 py-1.5 rounded-sm border border-button/30 w-full' type="text" defaultValue={"Romania"} name="" id="" />
            </div>
          </div>

          <div className='mt-2'>
            <p className='text-gray-400'>Telefon</p>
            <div className='relative mt-2'>
              <input type="text" className='border  px-3 py-1.5 rounded-sm border-button/30 outline-0 w-full text-gray-400' defaultValue={"+40 712 345 678"} />
            </div>
          </div>

          <div className=' flex items-start mt-3'>
            <button className=' border border-button/30 cursor-pointer hover:bg-button/60 transition-all duration-300 ease-in-out px-3 py-1.5 rounded-sm bg-button'>Salveaza modificarile</button>
          </div>
        </div>


        <div>
          <p>Schimba parola</p>
          <div className=' mt-2 text-gray-400'>
            <p className=''>Parola actuala</p>
            <div className='mt-2 relative '>
              <input type="text" className='border w-full px-3 py-1.5 rounded-sm border-button/30 peer outline-0' placeholder='' name="" id="" />
              <FaRegEye className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer '/>
              <p className='absolute top-1/2 pointer-events-none -translate-y-1/2 left-3 transition-all duration-300 ease-in-out
              peer-placeholder-shown:top-1/2
              peer-placeholder-shown:-translate-y-1/2
              peer-not-placeholder-shown:-top-0.5
              peer-not-placeholder-shown:text-[10px]
              peer-not-placeholder-shown:text-button
              peer-not-placeholder-shown:bg-button1
              peer-not-placeholder-shown:px-2
              peer-focus:-top-0.5
              peer-focus:text-[10px]
              peer-focus:text-button
              peer-focus:px-2
              peer-focus:bg-button1
              '>Introdu parola actuala</p>
            </div>
          </div>
          <div className=' mt-2 text-gray-400'>
            <p className=''>Parola noua</p>
            <div className='mt-2 relative '>
              <input type="text" className='border w-full px-3 py-1.5 rounded-sm border-button/30 peer outline-0' placeholder='' name="" id="" />
              <FaRegEye className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer '/>
              <p className='absolute top-1/2 pointer-events-none -translate-y-1/2 left-3 transition-all duration-300 ease-in-out
              peer-placeholder-shown:top-1/2
              peer-placeholder-shown:-translate-y-1/2
              peer-not-placeholder-shown:-top-0.5
              peer-not-placeholder-shown:text-[10px]
              peer-not-placeholder-shown:text-button
              peer-not-placeholder-shown:bg-button1
              peer-not-placeholder-shown:px-2
              peer-focus:-top-0.5
              peer-focus:text-[10px]
              peer-focus:text-button
              peer-focus:px-2
              peer-focus:bg-button1
              '>Introdu noua parola</p>
            </div>
          </div>
          <div className=' mt-2 text-gray-400'>
            <p className=''>Confirma parola noua</p>
            <div className='mt-2 relative '>
              <input type="text" className='border w-full px-3 py-1.5 rounded-sm border-button/30 peer outline-0' placeholder='' name="" id="" />
              <FaRegEye className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer '/>
              <p className='absolute top-1/2 pointer-events-none -translate-y-1/2 left-3 transition-all duration-300 ease-in-out
              peer-placeholder-shown:top-1/2
              peer-placeholder-shown:-translate-y-1/2
              peer-not-placeholder-shown:-top-0.5
              peer-not-placeholder-shown:text-[10px]
              peer-not-placeholder-shown:text-button
              peer-not-placeholder-shown:bg-button1
              peer-not-placeholder-shown:px-2
              peer-focus:-top-0.5
              peer-focus:text-[10px]
              peer-focus:text-button
              peer-focus:px-2
              peer-focus:bg-button1
              '>Confirma noua parola</p>
            </div>
          </div>

          <div className=' flex items-start mt-3'>
            <button className=' border border-button/30 cursor-pointer hover:bg-button/60 transition-all duration-300 ease-in-out px-3 py-1.5 rounded-sm bg-button'>Actualizeaza parola</button>
          </div>
        </div>

        <div className=''>
          <p>Autentificare cu dispozitive</p>
          <p className='text-gray-400'>Gestioneaza dispozitivele pe care esti autentificat.</p>

          <div className='flex items-center space-x-3 text-gray-400 mt-3'>
            <div className='shrink-0'>
              <FiMonitor className='shrink-0 text-[23px]'/>
            </div>
            <div>
              <div className='flex items-center space-x-3'>
                <p>Windows &middot; Chrome</p>
                <span className='bg-button/30 px-3  text-button max-modf8:text-[10px] shrink-0'>Dispozitiv curent</span>
              </div>
              <div>
                <p>Bucuresti, Romania 23 mai 2024, 10:30</p>
              </div>
            </div>
          </div>

          <div className='flex items-center space-x-3 w-full text-gray-400 mt-3'>
            <div className='shrink-0'>
              <MdOutlinePhoneIphone className='shrink-0 text-[23px]'/>
            </div>
            <div className='w-full'>
              <div className='flex items-center justify-between  w-full space-x-3'>
                <p>Samsung &middot; a34</p>
                <span className='bg-red-600/30 px-3 cursor-pointer hover:bg-red-600/20 transition-all duration-300 ease-in-out text-red-600 max-modf8:text-[10px]'>Deconecteaza</span>
              </div>
              <div>
                <p>Bucuresti, Romania 23 mai 2024, 10:30</p>
              </div>
            </div>
          </div>
          <div className='flex items-center space-x-3 w-full text-gray-400 mt-3'>
            <div className='shrink-0'>
              <MdOutlinePhoneIphone className='shrink-0 text-[23px]'/>
            </div>
            <div className='w-full'>
              <div className='flex items-center justify-between  w-full space-x-3'>
                <p>Samsunt Galaxy &middot; A54</p>
                <span className='bg-red-600/30 px-3 cursor-pointer hover:bg-red-600/20 transition-all duration-300 ease-in-out text-red-600 max-modf8:text-[10px]'>Deconecteaza</span>
              </div>
              <div>
                <p>Bucuresti, Romania 23 mai 2024, 10:30</p>
              </div>
            </div>
          </div>

          



        </div>


        <div>
          <p className='font-medium'>Preferinte cont</p>
          <div className='space-y-3 mt-3'>


            <div className='flex items-center'>
              <p className='flex-1 text-gray-400'>Limba</p>
              <div className='flex-2 '>
                <div className='relative'>
                  <button onClick={()=>setVisibleLimba(!visibleLimba)} className={`border border-button/30 w-full text-start px-3 py-1 ${visibleLimba? "bg-button/60 rounded-b-lg": "bg-transparent rounded-lg"} cursor-pointer hover:bg-button/60 transition-all duration-300 flex items-center justify-between ease-in-out
                `}>
                  <p>Romana</p>
                  {
                    visibleLimba? <IoIosArrowUp className='mt-0.5'/> : <IoIosArrowDown className='mt-0.5'/>
                  }
                </button>
                <ul className={`absolute bottom-8 z-100 w-full bg-button1 transition-all duration-500 ease-in-out overflow-hidden ${visibleLimba? "max-h-40 opacity-100":"max-h-0 opacity-0"}`}>
                  {
                    ["Romana","Engleza","Franceza","Germana"].map((par,i)=>(
                      <li key={i} className={`border border-button/30 px-3 py-1 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out`}>
                        <p>{par}</p>
                      </li>
                    ))
                  }
                </ul>
                </div>
              </div>
            </div>

            
            <div className='flex items-center'>
              <p className='flex-1 text-gray-400'>Moneda</p>
              <div className='flex-2 '>
                <div className='relative'>
                  <button onClick={()=>setVisibleMoneda(!visibleMoneda)} className={`border border-button/30 w-full text-start px-3 py-1 ${visibleMoneda? "bg-button/60 rounded-b-lg": "bg-transparent rounded-lg"} cursor-pointer hover:bg-button/60 transition-all duration-300 flex items-center justify-between ease-in-out
                `}>
                  <p>RON</p>
                  {
                    visibleMoneda? <IoIosArrowUp className='mt-0.5'/> : <IoIosArrowDown className='mt-0.5'/>
                  }
                </button>
                <ul className={`absolute bottom-8 z-100 w-full bg-button1 transition-all duration-500 ease-in-out overflow-hidden ${visibleMoneda? "max-h-40 opacity-100":"max-h-0 opacity-0"}`}>
                  {
                    ["RON","EURO","DOLAR"].map((par,i)=>(
                      <li key={i} className={`border border-button/30 px-3 py-1 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out`}>
                        <p>{par}</p>
                      </li>
                    ))
                  }
                </ul>
                </div>
              </div>
            </div>

            <div className='flex items-center'>
              <p className='flex-1 text-gray-400'>Format data</p>
              <div className='flex-2 '>
                <div className='relative'>
                  <button onClick={()=>setVisibleData(!visibleData)} className={`border border-button/30 w-full text-start px-3 py-1 ${visibleData? "bg-button/60 rounded-b-lg": "bg-transparent rounded-lg"} cursor-pointer hover:bg-button/60 transition-all duration-300 flex items-center justify-between ease-in-out
                `}>
                  <p>DD MM YYYY</p>
                  {
                    visibleData? <IoIosArrowUp className='mt-0.5'/> : <IoIosArrowDown className='mt-0.5'/>
                  }
                </button>
                <ul className={`absolute bottom-8 z-100 w-full bg-button1 transition-all duration-500 ease-in-out overflow-hidden ${visibleData? "max-h-40 opacity-100":"max-h-0 opacity-0"}`}>
                  {
                    ["DD MM YYYY","DD MM","MM YYYY"].map((par,i)=>(
                      <li key={i} className={`border border-button/30 px-3 py-1 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out`}>
                        <p>{par}</p>
                      </li>
                    ))
                  }
                </ul>
                </div>
              </div>
            </div>

            <div className='flex items-center'>
              <p className='flex-1 text-gray-400'>Format ora</p>
              <div className='flex-2 '>
                <div className='relative'>
                  <button onClick={()=>setVisibleOra(!visibleOra)} className={`border border-button/30 w-full text-start px-3 py-1 ${visibleOra? "bg-button/60 rounded-t-lg": "bg-transparent rounded-lg"} cursor-pointer hover:bg-button/60 transition-all duration-300 flex items-center justify-between ease-in-out
                `}>
                  <p>24 ore (14:30)</p>
                  {
                    visibleOra? <IoIosArrowUp className='mt-0.5'/> : <IoIosArrowDown className='mt-0.5'/>
                  }
                </button>
                <ul className={`absolute  z-100 w-full bg-button1 transition-all duration-500 ease-in-out overflow-hidden ${visibleOra? "max-h-40 opacity-100":"max-h-0 opacity-0"}`}>
                  {
                    ["24 ore (14:30)","24 ore (2:30 PM)"].map((par,i)=>(
                      <li key={i} className={`border border-button/30 px-3 py-1 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out`}>
                        <p>{par}</p>
                      </li>
                    ))
                  }
                </ul>
                </div>
              </div>
            </div>


          </div>
        </div>


        <div>
          <p>Sterge contul</p>
          <p className='mt-2 text-gray-400'>Stergerea contului este ireversibila. Toate datele tale vor fi eliminate permanent.</p>
          <div className='flex items-start'>

            <button className='mt-3 border border-red-600/30 text-red-600 hover:bg-red-600/30 cursor-pointer transition-all duration-300 ease-in-out px-5 py-1.5 rounded-sm '>Sterge contul meu</button>
          </div>
        </div>      
      </div>
    </div>
  )
}

export default SetarInfoPers
