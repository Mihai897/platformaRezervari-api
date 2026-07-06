import React, { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import { CiStar } from "react-icons/ci";
import { FaCalendarMinus } from "react-icons/fa6";
import { MdAutoMode } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa6";
import { FaChild } from "react-icons/fa6";
import { IoBed } from "react-icons/io5";
import { MdOutlinePets } from "react-icons/md";
import { MdOutlineSmokeFree } from "react-icons/md";
import { HiReceiptTax } from "react-icons/hi";


const HotelPolitici = () => {
  const {slug} =  useParams();
  const [politici,setPolitici] = useState([]);

  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/hotels/${slug}/politici`)
    .then(res=>res.json())
    .then(data=>setPolitici(data))
    .catch(err=>console.error(err))
  },[slug])
  const iconMap = {
    Star: MdAutoMode,
    Calendar: FaCalendarMinus,
    Card: FaRegCreditCard,
    Child: FaChild,
    Pat:IoBed,
    Animale: MdOutlinePets,
    Fumat:MdOutlineSmokeFree,
    Taxe:HiReceiptTax
  }
  return (
    <div className='max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8 max-modf8:px-3'>
      <div className='bg-button1 border border-button/40 rounded-b-xl px-4 py-4'>
        <p className='text-[24px] font-medium'>Politici si informatii importante</p>
        <p className='text-[14px] text-gray-400'>Te rugam sa citesti cu atentie politicile hotelului inainte a a face o rezervare.</p>
        

        <div className='mt-4'>
          <ul className='grid grid-cols-2 gap-4 max-modf1:grid-cols-1'>
            {
            politici?.map((pol,i)=>{
            const Icon = iconMap[pol.icon];
            return(
              <li key={pol?.id} className='px-4 py-3 border border-button/40 rounded-lg'>
                
                <div className='flex items-center space-x-2'> 
                  <p className='text-button mt-0.5'>
                    {Icon && <Icon size={23}/>}
                  </p>
                  <p className='text-[18px] font-medium'>{pol?.nume}</p>
                 
                </div>
                <ul className='mt-2'>
                  {pol?.detalii.map((pol1,i1)=>(
                    <li key={pol1?.id}>
                      <p className='text-gray-400 mt-0.5'>{pol1.politica}</p>
                    </li>
                  ))}
                </ul>
              </li>
              
            )})}
          </ul>
        </div>

        <div className='mt-4'>

          <p className='font-medium text-[18px]'>Infomratii importante</p>
          <ul className='text-gray-400 list-disc ml-8 marker:text-button'>
            <li>Hotelul isi rezerva dreptul de a refuza check-in-ul in cazul unui comportament considerat inadecvat.</li>
            <li>Programul si facilitatile pot fi modificate fara notificare prealabila.</li>
            <li>Pentru cerinte speciale, te rugam sa ne contactezi inainte de sosire.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HotelPolitici
