import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const BeneficiiList = (props) => {
  const navigate = useNavigate()
  return (
    <li className='modf1:h-110 relative group overflow-hidden border border-button/20 rounded-lg'>
      <img className='w-full object-cover h-full group-hover:scale-110 transition-transform duration-300 ease-in-out' src={props.img} alt="" />

      <div className='absolute bottom-0 bg-background/70 w-full px-4 py-6 space-y-2'>
        <p className='font-medium text-[24px]'>{props.nume}</p>
        <p className='w-[70%] max-modf:w-[80%]'>{props.info}</p>
        <button onClick={()=>navigate(`${props.link}`)} className='cursor-pointer flex items-center bg-button px-4 py-1.5 transition duration-300 hover:bg-button/70 rounded-lg'><p>{props.button}</p> <FaArrowRight className='text-[14px] ml-3 mt-0.5'/></button>
        
      </div>
    </li>
  )
}

export default BeneficiiList
