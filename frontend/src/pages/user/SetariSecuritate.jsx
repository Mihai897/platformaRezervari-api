import React, { useState } from 'react'
import { FaMagento, FaRegEye, FaShieldHalved } from 'react-icons/fa6'
import { FiMonitor } from 'react-icons/fi'
import { GoShieldCheck } from 'react-icons/go';
import { MdOutlinePhoneIphone } from 'react-icons/md'
import { MdKeyboardArrowRight } from "react-icons/md";
import { useOutletContext } from 'react-router-dom';
import { MdOutlineTextsms } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineWrench } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
const SetariSecuritate = () => {
  const [visibleAutPasi,setVisibleAutPasi]= useState(false);
  const iconMap ={
    aplicatie:GoShieldCheck,
    sms:MdOutlineTextsms,
    email:MdOutlineEmail,
    cheie:HiOutlineWrench
  };
  const [checkId,setCheckId] = useState(null);
  return (
    <div className=''>
      
      {
        visibleAutPasi &&(
          <div className={`fixed  z-300   px-3 inset-0 bg-gray-400/15 flex justify-center items-center  `}>
            <div className='border px-3 py-3 w-125 rounded-lg bg-background border-button'>
              <div className='flex items-center justify-between space-x-5'>
                <p>Alege metoda de autentificare in doi pasi</p>
                <button onClick={()=>{setVisibleAutPasi(false); document.body.classList.remove("overflow-hidden")}} className='cursor-pointer text-[19px]'><IoClose /></button>
              </div>
              <p className='text-gray-400 text-[14px] mt-1.5'>Selecteaza metoda preferata pentru autentificarea in doi pasi.</p>
              <ul className='mt-1.5 space-y-3'>
                {
                  [
                    {icon:"aplicatie",nume:"Aplicatie de autentificare (recomandat)", text:"Foloseste aplicatii precom Google Authentificator, Authy sau Miscrosoft Authenticator pentru a genera coduri de verificare.",bg:"bg-green-400/30",cul:"text-green-400"},
                    {icon:"sms",nume:"SMS", text:"Primeste coduri de verificare prin SMS pe numarul tau de telefon.",bg:"bg-button/30",cul:"text-button"},
                    {icon:"email",nume:"Email", text:"Primeste coduri de verificare prin email.",bg:"bg-blue-400/30",cul:"text-blue"},
                    {icon:"cheie",nume:"Cheie de securitate", text:"Foloseste o cheie de securitate pentru autentificare.",bg:"bg-orange-400/30",cul:"text-orange-400"},
                  ].map((par,i)=>
                    {
                      const Icon = iconMap[par.icon];
                      return(
                        <li onClick={()=>setCheckId(i)} key={i} className='flex justify-between space-x-5 items-center border px-3 py-1 rounded-lg border-button/30 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out'>
                          <div className='flex items-center space-x-3'>
                            <div className={`text-[22px] ${par.cul} ${par.bg} px-2 py-2 rounded-lg`}>
                              {
                                Icon && <Icon/>
                              }
                            </div>
                            <div>
                              <p>{par.nume}</p>
                              <p className='text-[14px] text-gray-400'>{par.text}</p>
                            </div>
                          </div>

                          <div>
                            <input type="checkbox" onChange={()=>setCheckId(i)} checked={checkId===i} name="" id="" />
                          </div>
                        </li>
                  )})
                }
              </ul>

              <div className='flex justify-end space-x-3 mt-3'>
                <button onClick={()=>{
                  setVisibleAutPasi(false); document.body.classList.remove("overflow-hidden")
                }} className='border px-3 py-1 rounded-sm cursor-pointer hover:bg-button/60 duration-300 transition-all ease-in-out border-button/30 '>Anuleaza</button>
                <button onClick={()=>{
                  setVisibleAutPasi(false); document.body.classList.remove("overflow-hidden")
                }} className='border px-3 py-1 rounded-sm cursor-pointer hover:bg-button/60 bg-button duration-300 transition-all ease-in-out border-button/30 '>Continua</button>
              </div>
            </div>
          </div>
        )
      }


      <div className='space-y-6'>
        <div className=''>
          <p>Schimba parola</p>

          <div className='grid grid-cols-3 gap-3 max-modf6:grid-cols-2 max-modf2:grid-cols-1'>
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
          </div>

          <div className=' flex items-center max-modf8:flex-col max-modf8:items-start max-modf8:space-y-3 mt-5 space-x-3 justify-between'>
            <p className='text-gray-400 text-[15px]'>Parola trebuie sa contina cel putin 8 caractere, o litetra mare, o litera mica si un numar.</p>
            <button className='shrink-0 border border-button/30 cursor-pointer hover:bg-button/60 transition-all duration-300 ease-in-out px-3 py-1.5 rounded-sm bg-button'>Actualizeaza parola</button>
          </div>
        </div>


        <div className='border-t border-t-button/30 pt-6'>
          <div className='flex space-x-3 items-center '>
            <div className='shrink-0 px-3 py-3 rounded-full bg-button/30'>
              <FaMagento className='shrink-0 text-[23px]'/>
            </div>
            <div>
              <p>Email si autentificare</p>
              <p className='text-gray-400'>Gestioneaza adresa de email si preferintele de autentificare.</p>
            </div>
          </div>

          <div className='mt-3 flex space-x-3 justify-between items-center max-modf2:flex-col max-modf2:items-start max-modf2:space-y-3'>
            <div  >
              <p>Email asociat:</p>
              <p className='text-gray-400 space-x-2'><span>alex.enache@email.com</span> <span className='text-[15px] bg-green-400/30 px-2 text-green-400'>Verificat</span></p>
            </div>
            <div>
              <button className='flex space-x-2 border border-button/30 text-button transition-all duration-300 ease-in-out px-3 py-1 rounded-sm hover:bg-button/60 cursor-pointer items-center'>
                <p>Schimba emailul</p>
                <MdKeyboardArrowRight size={20}/>
              </button>
            </div>
          </div>
        </div>


        <div className='border-t border-t-button/30 pt-6'>
          <div className='flex space-x-3 items-center '>
            <div className='shrink-0 px-3 py-3 rounded-full bg-button/30'>
              <FaShieldHalved className='shrink-0 text-[23px]'/>
            </div>
            <div className='flex items-center max-modf8:flex-col max-modf8:items-start max-modf8:space-y-3 justify-between w-full space-x-3'>
              <div>
                <p>Autentificare in doi pasi (2FA)</p>
                <p className='text-gray-400 text-[15px]'>Activeaza autentificarea cu doi pentru a adauga un nivel suplimentar de securitate contului tau.</p>
              </div>
              <div>
                <p className='text-[15px] bg-green-400/30 px-3 py-0.5 rounded-full text-green-400'>Activat</p>
              </div>
            </div> 
          </div>

          <div className='border border-button/30 px-3 py-3 relative mt-3 rounded-lg'>
                    
            <div className={`flex items-center max-modf8:flex-col max-modf8:items-start max-modf8:space-y-3 justify-between space-x-5 `}>
              <div className={` flex items-center  space-x-3 `}>
                <div className='text-[26px] bg-green-400/30 text-green-400 px-2 py-2 rounded-full'>
                  <GoShieldCheck />
                </div>
                <div className=''>
                  <p className='font-medium'>Metoda activa</p>
                  <p className='text-gray-400 text-[15px]'>Aplicatie de autentificare (Google Authentificator)</p>
                </div>
              </div>
              <div className={`shrink-0 text-[14px]`}>
                <button onClick={()=>{setVisibleAutPasi(!visibleAutPasi);document.body.classList.add("overflow-hidden")}} className='border border-button/30 px-3 py-1 rounded-sm cursor-pointer hover:bg-button transition-all duration-300 ease-in-out'>Configureaza 2FA</button>
              </div>
            </div>



          </div>

          
        </div>




        <div className='border-t border-t-button/30 pt-6'>
          <div className='flex space-x-3 items-center '>
            <div className='shrink-0 px-3 py-3 rounded-full bg-button/30'>
              <FiMonitor className='shrink-0 text-[23px]'/>
            </div>
            <div>
              <p>Sesiuni active</p>
              <p className='text-gray-400'>Gestioneaza dispozitivele conectare la contul tau.</p>
            </div>
          </div>

          <div className='flex items-center space-x-3 text-gray-400 mt-5'>
            <div className='shrink-0'>
              <FiMonitor className='shrink-0 text-[23px]'/>
            </div>
            <div className='w-full'>
              <div className='flex items-center space-x-3 justify-between'>
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
        
          <div>
            <button className='text-button mt-2 hover:text-button/60 transition-all duration-300 ease-in-out cursor-pointer'>Deconecteaza-te de pe toate dispozitivele</button>
          </div>



        </div>
      </div>
    </div>
  )
}

export default SetariSecuritate
