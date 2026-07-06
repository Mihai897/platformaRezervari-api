import React, { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa";

const HotelFacilitati = () => {
  const {slug} = useParams();
  const {hotel} = useOutletContext();
  const [facilitati,setFacilitati] = useState([]);

  useEffect(()=>{
    fetch(`http://localhost:5000/api/hotels/${slug}/facilitati`)
    .then(res=>res.json())
    .then(data=>setFacilitati(data))
    .catch(err=>console.error(err))
  },[slug]);

  
  
  return (
    <div className='max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8 max-modf8:px-3'>
      <div className='bg-button1 border border-button/40 rounded-b-xl px-4 py-4 '>
        <p className='text-[24px] font-medium'>Facilitati si servicii</p>
        <p className='text-[14px] text-gray-400'>Descopera toate facilitatile oferite de {hotel?.nume} pentru o experienta ne neuitat.</p>
        
        <ul className='grid grid-cols-4 max-modf:grid-cols-2 max-modf2:grid-cols-1 gap-5 max-modf:gap-3 py-4 '>
          {
            
            facilitati.map((par,i)=>{
            
              return (
              
              <li key={par.id} className='px-4 py-3 border border-button/40 rounded-lg'>
               
                <p className='font-medium text-[18px]'>
                  {par?.nume}
                </p>
                <ul className='mt-3'>
                  {par?.detalii.map((par1,i1)=>(
                    <li key={par1.id} className='mt-0.5'>
                      <p className='text-gray-400 text-[14px]'>{par1.facilitate}</p>
                    </li>
                  ))}
                </ul>
              </li>
              
            )})
          }
        </ul>
      </div>
    </div>
  )
}

export default HotelFacilitati
