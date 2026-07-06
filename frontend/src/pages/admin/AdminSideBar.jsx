import React from 'react';
import {adminNav} from './adminNav';
import {nas} from './nas'
import { Link, NavLink } from 'react-router-dom';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import { IoHomeOutline } from "react-icons/io5";
import { LuCalendarRange } from "react-icons/lu";
import { LuHotel } from "react-icons/lu";
import { IoBedOutline } from "react-icons/io5";
import { MdFamilyRestroom } from "react-icons/md";
import { MdOutlineLocalOffer } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { BiBadge } from "react-icons/bi";


const AdminSideBar = ({visibleBara}) => {
  const iconMap=
    {
      Home: IoHomeOutline,
      Rezervari: LuCalendarRange,
      Hotel: LuHotel,
      Camere: IoBedOutline,
      Clienti: MdFamilyRestroom,
      Oferte: MdOutlineLocalOffer,
      Settings: IoSettingsSharp,
      Facilitati: BiBadge
    }
  
  return (
    <div className='modf5:mt-18'>
      
      <div className={`w-43 fixed h-full pr-3  flex flex-col border-r overflow-hidden border-r-button/40  transition-all z-1 ease-in-out duration-300 ${visibleBara? "translate-x-0 ": " -translate-x-full opacity-0"}  py-4 `}>
        <p className='pb-3 border-b border-b-button/30 px-3 text-[14px]'>MANAGEMENT</p>
        <div className='mt-3'>
          {
            adminNav.map((g)=>{
              const Icon = iconMap[g.icon]
              return (
              <NavLink key={g.path} to={g.path} end={g.path === "/admin"} onClick={()=>{window.scrollTo(0, 0);}}
              className={({isActive})=>`px-3 transition-all rounded-lg mb-1 duration-300 ease-in-out hover:bg-button/50 py-1.5 flex items-center space-x-3
              ${isActive? "bg-button/30 text-button ":"bg-transparent text-gray-400"}
              `}
              >
                {Icon && <Icon />}
                <p>{g.label}</p>
              </NavLink>
            )})
          }
        </div>
        <p className='py-3 my-3 border-y border-y-button/30 px-3 text-[14px]'>CONFIGURARE</p>
        <div className='border-b border-b-button/30 pb-3'>
          {
          nas.map((g)=>{
            const Icon = iconMap[g.icon]
            return(
            <NavLink key={g.path} to={g.path} onClick={()=>{window.scrollTo(0, 0);}}
            className={({isActive})=>`px-3 transition-all hover:bg-button/50 mb-1 duration-300 rounded-lg ease-in-out py-1.5 flex items-center space-x-3
              ${isActive? "bg-button/30 text-button ":"bg-transparent text-gray-400"}
            `}
            >
              {Icon && <Icon/>}
              <p>{g.label}</p>
            </NavLink>
          )})
        }
        </div>
        <div className=' h-full relative'>
          <Link to={"/"} className='absolute top-2  text-red-400 hover:bg-red-400/30 rounded-lg transition-all ease-in-out duration-300 px-3 py-1.5'>Deconecteaza-te</Link>
        </div>
      </div>
    </div>
  )
}

export default AdminSideBar
