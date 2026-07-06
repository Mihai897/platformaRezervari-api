import React from 'react'
import WhyList from './WhyList'
import why from './why.json'
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
const Why = () => {
  const createWhyList = (component) =>{
    return <WhyList 
      id = {component.id}
      key = {component.id}
      icon = {component.icon}
      nume = {component.nume}
      info = {component.info}
    />
  }
  const navigate = useNavigate()
  return (
    <div className='bg-button1 border-y  border-y-button/15'>
      <div className='max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8 py-10 flex space-x-8 max-modf1:flex-col max-modf8:px-3'>
        <div className=' modf1:flex-1 space-y-4 max-modf1:w-[80%] max-modf1:mx-auto max-modf1:text-center max-modf1:pb-7'>
          <p className='text-[20px] font-medium text-button'>De ce sa rezervi cu noi?</p>
          <p className='font-medium text-[24px]'>Calatorii mai simple, experiente mai frumoase</p>
          <p className='text-[12.5px] text-gray-300'>Iti oferim mai mult decat o camera de hotel. Beneficiezi de servicii excelente si suport dedicat pentru o experienta fara griji.</p>
          <button onClick={()=>navigate("/about")} className='cursor-pointer max-modf1:mx-auto flex items-center bg-button px-4 py-1.5 transition duration-300 hover:bg-button/70 rounded-lg'><p>Afla mai multe despre noi</p> <FaArrowRight className='text-[14px] ml-3 mt-0.5'/></button>
        </div>
        <ul className='modf1:flex-2 grid grid-cols-3 max-modf1:grid-cols-2 gap-5 max-modf1:space-y-7 space-x-4 max-modf1:mx-auto '>
          {why && why.map(createWhyList)}
        </ul>
      </div>
    </div>
  )
}

export default Why
