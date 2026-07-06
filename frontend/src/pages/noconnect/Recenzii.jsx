import React from 'react'
import RecenziiList from './RecenziiList'
import { FaArrowRight } from 'react-icons/fa'
import { data, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
const Recenzii = () => {
 
   

  const [recenzii,setRecenzii] = useState([]);

  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/platforma-recenzii`)
    .then(res=>res.json())
    .then(data=>setRecenzii(data))
    .catch(err=>console.error(err))
  },[])


  const navigate = useNavigate();
  return (
    <div className='max-w-screen-2xl mx-auto px-15 max-modf:px-10  max-modf8:px-3 max-modf1:px-8'>
      
      <div className=' flex justify-between space-x-3'>
        <p className='text-[24px] max-modf8:text-[19px] font-medium'>Ce spun utilizatorii despre noi</p>
        <button onClick={()=>navigate("/review")} className='text-button cursor-pointer flex items-center space-x-1.5 bg'>
          <p >Vezi toate recenziile</p>
          <FaArrowRight size={12}/>
        </button>
      </div>

      <ul className='grid grid-cols-4 gap-4 mt-6 max-modf:grid-cols-2 max-modf2:grid-cols-1'>
        {
          recenzii?.slice(0,4).map(recenzie=> <RecenziiList props={recenzie}/>)
        }
      </ul>
    </div>
  )
}

export default Recenzii;
