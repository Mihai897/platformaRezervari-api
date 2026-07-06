import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";

import IntrebariFrecventeList from './IntrebariFrecventeList';
import intrebariFrecvente from './intrebariFrecvente.json'
import { Link } from 'react-router-dom';

const IntrebariFrecvente = () => {
  const createIntrebariFrecventeList = (component) =>{
    return <IntrebariFrecventeList 
      id = {component.id}
      key = {component.id}
      nume = {component.nume}
      text = {component.text}
      
    />
  }

  
  return (
    <div className=' py-4 '>

      <div className='flex justify-center max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8 max-modf8:px-3'>
        <div className='  text-center space-y-3'>
          <div className='w-[50%] max-md:w-full md:mx-auto '>
            <p className='text-[38px]'>Intrebari <span className='text-button'>Frecvente</span></p>
          <p className='text-gray-300'>Gaseste rapid raspunsuri la cele mai comune intrebari despre rezervari, plati si serviciile noastre.</p>
          

          <ul className='w-full  text-start grid grid-col-1 gap-3 mt-4'>

            
            {intrebariFrecvente && intrebariFrecvente.map(createIntrebariFrecventeList)}
            
            


          </ul>
          </div>
          
         


        </div>
      </div>

       <div className='bg-button1/50 border-y border-y-button/15 py-10 mt-8'>
        <div className=' max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8 max-modf8:px-3'>

          <div className='flex md:justify-center max-modf8:flex-col space-x-4 max-md:justify-between '>
            <div className=''>
              <p>Nu ai gasit raspunsul?</p>
              <p className='text-[14px] text-gray-300'>Echipa nostra este aici sa te ajute.</p>
            </div>
            <div className='max-modf8:mt-3 max-modf8:text-center'>
              <Link to="/contact" className='bg-button items-center max-modf8:justify-center space-x-2 flex rounded-lg px-4 py-1.5'><p>Contacteaza-ne</p> <FaArrowRight className='mt-1' size={14}/></Link>
            </div>
          </div>

          <div className='flex md:justify-center mt-4  '>
            <div className='md:text-center  md:w-[50%]'>
              <p>Daca nu ai gasit raspunsul dorit, poti accesa sectiunea <Link to="/centrul" className='underline text-button'>Centrul de Ajutor</Link> pentru a consulta mai multe ghiduri care te vor ajuta sa intelegi mai bine cum functioneaza platforma noastra.</p>
            </div>
          </div>

        </div>
       </div>
    </div>
  )
}

export default IntrebariFrecvente
