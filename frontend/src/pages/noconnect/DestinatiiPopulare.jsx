import React from 'react'
import DestinatiiPopulareList from './DestinatiiPopulareList'

import hotel from '../hotels/Hotel/hotels'
import { useState } from 'react'
import { useEffect } from 'react'
const DestinatiiPopulare = () => {

  const [hotels,setHotels] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/api/hotels")
    .then(res=>res.json())
    .then(data=>setHotels(data))
    .catch(err=>console.error(err))
  },[]);
  
  return (
    <div className=' pt-15  '>
      <div className='max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8 max-modf8:px-3 pb-4'>
        <p className='text-[24px]  font-medium' >Hoteluri <span className='text-button'>populare</span></p>
      </div>

      <ul className='flex space-x-3 scrollbar-thin overflow-x-scroll max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8 max-modf8:px-3 pb-8'>
        { hotels.slice(0,10).map(component =>
            <DestinatiiPopulareList hotel={component}/>
          )
        }
      </ul>
    </div>
  )
}

export default DestinatiiPopulare
