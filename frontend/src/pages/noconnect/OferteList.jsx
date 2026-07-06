import React from 'react'
import { IoMdStar } from "react-icons/io";
import { Link } from 'react-router-dom';

const OferteList = ({oferta}) => {
  
  return (
    <Link key={oferta.id} to={`/hotels/${oferta.slug}/camere/${oferta.slugs}`} className='w-[35%] max-modf:w-[50%] max-modf1:w-[60%] max-modf2:w-[70%] shrink-0 relative group overflow-hidden border border-button/20 rounded-lg h-70'>
      
      <img className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out' src={`${import.meta.env.BASE_URL}${oferta?.image}`} alt="" />
      <p className={`absolute bg-green-600 top-4 left-4 rounded-xl px-3 py-1.5`}>{oferta?.reducerea*100}%</p>
      <div className='absolute bottom-0 bg-background/65 w-full py-3'>
        <div className='px-4'>
          <p className='font-medium '>{oferta.nume_hotel}, <span className='text-gray-400 text-[14px]'>{oferta.nume_camera}</span></p>
          
          <div className='flex space-x-3'>
            <div className='flex items-center text-orange-400'>
              <IoMdStar className='mr-1'/>
              <p>{oferta.rating_mediu}</p>
            </div>
            <p className='text-gray-300'>( {oferta.numarul_recenziilor} recenzii)</p>
          </div>
          <p>De la {Math.round((oferta.tarife[1].pret_tarif-oferta.tarife[1].pret_tarif*oferta.reducerea)*100)/100} <span className='text-button font-medium'> RON</span> <span className='text-gray-400 ml-1.5 line-through'>{oferta.tarife[1].pret_tarif} RON</span></p>
        </div>
      </div>
    </Link>
  )
}

export default OferteList
