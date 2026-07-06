import React, { useState } from 'react'
import { GoShieldCheck } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { useOutletContext } from 'react-router-dom';
import { MdOutlineTextsms } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineWrench } from "react-icons/hi2";
import { FaLock } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";


const Securitate = () => {
  const { visibleBara } = useOutletContext();
  const [visibleAutPasi,setVisibleAutPasi] = useState(false);
  const [visibleSchimba,setVisibleSchimba] = useState(false);
  const [visibleSesiuni,setVisibleSesiuni] = useState(false);
  const iconMap ={
    aplicatie:GoShieldCheck,
    sms:MdOutlineTextsms,
    email:MdOutlineEmail,
    cheie:HiOutlineWrench
  };
  const iconMap2 ={
    pc: RiComputerLine,
    phone: IoIosPhonePortrait
  }
  const [checkId,setCheckId] = useState(null);
  return (
    <div className='mt-4 grid grid-cols-2 max-modf:grid-cols-1 gap-3 '>
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

      {
        visibleSchimba && (
          <div className='fixed inset-0 px-3 bg-gray-400/15 flex justify-center items-center z-300'>
            <div className='border border-button bg-background px-3 py-3 w-110 rounded-lg'>
              <div className='flex justify-end'>
                <IoClose onClick={()=>{setVisibleSchimba(false); document.body.classList.remove("overflow-hidden")}} className='cursor-pointer' size={20}/>
              </div>
              <div>
                <p className='text-[19px] font-medium'>Schimba parola</p>
                <p className='text-gray-400 text-[14px]'>Asigura-te ca folosesti o parola puternica si unica.</p>
                <div className='space-y-1.5'>
                  <p className='text-[14px]'>Parola curenta</p>
                  <div className='relative w-[95%]'>
                    <input className='border w-full rounded-sm border-button/30  pl-3 pr-7 py-2 outline-0' type="password" name="" id="" />
                    <div className='absolute right-1.5 mt-0.5 top-1/2 -translate-y-1/2  text-[17px] '>
                      <FaRegEye/>
                    </div>
                  </div>
                  <p className='text-[14px]'>Parola noua</p>
                  <div className='relative w-[95%]'>
                    <input className='border w-full rounded-sm border-button/30  pl-3 pr-7 py-2 outline-0' type="password " name="" id="" />
                    <div className='absolute right-1.5 mt-0.5 top-1/2 -translate-y-1/2  text-[17px] '>
                      <FaRegEye/>
                    </div>
                  </div>
                  <p className='text-[14px]'>Confirmare parola</p>
                  <div className='relative w-[95%]'>
                    <input className='border w-full rounded-sm border-button/30  pl-3 pr-7 py-2 outline-0' type="password " name="" id="" />
                    <div className='absolute right-1.5 mt-0.5 top-1/2 -translate-y-1/2  text-[17px] '>
                      <FaRegEye/>
                    </div>
                  </div>
                  <div className=' text-[14px] mt-2'>
                    <p>Parola trebuie sa contina:</p>
                    <div className='flex items-center space-x-1.5 '>
                      <FaRegCheckCircle className='text-green-400'/>
                      <p>Minim 8 caractere</p>
                    </div>
                    <div className='flex items-center space-x-1.5 '>
                      <FaRegCheckCircle className='text-green-400'/>
                      <p>Include litere mari si mici</p>
                    </div>
                    <div className='flex items-center space-x-1.5 '>
                      <FaRegCheckCircle className='text-green-400'/>
                      <p>Include cel putin un numar</p>
                    </div>
                    <div className='flex items-center space-x-1.5 '>
                      <FaRegCheckCircle className='text-green-400'/>
                      <p>Include cel putin un caracter special</p>
                    </div>
                  </div>

                  <div className='flex justify-end space-x-3 mt-3'>
                    <button onClick={()=>{
                      setVisibleSchimba(false); document.body.classList.remove("overflow-hidden")
                    }} className='border px-3 py-1 rounded-sm cursor-pointer hover:bg-button/60 duration-300 transition-all ease-in-out border-button/30 '>Anuleaza</button>
                    <button onClick={()=>{
                      setVisibleSchimba(false); document.body.classList.remove("overflow-hidden")
                    }} className='border px-3 py-1 rounded-sm cursor-pointer hover:bg-button/60 bg-button duration-300 transition-all ease-in-out border-button/30 '>Actualizeaza parola</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
      {
        visibleSesiuni && (
          <div className='fixed z-300 inset-0 bg-gray-400/15 flex justify-center items-center px-3'>
            <div className='border border-button bg-background px-3 py-3 w-130 rounded-lg'>
              <div className='flex justify-end'>
                <IoClose onClick={()=>{setVisibleSesiuni(false); document.body.classList.remove("overflow-hidden")}} className='cursor-pointer' size={20}/>
              </div>
              <div>
                <p className='text-[19px] font-medium'>Sesiuni active</p>
                <p className='text-gray-400 text-[14px]'>Gestioneaza dispozitivele pe care esti autentificat in prezent.</p>
              </div>

              <div className='text-[14px] mt-1.5'>
                <p>Sesiunea ta curenta</p>
                <div className='text-gray-400 text-[14px] border border-button/30 px-3 py-3 rounded-lg mt-1.5 flex items-center justify-between'>
                  <div className='text-white text-[16px] flex items-center space-x-3'>
                    <RiComputerLine size={22}/>
                    <div className='flex flex-col  '>
                      <div className='flex-wrap flex items-center'>
                        <p>Windows</p>
                        <MdKeyboardArrowRight/>
                        <p>Chrome</p>
                      </div>
                      <div>
                        <p className='text-gray-400 text-[14px]'>Bucuresti, Romania, Adresa IP: 86.124.23.45</p>
                      </div>
                      
                    </div>
                  </div>
                  <div>
                    <p className='border px-3  border-button/30 rounded-lg'>Acum</p>
                  </div>
                </div>
              </div>

              <div className='text-[14px] mt-1.5'>
                <p>Alte sisiuni active</p>
                <ul>
                  { 
                    [
                      {icon:"phone",dispozitiv:"Iphone",aplicatie:"Safari",locatie:"Cluj-Napoca, Romania",adresaIp:"188.25.67.89", timp:"2 ore in urma"},
                      {icon:"pc",dispozitiv:"Windows",aplicatie:"Chrome",locatie:"Iasi, Romania",adresaIp:"79.112.33.89", timp:"3 zile in urma"},
                      {icon:"phone",dispozitiv:"Android",aplicatie:"Chrome",locatie:"Timisoara, Romania",adresaIp:"91.45.12.67", timp:"5 zile in urma"},
                    ].map((par,i)=>
                    { const Icon1 = iconMap2[par.icon];
                      return(

                      <li key={i} className='text-gray-400 text-[14px] border border-button/30 px-3 py-3 rounded-lg mt-1.5 flex items-center justify-between cursor-pointer hover:bg-button/30 transition-all space-x-3 ease-in-out duration-300'>
                        <div className='text-white text-[16px] flex items-center space-x-3'>
                          <div>
                            {Icon1 && <Icon1 size={22}/>}
                          </div>
                          <div className='flex flex-col  '>
                            <div className='flex-wrap flex items-center'>
                              <p>{par.dispozitiv}</p>
                              <MdKeyboardArrowRight/>
                              <p>{par.aplicatie}</p>
                            </div>
                            <div>
                              <p className='text-gray-400 text-[14px]'>{par.locatie}, Adresa IP: {par.adresaIp}</p>
                            </div>
                            
                          </div>
                        </div>
                        <div className='shrink-0 flex items-center space-x-1.5'>
                          <p className='  text-green-400'>{par.timp}</p>
                          <BsThreeDotsVertical/>
                        </div>
                      </li>
                    )})
                  }
                </ul>
              </div>

              <div className='flex justify-end space-x-3 mt-3'>
                <button onClick={()=>{
                  setVisibleSesiuni(false); document.body.classList.remove("overflow-hidden")
                }} className='border px-3 py-1 rounded-sm cursor-pointer hover:bg-red-400/30 duration-300 transition-all ease-in-out border-red-400 text-red-400'>Dezactiveaza toate sesiunile</button>
                <button onClick={()=>{
                  setVisibleSesiuni(false); document.body.classList.remove("overflow-hidden")
                }} className='border px-3 py-1 rounded-sm cursor-pointer hover:bg-button/60 bg-button duration-300 transition-all ease-in-out border-button/30 '>Inchide</button>
              </div>

            </div>
          </div>
        )
      }
      
      <div className='border  border-button/30 rounded-lg px-3 py-3'>
        <div className={`flex items-center justify-between ${visibleBara?"max-modf2:flex-col max-modf2:items-start max-modf2:space-y-3 ": "max-modf2:flex-row"}`}>
          <div>
            <p>Autentificare in doi pasi (2FA)</p>
            <p className='text-gray-400 text-[15px]'>Activeaza autentificarea cu doi pentru a adauga un nivel suplimentar de securitate contului tau.</p>
          </div>
          <div>
            <p className='text-[15px] bg-green-400/30 px-3 py-0.5 rounded-full text-green-400'>Activat</p>
          </div>
          
        </div>
        <div className='border border-button/30 px-3 py-3 relative mt-3 rounded-lg'>
          
          <div className={`flex items-center justify-between space-x-5 ${visibleBara?"max-modf2:flex-col max-modf2:items-start max-modf2:space-y-3 ": "max-modf2:flex-row"}`}>
            <div className={` flex items-center space-x-3 `}>
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

      <div className={`border border-button/30 rounded-lg px-3 py-3 flex items-center justify-between  space-x-5 ${visibleBara?"max-modf2:flex-col max-modf2:items-start max-modf2:space-y-3 ": "max-modf2:flex-row"}`}>
        <div className='flex items-center space-x-3'>
          <div className='text-button bg-button/30 px-2 py-2 rounded-lg text-[26px]'>
            <FaLock/>
          </div>
          <div>
            <p>Schimba parola</p>
            <p className='text-gray-400 text-[14px]'>Asigura-te ca folosesti o parola puternica pentru a-ti proteja contul.</p>
          </div>
        </div>

        <div className='shrink-0 text-[14px]'>
          <button onClick={()=>{setVisibleSchimba(true); document.body.classList.add("overflow-hidden")}} className='border border-button/30 px-3 py-1 rounded-lg hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out'>Schimba parola</button>
        </div>
      </div>


      <div className='border border-button/30 rounded-lg px-3 py-3  '>
        
        <div className={`flex items-center justify-between space-x-5 ${visibleBara?"max-modf2:flex-col max-modf2:items-start max-modf2:space-y-3 ": "max-modf2:flex-row"}`}>
          <div>
            <p>Sesiuni active</p>
            <p className='text-gray-400 text-[14px]'>Monitorizeaza dispozitivele pe care este autentificat in prezent.</p>
          </div>

          <div className='shrink-0 text-[14px]'>
            <button onClick={()=>{setVisibleSesiuni(true); document.body.classList.add("overflow-hidden")}} className='border border-button/30 px-3 py-1 rounded-lg hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out'>Vezi sesiuni</button>
          </div>
        </div>
        <div className='text-gray-400 text-[14px] border border-button/30 px-3 py-3 rounded-lg mt-1.5 flex items-center justify-between'>
          <div className='text-white text-[16px] flex items-center space-x-3'>
            <RiComputerLine className='shrink-0' size={22}/>
            <div className='flex flex-col  '>
              <div className='flex-wrap flex items-center'>
                <p>Windows</p>
                <MdKeyboardArrowRight/>
                <p>Chrome</p>
              </div>
              <div>
                <p className='text-gray-400 text-[14px]'>Bucuresti, Romania, Adresa IP: 86.124.23.45</p>
              </div>
              
            </div>
          </div>
          <div>
            <p className='border px-3  border-button/30 rounded-lg'>Acum</p>
          </div>
        </div>
      </div>
      

      <div className='border border-button/30 rounded-lg px-3 py-3'>
        <p>Securitate Cont</p>
        <div className='mt-5 flex items-center space-x-3 max-modf:justify-between '>
          <div className='text-[14px] flex flex-col items-center'>
            <div className='w-20 h-20 bg-green-400 rounded-full relative'>
              <div className='absolute inset-1.5 bg-background font-medium rounded-full flex items-center justify-center text-[18px]'><p>100%</p></div>
            </div>
            <div className='mt-1.5 text-center text-green-400'>
              <p>Securitate ridicata</p>
            </div>
          </div>

          <div className='text-[12.5px]'>
            <p>Toate masurile de securitate sunt active</p>
            <ul className=''>
              <li className='flex items-center space-x-3'>
                <FaRegCircleCheck className='text-green-400'/>
                <p>Parola puternica</p>
              </li>
              <li className='flex items-center space-x-3'>
                <FaRegCircleCheck className='text-green-400'/>
                <p>Autentificare cu doi pasi</p>
              </li>
              <li className='flex items-center space-x-3'>
                <FaRegCircleCheck className='text-green-400'/>
                <p>Email verificat</p>
              </li>
              <li className='flex items-center space-x-3'>
                <FaRegCircleCheck className='text-green-400'/>
                <p>Dispozitive recunoscute</p>
              </li>
            </ul>
          </div>
        </div>
      </div>


      
    </div>
  )
}

export default Securitate
