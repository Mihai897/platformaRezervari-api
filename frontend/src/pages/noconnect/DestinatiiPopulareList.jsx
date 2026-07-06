import React from 'react'
import { IoMdStar } from "react-icons/io";
import { Link } from 'react-router-dom';

const OferteList = ({hotel}) => {
  
  return (
    <Link key={hotel.id} to={`/hotels/${hotel.slug}`} className='w-[35%] h-70 max-modf:w-[50%] max-modf1:w-[60%] max-modf2:w-[70%] shrink-0 relative group overflow-hidden border border-button/20 rounded-lg'>
      
      <img className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out' src={`${import.meta.env.BASE_URL}${hotel.img}`} alt="" />
      
      <div className='absolute bottom-0 bg-background/65 w-full py-3'>
        <div className='px-4'>
          <p className='font-medium '>{hotel.nume}</p>
          <div className='flex space-x-3'>
            <div className='flex items-center text-orange-400'>
              <IoMdStar className='mr-1'/>
              <p>{hotel.rating_hotel}</p>
            </div>
            <p className='text-gray-300'>( {hotel.total_recenzii} recenzii)</p>
          </div>
          
        </div>
      </div>
    </Link>
  )
}

export default OferteList
