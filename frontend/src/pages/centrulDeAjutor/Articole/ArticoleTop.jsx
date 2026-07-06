import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

const ArticoleTop = (props) => {
  return (
    <div className=' border-t border-t-button/40'>
      <div className='max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8 max-modf8:px-3 pt-4'>
        <div className='text-gray-300 flex items-center space-x-3 flex-wrap text-[14px]'>
          <p>Centrul de ajutor</p>
          <MdKeyboardArrowRight />
          <p>Articole populare</p>
          <MdKeyboardArrowRight />
          <p className='text-button'>{props.title}</p>
        </div>
      </div>
    </div>
  )
}

export default ArticoleTop
