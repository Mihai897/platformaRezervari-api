import React from 'react'
import OferteList from './OferteList'
import hotels from '../hotels/Hotel/hotels'
import { useState } from 'react'
import { useEffect } from 'react'
const Oferte = () => {
  const [oferte, setOferte] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/api/oferte")
    .then(res=>res.json())
    .then(data=>setOferte(data))
    .catch(err=>console.error(err))
  },[]);
  return (
    <div className='pt-15'>

      <div className='max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8 max-modf8:px-3 pb-8 '>
        <p className=' text-[24px] font-medium'>Oferte Speciale pentru tine</p>
      </div>
      

      <ul className='flex space-x-3 overflow-x-scroll scrollbar-thin max-w-screen-2xl max-modf8:px-3 mx-auto px-15 max-modf:px-10 max-modf1:px-8 pb-8'>
        { 

          oferte.map(component=>
              <OferteList  oferta={component}/>
            )
          
        }


         
      </ul>
    </div>
  )
}

export default Oferte
