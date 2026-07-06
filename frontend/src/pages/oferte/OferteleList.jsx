import React from 'react'
import { FaRegHeart, FaStar } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
const OferteleList = ({oferte}) => {
  const navigate = useNavigate()
  return (
    <li key={oferte.id} className='flex max-modf1:flex-col space-x-3 modf1:items-center  max-modf1:relative pb-8 border-b-button/30 border-b'>
      <div className=' w-55 max-modf1:w-full max-modf1:h-60 h-44 max-modf:w-45 overflow-hidden rounded-lg group relative'>
        <img onClick={()=>navigate(`/hotels/${oferte.slug}/camere/${oferte.slugs}`)} src={oferte.image} className='cursor-pointer w-full h-full  object-center   group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="" />
        <button className='cursor-pointer absolute top-3 right-3  bg-button1/80 rounded-full px-1.5 py-1.5'>
          <FaRegHeart size={19}/>
        </button>
        <div className={`absolute bg-green-600  top-3 px-1.5 py-1.5 rounded-lg left-3`}>
          <p className='font-medium'>{oferte.reducerea*100}%</p>
        </div>
      </div>

      <div className='h-full flex-2 modf1:border-r modf1:border-r-button/40 max-modf1:mt-2  max-modf1:pb-3 max-modf1:w-full'>

        <div>
          <p onClick={()=>navigate(`/hotels/${oferte.slug}/camere/${oferte.slugs}`)} className='cursor-pointer font-medium text-[20px]'>{oferte.nume_hotel}, <span className='text-[14px] text-gray-400'>{oferte.nume_camera}</span></p>
          <p className='text-gray-400'>{oferte.locatie}</p>
        </div>


        <div className='mt-2 flex space-x-3 items-center'>
          <div className=''>
            <p className='bg-button/20 px-3 py-3 rounded-lg'>{oferte.rating_mediu}</p>
          </div>
          
          <div>
            <div className='flex space-x-1'>
              {
                [1,2,3,4,5].map(star=>(
                  <FaStar className={star<=Math.round(oferte.rating_mediu)? "text-yellow-400": "text-gray-400"}/>
                ))
              }
            </div>
            <div>
              <p className='mt-1 text-gray-400'>{oferte.numarul_recenziilor} recenzii</p>
            </div>
          </div>

          
        </div>

        <div className='text-gray-400 flex space-x-3 mt-2'>
          <p>{oferte.facilitate}</p>
          <p>{oferte.facilitate1}</p>
        </div>

        <div>
          <p className='text-green-500'>{oferte.anulare_gratuita}</p>
          <p className='text-gray-400'>{oferte.data_anulare}</p>
        </div>

      </div>



      <div className='  flex-1 '>
        <div className='max-modf1:hidden'> 
          <span className={`px-2 bg-green-600 rounded-lg py-2`}>{oferte.reducerea *100}%</span>
        </div>

        <div className='modf1:mt-10'>
          <p className='text-gray-400 line-through'>{oferte?.tarife[1].pret_tarif} RON</p>
          <p className='text-gray-400'><span className='text-white font-medium max-modf:text-[16px] text-[20px]'>{Math.round((oferte?.tarife[1].pret_tarif-oferte?.tarife[1].pret_tarif*oferte?.reducerea)*100)/100} RON</span>/noapte</p>
        </div>

        <div>
          <button onClick={()=>navigate(`/hotels/${oferte.slug}/camere/${oferte.slugs}`)} className='cursor-pointer bg-button w-full py-1.5 rounded-xl mt-3'>Vezi detalii</button>
        </div>
      </div>
    </li>
  )
}

export default OferteleList
