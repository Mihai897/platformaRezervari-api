import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import Hoteluri from '../hotels/Hoteluri'
import Ofertele from './Ofertele'
import hotels from '../hotels/Hotel/hotels';
import { useState } from 'react';
import { useEffect } from 'react';


const ListaOferte = () => {

  const [oferte,setOferte] = useState([]);

  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/oferte`)
    .then(res=>res.json())
    .then(data=>setOferte(data))
    .catch(err=>console.error(err))
  },[]);
  
  let nrOferte = oferte.length;
   

  return (
    <div className='modf:flex-3 max-modf:w-full  bg-button1 border border-button/25 px-4 py-4 rounded-sm text-[14px]'>
      
      <div className=' flex modf8:justify-between max-modf8:flex-col modf8:items-center'>
        <p>{nrOferte} de oferte gasite</p>
        <div className='flex max-modf8:mt-3 space-x-3 items-center'>
          <p>Sorteaza dupa:</p>
          <div className='bg-button/20 rounded-sm px-3 py-1 flex items-center space-x-1'>
            <p className='text-gray-300'>Recomandate</p>
            <MdOutlineKeyboardArrowDown className='mt-0.5 text-button' size={19}/>
          </div>
        </div>
      </div>

      <div className='pt-2'>
        <Ofertele />
      </div>
    </div>
  )
}

export default ListaOferte
