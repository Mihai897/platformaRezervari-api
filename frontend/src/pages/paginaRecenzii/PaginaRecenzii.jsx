import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import background from '../../assets/background/background.png'
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from "react-icons/fa6";

import BaraStele from './BaraStele';
import Review from './Review';
import { useEffect } from 'react';
import { useState } from 'react';
const PaginaRecenzii = () => {
  const navigate = useNavigate();


  const [stats,setStats] = useState(null);
    useEffect(()=>{
      fetch(`${import.meta.env.VITE_API_URL}/platforma-recenzii/stats`)
      .then(res=>res.json())
      .then(data=>setStats(data))
      .catch(err=>console.error(err))
    },[])

  return (

  <div className="">
   <div className='space-y-4 py-15 bg-cover bg-no-repeat bg-center ' style={{backgroundImage: `url(${background})`}}>
     <div className='flex items-center space-x-1.5 text-[14px] max-w-screen-2xl mx-auto px-15 max-modf:px-10  max-modf1:px-8 max-modf8:px-3'>
      <button onClick={()=>navigate("/")} className=' cursor-pointer'>Acasa</button>
      <IoIosArrowForward />
      <p className='text-button'>Recenzii</p>
    </div>

    <div className='max-w-screen-2xl mx-auto px-15 max-modf:px-10  max-modf1:px-8'>
      <p className='text-[34px]'>Recenzii despre <span className='text-button'>numesite</span></p>
      <p className='text-gray-300'>Parerea ta conteaza! Descopera experientele altor calatori <br/> si lasa si tu o recenzie despre serviciile noastre.</p>
    </div>
   </div>

   <div className='max-w-screen-2xl mx-auto px-15 max-modf:px-10  max-modf1:px-8'>
    <div className='flex bg-button1/60 border border-button/30 py-4 mt-6 rounded-lg max-modf1:flex-col '>
      <div className='border-r space-y-2  border-r-button/30 flex-1 text-center justify-center flex flex-col'>
        <p className='text-gray-300'>Rating general</p>
        <p className='font-medium text-[34px]'>{stats?.recenzie_platforma}</p>
        <div className='flex space-x-1  justify-center'>
          {[1,2,3,4,5].map(star=>(<FaStar className={`${star<=Math.round(stats?.recenzie_platforma)?"text-yellow-400":"text-gray-400"}`}/>))}
        </div>
        <p>Excelent</p>
        <p className='text-gray-300'>Bazat pe {stats?.total_recenzii} recenzii</p>
      </div>

      <div className='modf1:border-r flex-1 modf1:border-r-button/30'>
        <BaraStele />
      </div>

      <div className='flex-1 space-y-2 px-3 max-modf1:hidden flex flex-col items-ce justify-center'>
        <p className='font-medium text-[18px]'>Ce apreciaza clientii</p>
        <ul className='list-disc text-gray-300 marker:text-button ml-6'>
          <li>Usor de folosit</li>
          <li>Preturi bune</li>
          <li>rezervare rapida</li>
          <li>Suport clienti</li>
          <li>Oferte avantajoase</li>
        </ul>
      </div>
    </div>

    <div className='mt-10 h bg-button1/60 rounded-xl px-3 py-4 border border-button/50' >
      <p className='text-[19px] font-medium'>Lasa o recenzie</p>
      <p className='text-gray-300'>Impartaseste experienta ta si ajuta alti calatorisa ia cele mai bune decizii.</p>
      <div className='flex mt-3 max-modf:flex-col max-modf:space-y-3'>
        <div className='flex-1'>
          <p className='text-gray-300'>Ratingul tau <span className='text-red-600'>*</span></p>
          <div className='flex space-x-1.5 text-button text-2xl mt-4'>
            {[1,2,3,4,5].map(star=>(<FaRegStar />))}
          </div>
        </div>

        <div className='flex-1'>
          <p className='text-gray-300'>Titlu recenzie <span className='text-red-600'>*</span></p>
          <input type="text" placeholder='Ex: Cea mai buna experienta de rezervare!' className='border border-button/40 outline-0 w-[85%] max-modf:w-full max-modf:py-3 text-[14px] rounded-lg px-3 py-1  mt-3' />
        </div>

        <div className='flex-1'>
          <p className='text-gray-300'>Experienta ta <span className='text-red-600'>*</span></p>
          <textarea className='outline-0 px-2.5 py-1 mt-3 text-[14px] h-40 rounded-lg border-button/40 resize-none border w-full' type="text" placeholder='Spune-ne despre experienta ta:' ></textarea>
        </div>
      </div>

      <div className='flex justify-end mt-5 '>
        <button className='bg-button px-3 py-1.5 rounded-lg'>Trimite recenzia</button>
      </div>
    </div>
    
    <Review />
    
   </div>


  </div>
  )
}

export default PaginaRecenzii
