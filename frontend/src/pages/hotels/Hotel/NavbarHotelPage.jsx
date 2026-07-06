import React from 'react'
import {navbar} from './navbarData'
import { NavLink } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
const NavbarHotelPage = ({hotel}) => {
  return (
    <div className='max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8 max-modf8:px-3'>
      <div className='w-full relative'>
        <img src={`${import.meta.env.BASE_URL}${hotel.img}`} className='w-full h-110 object-center max-modf1:h-85 max-modf2:h-65' alt="" />
        <div className='absolute top-0 bg-button1/40 w-full px-5 py-4 flex justify-between items-center'>
          <div>
            <p className='text-[18px] font-medium'>{hotel.nume}</p>
            <div className='flex space-x-1 mt-1'>
              {
                [1,2,3,4,5].map(star =>(
                  <FaStar className={star<=Math.round(hotel.nr_recenzie) ? "text-yellow-400 ": "text-gray-400"}/>
                ))
              }
            </div>
            <p className='text-gray-300 mt-1'>{hotel.locatie}</p>
          </div>

          <div className=''>
           
            <div className='text-center bg-button/80 px-1.5 py-3 rounded-2xl flex flex-col justify-center'>
              <p className='font-medium'>{hotel.nr_recenzie}</p>
              <p className='text-[10px] text-gray-300'>{hotel.text_recenzie} recenzii</p>
            </div>
            
          </div>
        </div>
        
      </div>
      <ul className='space-x-4 bg-button1 border max-modf1:overflow-x-scroll scrollbar-hide flex border-button/40 px-4 py-4'>
        {navbar.map(g =>(
          <NavLink key={g.path} to={g.path} className={({isActive})=>`max-modf1:shrink-0  px-2 py-1 rounded-lg 
            ${isActive? 'bg-button': 'bg-transparent'} 
            `}>
            {g.label}
          </NavLink>
        ))}
      </ul>
    </div>
  )
}

export default NavbarHotelPage
