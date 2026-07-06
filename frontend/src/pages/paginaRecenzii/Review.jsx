import React from 'react'
import ReviewList from './ReviewList'
import { IoChevronDownOutline } from "react-icons/io5";
import { useState } from 'react';
import { useEffect } from 'react';
import { data } from 'react-router-dom';

const Review = () => {
  const [recenzii,setRecenzii]= useState([]);
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/platforma-recenzii`)
    .then(res=>res.json())
    .then(data=>setRecenzii(data))
    .catch(err=>console.error(err))
  },[]);
  return (
    <div className='mt-10'>
      
      <div className='flex items-center space-x-4'>
        <p className='text-button'>Filtreaza recenziile:</p>
        <div >
          <button className='bg-button1 border border-button/40 space-x-3 px-3 py-1.5 rounded-lg flex items-center'>
            <p>Toate evaluarile</p>
            <IoChevronDownOutline className='mt-0.5'/>
          </button>
          
        </div>
        <div >
          <button className='bg-button1 border border-button/40 space-x-3 px-3 py-1.5 rounded-lg flex items-center'>
            <p>Cele mai recente</p>
            <IoChevronDownOutline className='mt-0.5'/>
          </button>
          
        </div>
      </div>

      <ul className='mt-8 grid grid-cols-2 items-stretch gap-4 max-modf:grid-cols-1'>
        {
          recenzii?.map((recenzie)=> <ReviewList props={recenzie}/>)
        }
      </ul>
    </div>
  )
}

export default Review
