import React from 'react'
import { BiCalendar, BiHeart, BiUser } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { IoExitOutline } from "react-icons/io5";
import {cont} from './contData'
import { NavLink, Outlet, useNavigate, useOutlet, useOutletContext } from 'react-router-dom';
import {setari} from './setariCont'
const SetariCont = () => {
  const {visibleConnect,setVisibleConnect} = useOutletContext();
  const iconMap ={
    rezervari: BiCalendar,
    favorite:BiHeart,
    setari:FiSettings
  }
  const navigate = useNavigate();

  return (
    <div className='bg-button1/55 max-w-screen-2xl max-modf8:px-3 mx-auto px-15 max-modf:px-10 max-modf1:px-8  py-10' >
      <div className='flex modf:space-x-3 max-modf:flex-col max-modf:space-y-3 items-start '>
        <div className='border w-80 max-modf:w-full rounded-lg border-button/10 modf:sticky shrink-0 top-0 bg-button1 shadow-lg px-3 py-3 '>
          <p className='font-medium text-[18px]
          '>Contul meu</p>

          <div className='mt-3 flex space-x-3'>
            <img className='w-12 h-12 rounded-full' src={`${import.meta.env.BASE_URL}home/descopera/exotic.jpg`} alt="" />
            <div>
              <p>Alex Enache</p>
              <p className='text-gray-400'>alex.enache@email.com</p>
            </div>
          </div>
          <ul className='mt-3 flex flex-col space-y-1.5'>
            {
              cont.map((g)=>{
                const Icon = iconMap[g.icon]
                return(
                <NavLink key={g.path} to={g.path} className={({isActive})=>`flex px-3 py-1.5 hover:bg-button transition-all duration-300 ease-in-out space-x-3 items-center ${isActive?"bg-button":""}`}>
                  {Icon && <Icon size={19}/>}
                  <p>{g.label}</p>
                </NavLink>
              )})
            }
            <li onClick={()=>{navigate("/"); setVisibleConnect(false)}} className='flex px-3 py-1.5 hover:bg-button transition-all duration-300 ease-in-out space-x-3 items-center cursor-pointer'>
              <IoExitOutline/>
              <p>Deconectare</p>
            </li>
          </ul>
        </div>

        <div className='border w-full px-3 py-3 bg-button1 border-button/10 rounded-lg shadow-lg'>
          <p className='text-[19px]'>Setari cont</p>
          <p className='mt-1.5 text-gray-400'>Gestioneaza informatiile contului tau si setarile de notificare.</p>

          <ul className='mt-2 flex overflow-x-auto overflow-hidden space-x-3 pb-3 scrollbar-thin'>
            {
              setari.map(set=>(
                <NavLink key={set.path} to={set.path} end={"/setari-cont"}
                className={({isActive})=>`${isActive?"":""} shrink-0 relative group`}
                >
                  {({isActive})=>(
                    <>
                      <p>{set.label}</p>
                      <div className={`h-0.5  bg-button transition-all duration-300 ease-in-out ${isActive?"w-full":"w-0 group-hover:w-full"}`}></div>
                    </>
                  )}
                </NavLink>
              ))
            }
          </ul>

          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default SetariCont
