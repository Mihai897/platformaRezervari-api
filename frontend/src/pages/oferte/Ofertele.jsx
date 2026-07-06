import React from 'react'
import OferteleList from './OferteleList'
import hotels from '../hotels/Hotel/hotels'
import { useState } from 'react'
import { useEffect } from 'react'
const Ofertele = () => {
  const [oferte,setOferte] = useState([]);

  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/oferte`)
    .then(res=>res.json())
    .then(data=>setOferte(data))
    .catch(err=>console.error(err))
  },[]);

  return (
    

    <ul className='space-y-8 mt-4'>
      {
      
      oferte.map(component=>
          <OferteleList oferte={component}/>
        )
      
      
      
     
      }
    </ul>
  )
}

export default Ofertele
