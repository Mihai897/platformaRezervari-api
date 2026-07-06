import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
const GhidTop = (props) => {
  return (
    <div className='bg-button1/70 py-6 border-y border-y-button/15'>
      <div className='max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8 max-modf8:px-3 space-y-4'>

        <div className='flex items-center space-x-3 text-[12px] flex-wrap'>
          <Link className='text-button' to="/centrul-ajutor">Centrul de ajutor</Link>
          <IoIosArrowForward />
          <p>Ghiduri utile</p>
          <IoIosArrowForward />
          <p>{props.title}</p>
        </div>

        <div className='space-y-2.5'>
          <p className='text-[34px] font-medium'>{props.title}</p>
          <p className='text-gray-300'>{props.description}</p>
          <p className='text-gray-300 -mt-2'>{props.description2}</p>
        </div>
        
        <div className='text-gray-300'>

          <p>{props.time}</p>
        </div>

      </div>
    </div>
  )
}

export default GhidTop
