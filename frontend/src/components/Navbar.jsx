import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {navbar} from './navbar'
import { RxHamburgerMenu } from "react-icons/rx";
import { GiBeastEye } from "react-icons/gi";
import { IoIosArrowDown, IoIosArrowUp, IoIosNotificationsOutline } from "react-icons/io";
import { BiCalendar, BiHeart, BiUser } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { IoExitOutline } from "react-icons/io5";
import { FaMagento } from 'react-icons/fa6';
import { MdEditCalendar } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiPackage } from "react-icons/fi";
import { RiMegaphoneLine } from "react-icons/ri";

import clientDatas from '../pages/user/client'
import { useEffect } from 'react';

const Navbar = ({visibleConnect,setVisibleConnect}) => {

  const [notificariUser,setNotificariUser] = useState([]);
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/users/notificari/1`)
    .then(res=>res.json())
    .then(data=>setNotificariUser(data))
    .catch(err=>console.error(err))
  },[])

  const [client,setClient] = useState(clientDatas);
  const [visible,setVisible] = useState(false);
  const iconMapNotificari ={
    confirmari: FaRegCalendarCheck,
    checkin: IoIosNotificationsOutline,
    modificari:MdEditCalendar,
    oferte: MdOutlineLocalOffer,
    reduceri: FiPackage,
    noutati:RiMegaphoneLine
  };
  const navigate = useNavigate();
  let nrNotificari = notificariUser?.filter(notificare=>notificare.citita === false).length;
  const [visibleMeniuProfil,setVisibleMeniuProfil] = useState(false);

  const [visibleMeniuNotificari, setVisibleMeniuNotificari]= useState(false);



  const dataNotificare= (dataCurenta)=>{
    const dataPrimire = new Date(dataCurenta)
    const prezent = new Date();
    const diff = prezent - dataPrimire;

    const minute = 60* 1000;
    const hour = 60 *minute;
    const day = 24 * hour;
    const month = 30 * day;
    const year = 365 * day;
    const minutes = Math.floor(diff/minute);
    const hours = Math.floor(diff/hour);
    const days = Math.floor(diff/day);
    const months = Math.floor(diff/month);
    const years = Math.floor(diff/year);

    return diff<minute?"":
      diff<hour?`${minutes} minut${minutes===1?"":"e"}`:
        diff<day?`${hours} or${hours===1?"a":"e"}`:
          diff<month?`${days} zi${days===1?"":"le"}`:
            diff<year?`${months} lun${months===1?"a":"i"}`:
              `${years} an${years===1?"":"i"}`
  }

  return (
    <div className='flex justify-between items-center py-4 max-modf1:relative z-50 max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8 max-modf8:px-3 max-modf:text-[14px]  border-b border-b-button/30'>
      
      <div className='flex items-center'>
        <button onClick={()=>setVisible(!visible)} className='cursor-pointer'>
          <RxHamburgerMenu className='mr-3 mt-0.5 modf1:hidden'/>
        </button>
        <div className='flex max-modf8:hidden items-center space-x-1'>
          <FaMagento className='text-button text-[19px]' />
          <p>Nume<span className='text-button'>Site</span></p>
        </div>
      </div>

      <div className={`flex  space-x-6 max-modf:space-x-2 max-modf1:absolute max-modf1:flex-col max-modf1:top-14 max-modf1:bg-background max-modf1:right-0 max-modf1:left-0 max-modf8:px-3 max-modf1:px-8 max-modf1:transition-all max-modf1:duration-300  max-modf1:ease-in-out max-modf1:overflow-hidden max-modf1:pb-1 ${visible ? "max-modf1:max-h-50 max-modf1:opacity-100" : "max-modf1:max-h-0 max-modf1:opacity-0"}`}>
        {
          navbar.map((g)=>(
            <NavLink key={g.path} to={g.path} className={({isActive})=>`px-2 hover:bg-button transition-all duration-300 ease-in-out py-1 modf1:rounded-lg max-modf1:w-full
            ${isActive? `bg-button ${visible? "max-modf1:bg-button": "max-modf1:bg-transparent"}`: 'bg-transparent'} 
            `}>
              {g.label}
            </NavLink>
          ))
        }
      </div>

      <div className='space-x-4 flex max-modf:space-x-3 items-center'>
        {visibleConnect === false && <button onClick={()=>navigate("/login")} className='cursor-pointer border border-button/30 px-5 py-1.5 rounded-lg hover:bg-button/30 transition-all duration-300 ease-in-out'>Autenficiare</button>}
        {visibleConnect === false && <button onClick={()=>navigate("/register")} className='cursor-pointer bg-button px-5 py-1.5 rounded-lg hover:bg-button/90 transition-all duration-300 ease-in-out'>Creeaza Cont</button>}

        {
          visibleConnect && <div className='relative mr-8'>
            <IoIosNotificationsOutline onClick={()=>{setVisibleMeniuNotificari(!visibleMeniuNotificari); setVisibleMeniuProfil(false)}} className='text-[21px] cursor-pointer'/>
            <p className={`absolute px-1.5  -top-2 text-[10px] bg-button rounded-full 
            ${(nrNotificari>=0 && nrNotificari<10)?"-right-2":(nrNotificari>=10 && nrNotificari<100)?"-right-3.5":(nrNotificari>=100 && nrNotificari<1000)?"-right-5":"-right-6"}  
            `}>{nrNotificari}</p>


            <div  className={`absolute w-140 max-modf:w-125 max-modf1:w-100 max-modf8:w-80  bg-background border-button border  ${visibleMeniuNotificari?"max-h-100 opacity-100":"max-h-0 opacity-0 overflow-hidden"}  rounded-lg left-1/2 max-modf8:-left-25 top-9 modf8:-translate-x-1/2  z-20`}>
              <div className='relative '>
                
                <ul className={`max-h-85 overflow-hidden overflow-y-scroll space-y-3 py-3 scrollbar-none`}>
                  <div className='flex px-3  space-x-3 justify-between'>
                    <p>Notificari</p>
                    <button onClick={()=>{
                      
                      setNotificariUser(prev=>
                        prev.map(notificare=>(
                          {
                            ...notificare,
                            citita: true
                          }
                        ))
                      )

                      


                    }} className='text-button hover:text-button/80 cursor-pointer transition-all duration-300 ease-in-out'>Marcheaza toate ca citite</button>
                  </div>

                  {
                    
                    notificariUser.slice(0,3).map((notificare,iNotificare)=>{
                      
                      const IconNot = iconMapNotificari[notificare?.icon]
                      

                      return(
                      <li key={notificare?.id} className='flex space-x-3 items-start text-[15px] px-3 border-y border-y-button/30 hover:bg-button/30 cursor-pointer transition-all duration-300 ease-in-out py-3'>
                        <div className='shrink-0 bg-button/30 px-3 py-3 rounded-full text-[19px] text-button'>
                          {IconNot &&<IconNot/>}
                        </div>

                        <div className='w-full'>
                          <p>{notificare?.nume_notificare}</p>
                          <p className='text-gray-400'>{notificare?.text_notificare}</p>
                          <p className='text-gray-400'>Acum {dataNotificare(notificare?.created_at)}</p>
                        </div>

                        <div className={`my-auto w-3 h-3 ${notificare?.citita===false?"bg-button":""} rounded-full`}></div>
                      </li>
                    )})

                  }

                  <div className='mt-3 w-full flex '>
                    <button onClick={()=>{navigate("/notificarile-mele"); setVisibleMeniuNotificari(false)}} className='mx-auto cursor-pointer text-button hover:text-button/80 transition-all duration-300 ease-in-out'>Vezi toate notificarle</button>
                  </div>
                  
                </ul>

                <div className='absolute w-3 h-3 bg-button  -top-3 modf8:left-1/2 max-modf8:left-26 modf8:-translate-x-1/2' 
                style={{clipPath:"polygon(50% 0%,100% 100%,0% 100%)"}}></div>
                <div className='absolute w-3 h-3 bg-background   -top-2.75 modf8:left-1/2 max-modf8:left-26 modf8:-translate-x-1/2' 
                style={{clipPath:"polygon(50% 0%,100% 100%,0% 100%)"}}></div>
              </div>
            </div>


          </div>
        }

        {visibleConnect  && <div className='relative'>
          <button onClick={()=>{setVisibleMeniuProfil(!visibleMeniuProfil); setVisibleMeniuNotificari(false)}} className={`cursor-pointer border border-button/30 px-5 py-1.5  hover:bg-button/30  transition-all duration-300 ${visibleMeniuProfil?"rounded-t-lg bg-button/30":"rounded-lg bg-transparent"} flex space-x-3 items-center ease-in-out`}>
            <BiUser className='text-[19px]'/>
            <p>Alex Enache</p>

            {visibleMeniuProfil?<IoIosArrowUp size={17}/>:<IoIosArrowDown size={17}/>}
          </button>

          <ul className={`absolute w-full overflow-hidden z-30 bg-background border border-button/30 transition-all duration-500 ease-in-out space-y-1.5 py-1.5 ${visibleMeniuProfil?"max-h-100 opacity-100":"max-h-0 opacity-0"}`}>
            <li onClick={()=>{navigate("/rezervarile-mele"); setVisibleMeniuProfil(false)}} className='px-5 flex space-x-3 hover:bg-button/30 cursor-pointer items-center py-1.5 transition-all duration-300 ease-in-out '>
              <BiCalendar className='text-[18px]'/>
              <p className='text-[15px] max-modf:text-[14px]'>Rezervarile mele</p>
            </li>
            <li onClick={()=>{navigate("/favorite"); setVisibleMeniuProfil(false)}} className='px-5 flex space-x-3 hover:bg-button/30 cursor-pointer items-center py-1.5 transition-all duration-300 ease-in-out '>
              <BiHeart className='text-[18px]'/>
              <p className='text-[15px] max-modf:text-[14px]'>Favorite</p>
            </li>
            <li onClick={()=>{navigate("/setari-cont"); setVisibleMeniuProfil(false)}} className='px-5 flex space-x-3 hover:bg-button/30 cursor-pointer items-center py-1.5 transition-all duration-300 ease-in-out '>
              <FiSettings className='text-[18px]'/>
              <p className='text-[15px] max-modf:text-[14px]'>Setari cont</p>
            </li>

            <div className='border border-button/30'></div>
            <li onClick={()=>{setVisibleConnect(false); setVisibleMeniuProfil(false)}} className='px-5 flex space-x-3 hover:bg-button/30 cursor-pointer items-center py-1.5 transition-all duration-300 ease-in-out '>
              <IoExitOutline className='text-[18px]'/>
              <p className='text-[15px] max-modf:text-[14px]'>Deconectare</p>
            </li>
          </ul>
        </div>}
      </div>
    </div>
  )
}

export default Navbar
