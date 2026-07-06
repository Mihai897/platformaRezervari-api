import React from 'react'
import { BiSolidBookAlt } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { FaTent } from "react-icons/fa6";
import { LuLoaderCircle } from "react-icons/lu";


const ServicesList = (props) => {
  const iconMap = {
   Book: BiSolidBookAlt,
   Search: FaSearch,
   Tent: FaTent,
   Circle: LuLoaderCircle
  }
  const Icon = iconMap[props.icon]
  return (
    <li className='bg-button1/70 border border-button/15 px-3 py-4 rounded-xl flex  flex-col text-center items-center space-y-3'>
      <div className=' flex '>
        
        {Icon && <Icon className="text-button bg-button1/50 px-1.5 py-1.5 text-[40px]  rounded-lg"/>}
      </div>
      <div>
        <p className='mb-3'>{props.name}</p>
        <p className='text-[14px] text-gray-300'>{props.info}</p>
      </div>
    </li>
  )
}

export default ServicesList
