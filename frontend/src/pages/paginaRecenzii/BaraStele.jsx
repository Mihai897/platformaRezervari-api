import React from 'react'
import BaraSteleList from './BaraSteleList'
import { useState } from 'react'
import { useEffect } from 'react';
const BaraStele = () => {
  const [stats,setStats] = useState(null);
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/platforma-recenzii/stats`)
    .then(res=>res.json())
    .then(data=>setStats(data))
    .catch(err=>console.error(err))
  },[])
  
  const procent5 = stats?.total_recenzii >0 ? (stats?.stele_5/stats?.total_recenzii)*100: 0;
  const procent4= stats?.total_recenzii >0 ? (stats?.stele_4/stats?.total_recenzii)*100: 0;
  const procent3 = stats?.total_recenzii >0 ? (stats?.stele_3/stats?.total_recenzii)*100:0;
  const procent2 = stats?.total_recenzii >0 ? (stats?.stele_2/stats?.total_recenzii)*100:0;
  const procent1 = stats?.total_recenzii >0 ? (stats?.stele_1/stats?.total_recenzii)*100:0;


  return (
    <ul className='space-y-2 mt-2 flex flex-col justify-center h-full '>


      <li className='text-gray-300 flex px-3 items-center space-x-2.5'> 
        <div className='flex space-x-2 '>
          <p>5</p>
          <p>stele</p>
        </div>

        <div className='w-50 max-modf1:w-full bg-transparent border border-button/30 h-3 mt-0.5   rounded-full
        '>

        <div className='bg-button h-3   rounded-full' style={{width: `${procent5}%`}} >
          </div>    

        </div>

        <div className='flex max-modf1:w-40 space-x-2'>
          <p>{procent5}%</p>
          <p>({stats?.stele_5})</p>
        </div>
      </li>

      <li className='text-gray-300 flex px-3 items-center space-x-2.5'> 
        <div className='flex space-x-2 '>
          <p>4</p>
          <p>stele</p>
        </div>

        <div className='w-50 max-modf1:w-full bg-transparent border border-button/30 h-3 mt-0.5   rounded-full
        '>

        <div className='bg-button h-3   rounded-full' style={{width: `${procent4}%`}} >
          </div>    

        </div>

        <div className='flex max-modf1:w-40 space-x-2'>
          <p>{procent4}%</p>
          <p>({stats?.stele_4})</p>
        </div>
      </li>

      <li className='text-gray-300 flex px-3 items-center space-x-2.5'> 
        <div className='flex space-x-2 '>
          <p>3</p>
          <p>stele</p>
        </div>

        <div className='w-50 max-modf1:w-full bg-transparent border border-button/30 h-3 mt-0.5   rounded-full
        '>

        <div className='bg-button h-3   rounded-full' style={{width: `${procent3}%`}} >
          </div>    

        </div>

        <div className='flex max-modf1:w-40 space-x-2'>
          <p>{procent3}%</p>
          <p>({stats?.stele_3})</p>
        </div>
      </li>

      <li className='text-gray-300 flex px-3 items-center space-x-2.5'> 
        <div className='flex space-x-2 '>
          <p>2</p>
          <p>stele</p>
        </div>

        <div className='w-50 max-modf1:w-full bg-transparent border border-button/30 h-3 mt-0.5   rounded-full
        '>

        <div className='bg-button h-3   rounded-full' style={{width: `${procent2}%`}} >
          </div>    

        </div>

        <div className='flex max-modf1:w-40 space-x-2'>
          <p>{procent2}%</p>
          <p>({stats?.stele_2})</p>
        </div>
      </li>

      <li className='text-gray-300 flex px-3 items-center space-x-2.5'> 
        <div className='flex space-x-2 '>
          <p>1</p>
          <p>stele</p>
        </div>

        <div className='w-50 max-modf1:w-full bg-transparent border border-button/30 h-3 mt-0.5   rounded-full
        '>

        <div className='bg-button h-3   rounded-full' style={{width: `${procent1}%`}} >
          </div>    

        </div>

        <div className='flex max-modf1:w-40 space-x-2'>
          <p>{procent1}%</p>
          <p>({stats?.stele_1})</p>
        </div>
      </li>



    </ul>
  )
}

export default BaraStele
