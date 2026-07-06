import React, { useState } from 'react'
import { FaCircleMinus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
const IntrebariFrecventeList = (props) => {
  const [visible,setVisible] = useState(false);
  
  return (
    <li className='flex space-x-3 bg-button1/80 rounded-2xl border border-button px-4 py-4 ' >
      <div>
      
        {visible ? <FaCircleMinus className='mt-1 text-button bg-white rounded-full' size={26} /> :
        <FaCirclePlus className='mt-1 text-button bg-white rounded-full' size={26} />}

      </div>
      <div className='w-full'>
        
        <button className='w-full cursor-pointer pb-1.5'
          onClick={()=>setVisible(!visible)}
        >
          <div className='flex justify-between items-center'>
            <p className='text-[20px] max-md:text-[18px]'>{props.nume} </p>
            {
              visible ? <IoIosArrowUp className='text-button' size={20}/> : 
              <IoIosArrowDown className='text-button' size={20}/>
            }
          </div>
        </button>
        
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
        visible ? "max-h-40 " : "max-h-0"
      }`}>
          <p className={` text-[12.5px] text-gray-300`}>{props.text}</p>
        </div>
        
      </div>
    </li>
  )
}

export default IntrebariFrecventeList
