import React, { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import { FaStar, FaUserGroup } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa6";
import { MdFamilyRestroom } from "react-icons/md";
import { IoTimerOutline } from "react-icons/io5";
import { FaWarehouse } from "react-icons/fa6";
import { BiSolidLike } from "react-icons/bi";

const HotelRecenziiLista = () => {
  const {hotel}= useOutletContext();
  const {slug} = useParams();
   
  const [recenzii,setRecenzii] = useState([]);
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/rooms/${slug}/recenzii`)
    .then(res=>res.json())
    .then(data=>setRecenzii(data))
    .catch(err=>console.error(err))
  },[slug]);
  const iconMapCalator = {
    Cuplu: FaUserGroup,
    Singur: FaUserTie,
    Familie: MdFamilyRestroom
  }
  const iconMapPerioada = {
    Perioada:IoTimerOutline
  }
  const iconMapRoom = {
    Room:FaWarehouse
  }


  return (
   
    <ul className='space-y-4 '>

      {recenzii?.map((recenzie,i1)=>{
        const Icon = iconMapCalator[recenzie.tip_calator]
        const IconPerioada = iconMapPerioada[recenzie.iconPerioada]
        const IconRoom = iconMapRoom[recenzie.iconRoom];

        const recenzieDataPostata = recenzie.created_at;
        const createdDate = new Date(recenzieDataPostata);
        const today = new Date();
        const diffTime = today -createdDate;
        const diffDays = Math.floor(diffTime/ (1000*60*60*24));

        return(
        <li key={recenzie?.id} className='flex max-modf1:flex-col  border px-4 py-4 border-button/30 rounded-lg'>
 
          <div className='flex-1 modf1:border-r modf1:border-r-button/30 modf1:pr-4  flex flex-col justify-center '>
            <div className='flex space-x-3 items-center '>
              <div className='w-10 h-10 rounded-full'>
                <img className='rounded-full h-full' src={`${import.meta.env.BASE_URL}${recenzie?.poza_profil}`} alt="" />
              </div>
              <div>
                <div>
                  <p>{recenzie?.nume} {recenzie.prenume}</p>
                </div>
                <p className='-mt-1 text-gray-400 text-[15px]'>{recenzie?.tara}</p>
              </div>
            </div>

            <div className='text-gray-300 mt-1.5 max-modf1:flex max-modf1:justify-between max-modf2:flex-col '>
              <div className='flex items-center space-x-3'>
                {Icon && <Icon  className="text-button"/>}
                <p>{recenzie.tip_calator}</p>
              </div>

              <div className='flex items-center space-x-3'>
                <IoTimerOutline className="text-button" />
                <p>{recenzie.numar_nopti} nopti</p>
              </div>

              <div className='flex items-center space-x-3'>
                <FaWarehouse className="text-button"/>
                <p>{recenzie.nume_camera}</p>
              </div>
              
              
            </div>
          </div>


          <div className='flex-2 max-modf:mt-2  modf1:pl-4'>
            <div className='flex items-center space-x-3 text-gray-400'>
              
              <div className='flex space-x-1'>
                {[1,2,3,4,5].map(star=><FaStar className={star<=Math.round(recenzie.rating) ? "text-yellow-400" : "text-gray-400"}/>)}
              </div>
              
              <p>Acum {diffDays} zile</p>
            </div>

            <div>
              <p className='font-medium'>{recenzie.titlu}</p>
            </div>
            <div>
              <p className='mt-1 text-[15px] text-gray-400'>{recenzie.descriere}</p>
            </div>

            <div className='text-[15px] flex modf2:items-center space-x-5 text-gray-400 mt-1 max-modf2:flex-col'>
              <p>A fost utila aceasta recenzie?</p>
              <div className='flex space-x-3 max-modf2:mt-2 max-modf2:justify-between'>
                <button className='border px-4 py-0.75 border-button/30 rounded-sm flex items-center space-x-1.5'>
                  <BiSolidLike className='text-button text-[18px]'/>
                  <p>14</p>
                </button>
                <button className='border px-4 py-0.75 border-button/30 rounded-sm'>Raspunde</button>
              </div>
            </div>
            
          </div>

        </li>
      )})}
    </ul>
        
  )
}

export default HotelRecenziiLista
