import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import cautariPopulare from './cautariPopulare.json'
import CautariPopulareList from './CautariPopulareList';
import GhidButtonLists from './GhidButtonLists';
import ghidButton from './ghidButton.json';
import GhidList from './GhidList';
import ghid from './ghid.json';
import ArticoleList from './ArticoleList';
import articole from './articole.json';
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaArrowRight } from 'react-icons/fa';

const CentrulDeAjutor = () => {
  const navigate = useNavigate();
  const createCautariPopulareList = (component) =>{
    return <CautariPopulareList 
      id= {component.id}
      key = {component.id}
      text = {component.text}
    />
  }
  const createGhidButtonLists = (component) =>{
    return <GhidButtonLists 
      id= {component.id}
      key = {component.id}
      text = {component.text}
    />
  }
  const createGhidList = (component) =>{
    return <GhidList 
      id= {component.id}
      key = {component.id}
      icon = {component.icon}
      name = {component.name}
      text = {component.text}
      button = {component.button}
    />
  }

  const createArticoleList = (component)=>{
    return <ArticoleList 
      id = {component.id}
      key = {component.id}
      name = {component.name}
      path = {component.path}
    />
  }
  return (
    <div className='  py-4'>
      

      <div className='max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8 max-modf8:px-3'>
        <div className=' w-[45%] max-modf1:w-[65%] max-modf2:w-[95%] text-center mx-auto '>
          <p className='text-[34px]'>Centrul de ajutor</p>
          <p className='text-gray-300'>Gaseste rapid raspunsuri la intrebarile tale sau consulta ghidurile noastre pentru a intelege mai bine cum functioneaza platforma.</p>
          <input type="text" className='bg-button1 w-full px-5 py-2.5 rounded-lg outline-0 mt-4' placeholder='Cauta in centrul de ajutor...' />
        </div>
        <div className='mt-4'>
          <p className='text-[24px] '>Cautari populare</p>
          <ul className=' mt-2  flex overflow-x-scroll scrollbar-thin modf4:scrollbar-none '>
            {cautariPopulare && cautariPopulare.map(createCautariPopulareList)}
          </ul>

          <ul className='grid max-modf8:grid-cols-3 grid-cols-6 mt-4 border-b border-b-button/30 pb-0.5'>
            {ghidButton && ghidButton.map(createGhidButtonLists)}
          </ul>

        </div>

        <div className='pt-4 space-y-4 '>
          <p className='text-[24px]'>Ghiduri utile</p>
          <p className='text-gray-300 text-[15px]'>Exploreaza ghidurile noastre detaliate pentru a intelege cum functioneaza platforma.</p>
          <ul className='grid grid-cols-4 max-modf:grid-cols-3 max-modf8:grid-cols-1 max-modf1:grid-cols-2 gap-3'>
            {ghid && ghid.map(createGhidList)}
          </ul>
        </div>

        <div className='pt-4'>
          <p className='text-[24px] mb-4'>Articole <span className='text-button '>populare</span></p>
          <div className='flex  max-modf1:flex-col modf1:space-x-10 max-modf1:space-y-3'>
            <ul className=' bg-button1/80 border border-button/15 rounded-lg flex-2'>
              {
                articole && articole.map(createArticoleList)
              }
              <div className='py-4'>
                <Link to="/articole/articole-anulare" className='flex items-center max-modf8:px-3 px-10 text-button'><p>Vezi toate articolele</p> <FaArrowRight className='ml-4'/></Link>
              </div>
            </ul>
            <div className='flex-1 bg-button1/80 border border-button/15  px-10 py-10 text-center rounded-lg'>
              <div className='flex justify-center'>
                <TfiHeadphoneAlt className=' text-button px-2 bg-button/30 rounded-full text-[49px]'/>
              </div>

              <div className='mt-5 space-y-5'>
                <p className='text-[19px] font-medium'>Nu ai gasit ce cautai?</p>
                <p className='text-gray-300 mb-8'>Echipa noastra este aici pentru tine. Contacteaza-ne si iti vom raspunde cat mai rapid.</p>
                <Link to="/contact" className='bg-button  rounded-lg px-3 py-1.5'>Contacteaza suportul</Link>
              </div>
            </div>
          </div>
        </div>

        
      </div>















      {/*<Link onClick={() => navigate("/ghid/ghid-rezervari")}>
        Vezi ghid ceva
      </Link>*/}
    </div>
  )
}

export default CentrulDeAjutor
